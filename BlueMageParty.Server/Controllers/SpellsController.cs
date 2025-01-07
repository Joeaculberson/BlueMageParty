using BlueMageParty.Server.Data;
using BlueMageParty.Server.Migrations;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class SpellsController : ControllerBase
{
    private readonly BlueMagePartyContext _context;

    public SpellsController(BlueMagePartyContext context)
    {
        _context = context;
    }

    /// <summary>
    /// A method that returns all spells in the Spells table.
    /// </summary>
    /// <param name="authToken"></param>
    /// <returns>All spells in the Spells table.</returns>
    [HttpGet("{authToken}")]
    public async Task<IActionResult> GetSpells(string authToken)
    {
        try
        {
            Guid userId = TokenDecoder.DecodeUserIdFromJwtToken(authToken);

            // Retrieve spells and include ownership and sources information
            var spells = await _context.Spells
                .Include(s => s.Sources) // Include Sources for proper loading
                .Select(s => new
                {
                    s.Id,
                    s.Name,
                    s.Number,
                    s.Icon,
                    s.Patch,
                    Owned = _context.SpellsOwned.Any(so => so.SpellId == s.Id && so.UserId == userId && so.Owned),
                    Sources = s.Sources.Select(source => new
                    {
                        source.Id,
                        source.Enemy,
                        source.Location
                    })
                })
                .ToListAsync();

            return Ok(spells);
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



    [HttpPost]
    public async Task<IActionResult> UpdateSpellOwned([FromBody] SpellOwnedVM spellOwned)
    {
        try
        {
            if (spellOwned == null)
            {
                return BadRequest("Invalid spellOwned data.");
            }

            var userId = TokenDecoder.DecodeEmailFromJwtToken(spellOwned.AuthToken);
            if (userId == null)
            {
                return BadRequest("Invalid auth token.");
            }

            var spellOwnedResult = this._context.SpellsOwned.FirstOrDefault(
                x => x.SpellId == spellOwned.SpellId && x.UserId == new Guid(userId));
            if (spellOwnedResult == null)
            {
                //Add to table
                await this._context.SpellsOwned.AddAsync(new SpellOwned()
                {
                    SpellId = spellOwned.SpellId,
                    UserId = new Guid(userId),
                    Owned = spellOwned.Owned
                });
            }
            else
            {
                //Update
                spellOwnedResult.Owned = spellOwned.Owned;
                this._context.SpellsOwned.Update(spellOwnedResult);
            }
            await this._context.SaveChangesAsync();

            return Ok(_context.Spells.ToList());
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

    /// <summary>
    /// Save multiple spells with their associated sources.
    /// </summary>
    [HttpPost("SaveBulk")]
    public async Task<IActionResult> SaveBulkSpells([FromBody] List<SpellVM> spells)
    {
        if (spells == null || spells.Count == 0)
        {
            return BadRequest("Invalid spell data.");
        }

        try
        {
            // Filter out spells that already exist in the database based on the spell Number
            var existingSpells = _context.Spells
                .Where(s => spells.Select(spell => spell.Number).Contains(s.Number))
                .ToDictionary(s => s.Number, s => s.Id);

            var newSpells = new List<Spell>();
            var newSpellSources = new List<SpellSource>();

            foreach (var spellVM in spells)
            {
                // Add new spell if it doesn't exist
                if (!existingSpells.ContainsKey(spellVM.Number))
                {
                    var newSpell = new Spell
                    {
                        Number = spellVM.Number,
                        Name = spellVM.Name,
                        Description = spellVM.Description,
                        Tooltip = spellVM.Tooltip,
                        Order = spellVM.Order,
                        Rank = spellVM.Rank,
                        Patch = spellVM.Patch,
                        Icon = spellVM.Icon,
                        TypeName = spellVM.TypeName,
                        AspectName = spellVM.AspectName
                    };

                    newSpells.Add(newSpell);
                }
            }

            if (newSpells.Any())
            {
                // Save the new spells first, so that their Ids are populated
                await _context.Spells.AddRangeAsync(newSpells);
                await _context.SaveChangesAsync(); // Populate Ids of the spells

                // Now, create and link the SpellSource entities
                foreach (var spellVM in spells)
                {
                    if (!existingSpells.ContainsKey(spellVM.Number))
                    {
                        var savedSpell = newSpells.FirstOrDefault(s => s.Number == spellVM.Number);

                        if (savedSpell != null && spellVM.Sources != null && spellVM.Sources.Any())
                        {
                            foreach (var sourceVM in spellVM.Sources)
                            {
                                var newSpellSource = new SpellSource
                                {
                                    SpellId = savedSpell.Id, // Link to the saved spell Id
                                    Enemy = sourceVM.Enemy,
                                    Location = sourceVM.Location
                                };

                                newSpellSources.Add(newSpellSource);
                            }
                        }
                    }
                    else
                    {
                        // If spell already exists, add new sources to it
                        var existingSpellId = existingSpells[spellVM.Number];

                        foreach (var sourceVM in spellVM.Sources)
                        {
                            var newSpellSource = new SpellSource
                            {
                                SpellId = existingSpellId,
                                Enemy = sourceVM.Enemy,
                                Location = sourceVM.Location
                            };

                            newSpellSources.Add(newSpellSource);
                        }
                    }
                }

                // Save the new spell sources
                await _context.SpellSources.AddRangeAsync(newSpellSources);
                await _context.SaveChangesAsync();
            }

            return Ok(new { message = $"{newSpells.Count} new spells and their sources saved successfully." });
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

            return StatusCode(500, "An error occurred while saving spells and their sources.");
        }
    }
}

