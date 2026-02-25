using BlueMageParty.Server.Data;
using BlueMageParty.Server.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using static BlueMageParty.Server.Controllers.RegisterController;

namespace BlueMageParty.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResetPasswordController : ControllerBase
    {
        public BlueMagePartyContext _context;
        private readonly IConfiguration _configuration;

        public ResetPasswordController(BlueMagePartyContext context, IConfiguration configuration)
        {
            this._context = context;
            this._configuration = configuration;
        }

        [HttpPost("ResetPasswordRequest")]
        public async Task<IActionResult> ResetPasswordRequest([FromBody] ResetPasswordRequestRequest request)
        {
            if (string.IsNullOrEmpty(request.Email))
            {
                return BadRequest("Email is required.");
            }

            var user = await this._context.Users.FirstOrDefaultAsync(x => x.Email == request.Email);
            if (user == null)
            {
                return BadRequest("User does not exist.");
            }

            if(!user.IsVerified)
            {
                return BadRequest("User is not verified.");
            }

            if(user.PasswordResetTokenExpires != null)
            {
                var timeInitialRequestWasSubmitted = user.PasswordResetTokenExpires.GetValueOrDefault().AddMinutes(-int.Parse(_configuration["EmailTimeoutMinutes"]));
                if (DateTime.UtcNow < timeInitialRequestWasSubmitted.AddMinutes(int.Parse(_configuration["EmailWaitMinutes"])))
                {
                    return BadRequest("Please wait " + int.Parse(_configuration["EmailWaitMinutes"]) + " minute(s) before requesting another password reset.");
                }
            }

            user.PasswordResetToken = TokenManager.GenerateToken();
            user.PasswordResetTokenExpires = DateTime.UtcNow.AddMinutes(int.Parse(_configuration["EmailTimeoutMinutes"]));
            this._context.Update(user);
            await this._context.SaveChangesAsync();

            var verificationUrl = $"{_configuration["BackendUrl"]}/api/ResetPassword/ResetPasswordRedirect?token={user.PasswordResetToken}";
            await EmailManager.SendEmail(request.Email, "Complete your password reset request", "Click <a href='" + verificationUrl + "'>here</a> to reset your password.", this._configuration);

            return Ok(new { message = "Password reset email sent." });
        }

        [HttpGet("ResetPasswordRedirect")]
        public async Task<IActionResult> ResetPasswordRedirect(string token)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.PasswordResetToken == token);

            if (user == null)
            {
                return BadRequest("Invalid password reset link.");
            }

            if (user.PasswordResetTokenExpires < DateTime.UtcNow)
            {
                return BadRequest("Password reset link has expired.");
            }

            // Redirect to the login page on the frontend
            return Redirect($"{_configuration["FrontendUrl"]}/resetpassword?token=" + token);
        }

        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordBodyRequest request)
        {
            if (string.IsNullOrEmpty(request.Password))
            {
                return BadRequest("Password is required.");
            }

            if (string.IsNullOrEmpty(request.Token))
            {
                return BadRequest("Token is required.");
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.PasswordResetToken == request.Token);

            if (user == null)
            {
                return BadRequest("Invalid password reset token.");
            }

            if (user.PasswordResetTokenExpires < DateTime.UtcNow)
            {
                return BadRequest("Password reset token has expired.");
            }

            user.PasswordResetToken = null;
            user.PasswordResetTokenExpires = null;
            user.Password = PasswordHasher.HashPassword(request.Password);
            user.UpdatedOn = DateTime.UtcNow;
            await _context.SaveChangesAsync();

            return Ok("Password reset successfully.");
        }

        public record class ResetPasswordRequestRequest(string Email);
        public record class ResetPasswordBodyRequest(string Password, string Token);
    }
}
