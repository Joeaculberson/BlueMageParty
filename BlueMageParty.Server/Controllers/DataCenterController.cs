using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BlueMageParty.Server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class DataCenterController : ControllerBase
    {
        private readonly BlueMagePartyContext _context;

        public DataCenterController(BlueMagePartyContext context)
        {
            _context = context;
        }

        /// <summary>
        /// A method that returns all Data Centers in the DataCenters table.
        /// </summary>
        /// <returns>All Data Centers in the DataCenters table.</returns>
        [HttpGet]
        public async Task<IActionResult> GetHomeWorlds()
        {
            try
            {
                return Ok(await this._context.DataCenters.Include(s => s.HomeWorlds).ToListAsync());
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
