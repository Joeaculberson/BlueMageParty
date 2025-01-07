using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace BlueMageParty.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpellOwnedController : ControllerBase
    {
        private readonly BlueMagePartyContext _context;

        public SpellOwnedController(BlueMagePartyContext context)
        {
            _context = context;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetSpellsOwnedByUserId(Guid userId)
        {
            var spellsOwned = await _context.SpellsOwned.Where(x => x.UserId == userId)
                .ToListAsync();

            return Ok(spellsOwned);
        }

        [HttpPost]
        public async Task<IActionResult> UpdateSpellOwned([FromBody] UpdateSpellOwnedRequest request)
        {
            Guid userId = TokenDecoder.DecodeUserIdFromJwtToken(request.authToken);
            var existingSpellOwned = await _context.SpellsOwned
                .FirstOrDefaultAsync(s => s.UserId == userId && s.SpellId == request.spellId);

            if (existingSpellOwned == null && request.isChecked)
            {
                SpellOwned spellOwned = new SpellOwned();
                spellOwned.SpellId = request.spellId;
                spellOwned.UserId = userId;
                spellOwned.Owned = request.isChecked;
                spellOwned.CreatedOn = DateTime.UtcNow;
                _context.SpellsOwned.Add(spellOwned);
            } else if(existingSpellOwned != null)
            {
                existingSpellOwned.Owned = request.isChecked;
                existingSpellOwned.UpdatedOn = DateTime.UtcNow;
                _context.SpellsOwned.Update(existingSpellOwned);
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }

        public record UpdateSpellOwnedRequest(Guid spellId, string authToken, bool isChecked);
    }
}
