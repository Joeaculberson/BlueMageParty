using Azure.Core;
using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetStone.Search.Character;
using NetStone;

namespace BlueMageParty.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly BlueMagePartyContext _context;

        public CharacterController(BlueMagePartyContext context)
        {
            _context = context;
        }

        [HttpGet("SearchDatabaseCharacters")]
        public async Task<IActionResult> SearchDatabaseCharacters([FromQuery] string query)
        {
            if (string.IsNullOrWhiteSpace(query) || query.Length < 3)
            {
                return BadRequest("Query must be at least 3 characters.");
            }
            
            var characters = await _context.Characters
                .Where(c => EF.Functions.Like(c.FirstName, $"%{query}%") || EF.Functions.Like(c.LastName, $"%{query}%"))
                .Select(c => new
                {
                    Id = c.Id,
                    FirstName = c.FirstName,
                    LastName = c.LastName,
                    Avatar = c.Avatar,
                    Server = c.Server,
                    LoadstoneCharacterId = c.LoadstoneCharacterId
                })
                .Take(10)
                .ToListAsync();

            return Ok(characters);
        }

        [HttpGet("GetMissingSpells")]
        public async Task<IActionResult> GetMissingSpells([FromQuery] string characterId)
        {
            var character = await _context.Characters
                .Include(c => c.SpellsOwned)
                .FirstOrDefaultAsync(c => c.Id == new Guid(characterId));

            if (character == null)
            {
                return BadRequest("Character not found.");
            }

            var allSpells = await _context.Spells.Select(s => new Spell { Id = s.Id }).ToListAsync();
            var ownedSpellIds = character.SpellsOwned.Select(s => s.SpellId).ToHashSet();

            var missingSpells = allSpells.Where(s => !ownedSpellIds.Contains(s.Id)).ToList();

            return Ok(missingSpells);
        }

        [HttpGet("CharacterByLoadstoneId")]
        public async Task<IActionResult> GetCharacterByLoadstoneId([FromQuery] string loadstoneCharacterId)
        {
            var characters = await _context.Characters.FirstOrDefaultAsync(x => x.LoadstoneCharacterId == loadstoneCharacterId);
            return Ok(characters);
        }

        [HttpGet("Characters")]
        public async Task<IActionResult> GetCharacters([FromQuery] string authToken)
        {
            Guid userId = TokenDecoder.DecodeUserIdFromJwtToken(authToken);

            // Query the user's characters, ordering by Default (true first), then alphabetically by Name
            var characters = await _context.Characters
                .Where(x => x.UserId == userId)
                .OrderByDescending(x => x.Default) // Default == true first
                .ThenBy(x => x.FirstName) // Alphabetically by FirstName
                .ToListAsync();

            return Ok(characters);
        }


        [HttpPost("SetDefault")]
        public async Task<IActionResult> SetDefault([FromBody] SetDefaultRequest request)
        {
            // Retrieve the active character
            var activeCharacter = await _context.Characters.FirstOrDefaultAsync(x => x.Id == request.characterId);

            if (activeCharacter == null)
            {
                return NotFound("Character not found.");
            }

            // Update the 'Default' flag for all characters of the user
            await _context.Characters
                .Where(x => x.UserId == activeCharacter.UserId)
                .ForEachAsync(character =>
                {
                    character.Default = character.Id == request.characterId;
                });

            // Save changes to the database
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("Remove/{characterId}")]
        public async Task<IActionResult> RemoveCharacter(Guid characterId)
        {
            try
            {
                var character = await _context.Characters
                    .Include(x => x.SpellsOwned)
                    .FirstOrDefaultAsync(c => c.Id == characterId);
                if (character == null)
                {
                    return NotFound("Character not found.");
                }

                _context.Characters.Remove(character);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                var error = new ErrorLog
                {
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    InnerException = ex.InnerException?.Message
                };

                _context.ErrorLogs.Add(error);
                await _context.SaveChangesAsync();
                throw;
            } 
        }

        [HttpPost("RefreshCharacterData")]
        public async Task<IActionResult> RefreshCharacterData(RefreshCharacterDataRequest request)
        {
            var lodestoneClient = await LodestoneClient.GetClientAsync();
            var csq = new CharacterSearchQuery();
            csq.CharacterName = request.Name;
            csq.World = request.Server;

            var searchResponse = await lodestoneClient.SearchCharacter(csq);

            if (searchResponse == null)
                BadRequest("Character name or server is incorrect.");

            var queriedCharacterResults =
            searchResponse?.Results
            .FirstOrDefault(entry => entry.Name.ToLower() == request.Name.ToLower());

            var loadstoneCharacter = queriedCharacterResults.GetCharacter().Result;
            var firstName = request.Name.ToLower().Split(' ')[0];
            var lastName = request.Name.ToLower().Split(' ')[1];
            var character = await this._context.Characters.FirstOrDefaultAsync(
                x => x.FirstName.ToLower() == firstName &&
                x.LastName.ToLower() == lastName &&
                x.Server.ToLower() == request.Server
            );

            if (character == null)
                BadRequest("Character doesn't exist in database.");

            character.FirstName = loadstoneCharacter.Name.Split(' ')[0] + " Test";
            character.LastName = loadstoneCharacter.Name.Split(' ')[1];
            character.Server = loadstoneCharacter.Server;
            character.Title = loadstoneCharacter.Title;
            character.Avatar = loadstoneCharacter.Avatar.ToString();
            character.ActiveClassJobIcon = loadstoneCharacter.ActiveClassJobIcon;
            character.ActiveClassJobLevel = loadstoneCharacter.ActiveClassJobLevel;
            character.Bio = loadstoneCharacter.Bio;
            character.FreeCompany = loadstoneCharacter.FreeCompany?.Name;
            character.Gender = loadstoneCharacter.Gender.ToString();
            character.GrandCompanyName = loadstoneCharacter.GrandCompanyName;
            character.GrandCompanyRank = loadstoneCharacter.GrandCompanyRank;
            character.GuardianDeityIcon = loadstoneCharacter.GuardianDeityIcon.ToString();
            character.GuardianDeityName = loadstoneCharacter.GuardianDeityName;
            character.Nameday = loadstoneCharacter.Nameday;
            character.Portrait = loadstoneCharacter.Portrait.ToString();
            character.Race = loadstoneCharacter.Race;
            character.RaceClanGender = loadstoneCharacter.RaceClanGender;
            character.TownIcon = loadstoneCharacter.TownIcon?.ToString();
            character.TownName = loadstoneCharacter.TownName.ToString();
            character.Tribe = loadstoneCharacter.Tribe;

            this._context.Characters.Update(character);
            await this._context.SaveChangesAsync();

            return Ok(character);
        }


        public record SetDefaultRequest(Guid characterId);
        public class RefreshCharacterDataRequest {
            public string Name { get; set; } = null!;
            public string Server { get; set; } = null!;
        };
    }
}
