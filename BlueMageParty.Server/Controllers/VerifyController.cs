using BlueMageParty.Server.Data;
using BlueMageParty.Server.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BlueMageParty.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VerifyController : ControllerBase
    {
        public BlueMagePartyContext _context;
        private readonly IConfiguration _configuration;

        public VerifyController(BlueMagePartyContext context, IConfiguration configuration)
        {
            this._context = context;
            _configuration = configuration;
        }

        [HttpGet("VerifyToken")]
        public async Task<IActionResult> VerifyToken(string token)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.VerificationToken == token);

            if (user == null)
            {
                return BadRequest("Invalid verification token.");
            }

            if (user.VerificationExpires < DateTime.UtcNow)
            {
                return BadRequest("Verification link has expired.");
            }

            user.IsVerified = true;
            user.VerificationToken = null; // Clear the token after verification
            user.VerificationCode = null;
            user.VerificationExpires = null;
            user.UpdatedOn = DateTime.UtcNow;
            await _context.SaveChangesAsync();

            // Get the frontend URL from configuration
            var frontendUrl = _configuration["FrontendUrl"];
            if (string.IsNullOrEmpty(frontendUrl))
            {
                return StatusCode(500, "FrontendUrl not configured.");
            }

            // Redirect to the login page on the frontend
            return Redirect($"{frontendUrl}/login?verified=true");
        }

        [HttpPost("VerifyCode")]
        public async Task<IActionResult> VerifyCode(VerifyCodeRequest request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);

            if (user == null || !PasswordHasher.VerifyPassword(request.Code, user.VerificationCode))
            {
                return BadRequest("Invalid verification code.");
            }

            if (user.VerificationExpires < DateTime.UtcNow)
            {
                return BadRequest("Verification code has expired.");
            }

            // Mark user as verified
            user.IsVerified = true;
            user.VerificationToken = null;
            user.VerificationCode = null;
            user.VerificationExpires = null;
            user.UpdatedOn = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return Ok("Account successfully verified.");
        }

        public record class VerifyCodeRequest(string Email, string Code);
    }
}
