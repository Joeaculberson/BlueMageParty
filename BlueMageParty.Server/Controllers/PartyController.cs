using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

                if(party == null)
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
