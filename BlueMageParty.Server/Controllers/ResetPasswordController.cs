using BlueMageParty.Server.Data;
using BlueMageParty.Server.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

            if(user.PasswordResetTokenExpiry != null)
            {
                var timeInitialRequestWasSubmitted = user.PasswordResetTokenExpiry.GetValueOrDefault().AddMinutes(-int.Parse(_configuration["EmailTimeoutMinutes"]));
                if (DateTime.UtcNow < timeInitialRequestWasSubmitted.AddMinutes(int.Parse(_configuration["EmailWaitMinutes"])))
                {
                    return BadRequest("Please wait " + int.Parse(_configuration["EmailWaitMinutes"]) + " minute(s) before requesting another password reset.");
                }
            }

            user.PasswordResetToken = TokenManager.GenerateToken();
            user.PasswordResetTokenExpiry = DateTime.UtcNow.AddMinutes(int.Parse(_configuration["EmailTimeoutMinutes"]));
            this._context.Update(user);
            await this._context.SaveChangesAsync();

            var verificationUrl = $"{_configuration["BackendUrl"]}/api/ResetPassword/ResetPassword?token={user.PasswordResetToken}";
            await EmailManager.SendEmail(request.Email, "Complete your password reset request", "Click <a href='" + verificationUrl + "'>here</a> to reset your password.", this._configuration);

            return Ok(new { message = "Password reset email sent." });
        }

        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordBodyRequest request)
        {
            //TODO
            return Ok(new { message = "Password reset successfully." });
        }

        public record class ResetPasswordRequestRequest(string Email);
        public record class ResetPasswordBodyRequest(string Password);
    }
}
