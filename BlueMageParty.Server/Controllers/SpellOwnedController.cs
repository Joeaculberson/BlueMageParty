using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("{characterId}")]
        public async Task<IActionResult> GetSpellsOwnedByCharacterId(string characterId)
        {
            var spellsOwned = await _context.SpellsOwned.Where(x => x.CharacterId == new Guid(characterId))
                .ToListAsync();

            return Ok(spellsOwned);
        }

        [HttpPost]
        public async Task<IActionResult> UpdateSpellOwned([FromBody] UpdateSpellOwnedRequest request)
        {
            try
            {
                var existingSpellOwned = await _context.SpellsOwned
    .FirstOrDefaultAsync(s => s.CharacterId == request.characterId && s.SpellId == request.spellId);

                if (existingSpellOwned == null && request.isChecked)
                {
                    SpellOwned spellOwned = new SpellOwned();
                    spellOwned.SpellId = request.spellId;
                    spellOwned.CharacterId = request.characterId;
                    spellOwned.Owned = request.isChecked;
                    spellOwned.CreatedOn = DateTime.UtcNow;
                    await _context.SpellsOwned.AddAsync(spellOwned);
                }
                else if (existingSpellOwned != null)
                {
                    existingSpellOwned.Owned = request.isChecked;
                    existingSpellOwned.UpdatedOn = DateTime.UtcNow;
                    _context.SpellsOwned.Update(existingSpellOwned);
                }

                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                // Log error and return an internal server error
                var error = new ErrorLog
                {
                    Message = ex.Message,
                    StackTrace = ex.StackTrace
                };
                _context.ErrorLogs.Add(error);
                await _context.SaveChangesAsync();

                return NoContent();
            }
        }

        public record UpdateSpellOwnedRequest(Guid spellId, Guid characterId, bool isChecked);
    }
}
