using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        [HttpGet]
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
                return BadRequest(ex.Message);
            } 
        }


        public record SetDefaultRequest(Guid characterId);
    }
}
