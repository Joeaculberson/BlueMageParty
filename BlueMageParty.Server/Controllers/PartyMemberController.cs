using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BlueMageParty.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PartyMemberController : ControllerBase
    {
        private readonly BlueMagePartyContext _context;

        public PartyMemberController(BlueMagePartyContext context)
        {
            _context = context;
        }

        [HttpPost("AddPartyMember")]
        public async Task<IActionResult> AddPartyMember(AddPartyMemberRequest request)
        {
            try
            {
                var partyMember = new PartyMember()
                {
                    PartyId = request.partyId,
                    CharacterId = request.characterId,
                    CreatedOn = DateTime.UtcNow
                };

                await this._context.PartyMembers.AddAsync(partyMember);
                await this._context.SaveChangesAsync();

                return Ok(new { Id = partyMember.Id });
            }
            catch (Exception e)
            {
                var error = new ErrorLog
                {
                    Message = e.Message,
                    StackTrace = e.StackTrace,
                    InnerException = e.InnerException?.Message
                };

                _context.ErrorLogs.Add(error);
                await _context.SaveChangesAsync();
                throw;
            }
        }
        public record AddPartyMemberRequest(Guid characterId, Guid partyId);

        [HttpDelete("RemovePartyMember")]
        public async Task<IActionResult> DeletePartyMember([FromQuery] Guid Id)
        {
            try
            {
                var partyMember = await _context.PartyMembers.FirstOrDefaultAsync(x => x.Id == Id);
                if (partyMember == null)
                {
                    return BadRequest("Party member not found");
                }
                this._context.PartyMembers.Remove(partyMember);
                await this._context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception e)
            {
                var error = new ErrorLog
                {
                    Message = e.Message,
                    StackTrace = e.StackTrace,
                    InnerException = e.InnerException?.Message
                };

                _context.ErrorLogs.Add(error);
                await _context.SaveChangesAsync();
                throw;
            }
        }

    }
}
