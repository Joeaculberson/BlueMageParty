using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BlueMageParty.Server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class HomeWorldController : ControllerBase
    {
        private readonly BlueMagePartyContext _context;

        public HomeWorldController(BlueMagePartyContext context)
        {
            _context = context;
        }

        /// <summary>
        /// A method that returns all Home Worlds in the HomeWorlds table.
        /// </summary>
        /// <returns>All Home Worlds in the HomeWorlds table.</returns>
        [HttpGet]
        public async Task<IActionResult> GetHomeWorlds()
        {
            try
            {
                var homeWorlds = await this._context.HomeWorlds.ToListAsync();
                return Ok(homeWorlds);
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
    }
}
