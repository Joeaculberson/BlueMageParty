using BlueMageParty.Server.Data;
using Microsoft.AspNetCore.Mvc;

namespace BlueMageParty.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly BlueMagePartyContext _context;

        public CharacterController(BlueMagePartyContext context)
        {
            _context = context;
        }
    }
}
