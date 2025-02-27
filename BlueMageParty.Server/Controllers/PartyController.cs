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

        [HttpGet("GetMockPartyFromCharacterIds")]
        public async Task<IActionResult> GetMockPartyFromCharacterIds([FromQuery] Guid[] characterIds)
        {
            try
            {
                if (characterIds.Length != 2)
                {
                    return BadRequest("Exactly two character IDs are required.");
                }

                // Fetch the two characters with their spells owned
                var characters = await _context.Characters
                    .Include(c => c.SpellsOwned)
                    .Where(c => characterIds.Contains(c.Id))
                    .Select(c => new
                    {
                        c.Id,
                        c.FirstName,
                        c.LastName,
                        c.UserId,
                        c.LoadstoneCharacterId,
                        c.Avatar,
                        c.Server,
                        SpellsOwned = c.SpellsOwned
                            .Where(so => so.Owned) // Only fetch owned spells
                            .Select(so => so.SpellId)
                            .ToList()
                    })
                    .ToListAsync();

                if (characters.Count != 2)
                {
                    return BadRequest("One or both characters could not be found.");
                }

                // Fetch all spells (only necessary fields)
                var allSpells = await _context.Spells
                    .OrderBy(spell => spell.Number)
                    .Select(spell => new SpellDto
                    {
                        Id = spell.Id,
                        Name = spell.Name,
                        Description = spell.Description,
                        Number = spell.Number,
                        Sources = spell.Sources.ToList(),
                        Patch = spell.Patch,
                        Icon = spell.Icon,
                        IsSolo = spell.IsSolo,
                        IsLightParty = spell.IsLightParty,
                        IsFullParty = spell.IsFullParty
                    })
                    .ToListAsync();

                // Precompute spells owned by each character
                var memberOwnedSpells = characters
                    .Select(character => new HashSet<Guid>(character.SpellsOwned))
                    .ToList();

                // Initialize the list for tracking spells that every party member needs
                var everyoneNeeds = new List<SpellDto>();

                // Find spells that no party member owns
                foreach (var spell in allSpells)
                {
                    bool isMissingForEveryone = memberOwnedSpells
                        .All(ownedSpells => !ownedSpells.Contains(spell.Id));

                    if (isMissingForEveryone)
                    {
                        everyoneNeeds.Add(spell);
                    }
                }

                // Map to DTOs for the mock party data
                var mockParty = new
                {
                    Id = Guid.Empty, // Empty GUID for mock party
                    Name = "Mock Party",
                    EveryoneNeeds = everyoneNeeds,
                    Spells = allSpells,
                    PartyMembers = characters.Select((character, index) => new
                    {
                        Id = Guid.Empty, // Empty GUID for mock party member
                        IsHost = false,
                        Character = new
                        {
                            character.Id,
                            character.UserId,
                            character.FirstName,
                            character.LastName,
                            character.LoadstoneCharacterId,
                            character.Avatar,
                            character.Server,
                            SpellsOwned = character.SpellsOwned
                                .Select(spellId => new
                                {
                                    SpellId = spellId,
                                    Owned = true // Since we only fetched owned spells
                                })
                                .ToList(),
                            MissingSpells = allSpells
                                .Where(spell => !character.SpellsOwned.Contains(spell.Id))
                                .Select(spell => new
                                {
                                    Id = spell.Id
                                })
                                .ToList()
                        }
                    }).ToList()
                };

                return Ok(mockParty);
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

        [HttpGet("GetPartyDetails")]
        public async Task<IActionResult> GetPartyDetails([FromQuery] Guid partyId)
        {
            try
            {
                // Fetch the party with related data (include necessary fields)
                var party = await _context.Parties
                    .Include(x => x.PartyMembers)
                        .ThenInclude(x => x.Character)
                            .ThenInclude(x => x.SpellsOwned) // Only fetch SpellsOwned for ownership checks
                    .Where(x => x.Id == partyId)
                    .Select(x => new
                    {
                        x.Id,
                        x.Name,
                        PartyMembers = x.PartyMembers.Select(member => new
                        {
                            member.Id,
                            member.IsHost,
                            Character = new
                            {
                                member.Character.Id,
                                member.Character.FirstName, // Include FirstName
                                member.Character.LastName, // Include LastName
                                member.Character.UserId,
                                member.Character.LoadstoneCharacterId, // Include LoadstoneCharacterId
                                member.Character.Avatar, // Include Avatar
                                member.Character.Server, // Include Server
                                SpellsOwned = member.Character.SpellsOwned
                                    .Where(so => so.Owned) // Only fetch owned spells
                                    .Select(so => so.SpellId)
                                    .ToList()
                            }
                        }).ToList()
                    })
                    .FirstOrDefaultAsync();

                if (party == null)
                {
                    return BadRequest("Invalid party id.");
                }

                // Fetch all spells (only necessary fields)
                var allSpells = await _context.Spells
                    .OrderBy(spell => spell.Number)
                    .Select(spell => new SpellDto
                    {
                        Id = spell.Id,
                        Name = spell.Name,
                        Description = spell.Description,
                        Number = spell.Number,
                        Sources = spell.Sources.ToList(),
                        Patch = spell.Patch,
                        Icon = spell.Icon,
                        IsSolo = spell.IsSolo,
                        IsLightParty = spell.IsLightParty,
                        IsFullParty = spell.IsFullParty
                    })
                    .ToListAsync();

                // Precompute spells owned by each party member
                var memberOwnedSpells = party.PartyMembers
                    .Select(member => new HashSet<Guid>(member.Character.SpellsOwned))
                    .ToList();

                // Initialize the list for tracking spells that every party member needs
                var everyoneNeeds = new List<SpellDto>();

                // Find spells that no party member owns
                foreach (var spell in allSpells)
                {
                    bool isMissingForEveryone = memberOwnedSpells
                        .All(ownedSpells => !ownedSpells.Contains(spell.Id));

                    if (isMissingForEveryone)
                    {
                        everyoneNeeds.Add(spell);
                    }
                }

                // Map to DTOs for the full party data
                var partyDto = new PartyDto
                {
                    Id = party.Id,
                    Name = party.Name,
                    EveryoneNeeds = everyoneNeeds,
                    Spells = allSpells,
                    PartyMembers = party.PartyMembers.Select(member => new PartyMemberDto
                    {
                        Id = member.Id,
                        IsHost = member.IsHost,
                        Character = new CharacterDto
                        {
                            Id = member.Character.Id,
                            UserId = member.Character.UserId,
                            FirstName = member.Character.FirstName, // Now available
                            LastName = member.Character.LastName, // Now available
                            LoadstoneCharacterId = member.Character.LoadstoneCharacterId, // Now available
                            Avatar = member.Character.Avatar, // Now available
                            Server = member.Character.Server, // Now available
                            SpellsOwned = member.Character.SpellsOwned
                                .Select(spellId => new SpellOwnedDto
                                {
                                    SpellId = spellId,
                                    Owned = true // Since we only fetched owned spells
                                })
                                .ToList(),
                            MissingSpells = allSpells
                                .Where(spell => !member.Character.SpellsOwned.Contains(spell.Id))
                                .Select(spell => new SpellDto
                                {
                                    Id = spell.Id
                                })
                                .ToList()
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
                    StackTrace = ex.StackTrace,
                    InnerException = ex.InnerException?.Message
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
