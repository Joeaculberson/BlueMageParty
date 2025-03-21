using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;

namespace BlueMageParty.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly BlueMagePartyContext _context;

        public UsersController(BlueMagePartyContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Returns a list of all Users.
        /// </summary>
        /// <returns>A list of all Users.</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Users.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("GetUser/{jwt}")]
        public async Task<ActionResult<User>> GetUser(string jwt)
        {
            string email = TokenDecoder.DecodeEmailFromJwtToken(jwt);

            if (email == null)
            {
                return Unauthorized("Invalid token or email not found.");
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email.ToLower() == email.ToLower());

            if (user == null)
            {
                return NotFound("User not found.");
            }

            // Even though it's encoded, I don't want to take any chances
            user.Password = string.Empty;
            user.PasswordResetToken = string.Empty;

            return Ok(user);
        }

        [HttpGet("IsAdmin/{jwt}")]
        public async Task<ActionResult<bool>> IsAdmin(string jwt)
        {
            string email = TokenDecoder.DecodeEmailFromJwtToken(jwt);

            if (email == null)
            {
                return Unauthorized("Invalid token or email not found.");
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email.ToLower() == email.ToLower());

            if (user == null)
            {
                return NotFound("User not found.");
            }

            return user.IsAdmin;
        }
    }

}
