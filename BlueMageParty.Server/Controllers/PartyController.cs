using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace BlueMageParty.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PartyController : ControllerBase
    {
        private readonly BlueMagePartyContext _context;
        public PartyController(BlueMagePartyContext context)
        {
            _context = context;
        }

        [HttpGet("GetParty")]
        public async Task<IActionResult> GetParty([FromQuery] Guid partyId)
        {
            try
            {
                var party = _context.Parties
                    .Include(x => x.PartyMembers)
                    .FirstOrDefaultAsync(x => x.Id == partyId);
                if (party == null)
                {
                    return BadRequest("Invalid party id.");
                }
                return Ok(party);
            }
            catch (Exception ex)
            {
                var error = new ErrorLog
                {
                    Message = ex.Message,
                    StackTrace = ex.StackTrace
                };
                _context.ErrorLogs.Add(error);
                await _context.SaveChangesAsync();
                throw;
            }
        }

        [HttpGet("GetPartyDetails")]
        public async Task<IActionResult> GetPartyDetails([FromQuery] Guid partyId)
        {
            try
            {
                // Fetch the party with related data
                var party = await _context.Parties
                    .Include(x => x.PartyMembers)
                        .ThenInclude(x => x.Character)
                            .ThenInclude(x => x.SpellsOwned)
                                .ThenInclude(x => x.Spell) // Include the Spell navigation property
                    .FirstOrDefaultAsync(x => x.Id == partyId);

                if (party == null)
                {
                    return BadRequest("Invalid party id.");
                }

                // Fetch all spells
                var allSpells = await _context.Spells.ToListAsync();

                var everyoneNeeds = new List<SpellDto>();
                // Map to DTOs
                var partyDto = new PartyDto
                {
                    Id = party.Id,
                    Name = party.Name,
                    EveryoneNeeds = allSpells.Select(spells => new SpellDto
                    {
                        Id = spells.Id
                    }).OrderByDescending(spell => spell.Number).ToList(),
                    Spells = allSpells.Select(spell => new SpellDto
                    {
                        Id = spell.Id,
                        Name = spell.Name,
                        Description = spell.Description,
                        Number = spell.Number,
                        Icon = spell.Icon,
                        IsSolo = spell.IsSolo,
                        IsLightParty = spell.IsLightParty,
                        IsFullParty = spell.IsFullParty
                    }).ToList(),
                    PartyMembers = party.PartyMembers.Select(member => new PartyMemberDto
                    {
                        Id = member.Id,
                        CharacterId = member.CharacterId,
                        IsHost = member.IsHost,
                        Character = new CharacterDto
                        {
                            Id = member.Character.Id,
                            FirstName = member.Character.FirstName,
                            LastName = member.Character.LastName,
                            Avatar = member.Character.Avatar,
                            SpellsOwned = member.Character.SpellsOwned.Select(spellOwned => new SpellOwnedDto
                            {
                                Id = spellOwned.Id,
                                CharacterId = spellOwned.CharacterId,
                                SpellId = spellOwned.SpellId,
                                Owned = spellOwned.Owned,
                                CreatedOn = spellOwned.CreatedOn,
                                UpdatedOn = spellOwned.UpdatedOn
                            }).ToList(),
                            MissingSpells = allSpells
                                .Where(spell => !member.Character.SpellsOwned.Any(s => s.SpellId == spell.Id))
                                .Select(spell => new SpellDto
                                {
                                    Id = spell.Id,
                                    Number = spell.Number
                                }).OrderByDescending(spell => spell.Number).ToList()
                        }
                    }).ToList()
                };

                return Ok(partyDto);
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

        [HttpGet("GetPartiesByUserId")]
        public async Task<IActionResult> GetPartiesByUserId([FromQuery] string authToken)
        {
            try
            {
                Guid userId = TokenDecoder.DecodeUserIdFromJwtToken(authToken);
                var parties = _context.Parties
                    .Include(x => x.PartyMembers)
                    .Where(x => x.UserId == userId).ToList();
                return Ok(parties);
            } catch(Exception ex)
            {
                var error = new ErrorLog
                {
                    Message = ex.Message,
                    StackTrace = ex.StackTrace
                };

                _context.ErrorLogs.Add(error);
                await _context.SaveChangesAsync();
                throw;
            }
        }

        [HttpPost("Create")]
        public async Task<IActionResult> CreateParty(CreatePartyRequest request)
        {
            try
            {
                Guid userId = TokenDecoder.DecodeUserIdFromJwtToken(request.authToken);
                Party party = new Party();
                party.Name = request.partyName;
                party.UserId = userId;
                party.CreatedOn = DateTime.UtcNow;
                await this._context.Parties.AddAsync(party);

                PartyMember host = new PartyMember();
                host.PartyId = party.Id;
                host.IsHost = true;
                host.CharacterId = new Guid(request.characterId);
                host.CreatedOn = DateTime.UtcNow;
                await this._context.PartyMembers.AddAsync(host);

                await this._context.SaveChangesAsync();
                return Ok(party);
            } catch(Exception ex)
            {
                var error = new ErrorLog
                {
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    InnerException = ex.InnerException?.ToString()
                };
                _context.ErrorLogs.Add(error);
                await _context.SaveChangesAsync();
                throw;
            }
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> DeleteParty([FromQuery] string partyId)
        {
            try
            {
                Guid partyIdGuid = new Guid(partyId);
                Party party = await this._context.Parties.FirstOrDefaultAsync(x => x.Id == partyIdGuid);

                if (party == null)
                {
                    return BadRequest("Invalid party id");
                }

                this._context.Parties.Remove(party);
                await this._context.SaveChangesAsync();
                return Ok();
            } catch (Exception ex)
            {
                var error = new ErrorLog
                {
                    Message = ex.Message,
                    StackTrace = ex.StackTrace
                };

                _context.ErrorLogs.Add(error);
                await _context.SaveChangesAsync();
                throw;
            }
        }

        public record CreatePartyRequest(string authToken, string characterId, string partyName);
    }
}
