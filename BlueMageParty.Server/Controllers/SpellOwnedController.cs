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
        public async Task<IActionResult> AddSpellsOwned(Guid userId, Guid spellId)
        {
            var existingSpellOwned = await _context.SpellsOwned
                .FirstOrDefaultAsync(s => s.UserId == userId && s.SpellId == spellId);

            if (existingSpellOwned == null)
            {
                SpellOwned spellOwned = new SpellOwned();
                spellOwned.SpellId = spellId;
                spellOwned.UserId = userId;
                spellOwned.CreatedOn = DateTime.UtcNow;
                _context.SpellsOwned.Add(spellOwned);
                await _context.SaveChangesAsync();
            }

            return NoContent();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteSpellsOwned(Guid userId, Guid spellId)
        {
            var existingSpellOwned = await _context.SpellsOwned
                .FirstOrDefaultAsync(s => s.UserId == userId && s.SpellId == spellId);

            if (existingSpellOwned == null)
            {
                return NotFound();
            }

            _context.SpellsOwned.Remove(existingSpellOwned);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
