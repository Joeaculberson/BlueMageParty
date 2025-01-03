using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class SpellsController : ControllerBase
{
    private readonly BlueMagePartyContext _context;

    public SpellsController(BlueMagePartyContext context)
    {
        _context = context;
    }

    [HttpPost("SaveBulk")]
    public async Task<IActionResult> SaveSpells([FromBody] List<Spell> spells)
    {
        try
        {
            if (spells == null || spells.Count == 0)
            {
                return BadRequest("Invalid spell data.");
            }

            // Filter out spells that already exist in the database. Order == Id
            var existingIds = _context.Spells.Select(s => s.Number).ToHashSet();
            var newSpells = spells.Where(s => !existingIds.Contains(s.Number)).ToList();

            if (newSpells.Any())
            {
                _context.Spells.AddRange(newSpells);
                await _context.SaveChangesAsync();
            }

            return Ok(new { message = $"{newSpells.Count} new spells saved successfully." });
        } 
        catch (Exception ex)
        {
            var error = new ErrorLog()
            {
                Message = ex.Message,
                StackTrace = ex.StackTrace
            };

            this._context.ErrorLogs.Add(error);
            await _context.SaveChangesAsync();
            throw ex;
        }

    }
}
