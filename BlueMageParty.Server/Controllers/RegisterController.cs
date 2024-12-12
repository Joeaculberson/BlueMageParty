using BlueMageParty.Server.Data;
using BlueMageParty.Server.Helpers;
using BlueMageParty.Server.Models;
using BlueMageParty.Server.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SendGrid.Helpers.Mail;
using SendGrid;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Mail;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.AspNetCore.WebUtilities;

namespace BlueMageParty.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegisterController : ControllerBase
    {
        public BlueMagePartyContext _context;
        private readonly IConfiguration _configuration;

        public RegisterController(BlueMagePartyContext context, IConfiguration configuration)
        {
            this._context = context;
            _configuration = configuration;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            try
            {
                if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
                {
                    return BadRequest("Email and password are required");
                }

                var duplicateUser = await this._context.Users.FirstOrDefaultAsync(x => x.Email.ToLower() == request.Email.ToLower());
                if (duplicateUser != null)
                {
                    return Conflict(new { message = "A user with this email already exists" });
                }

                var hashedPassword = PasswordHasher.HashPassword(request.Password);
                var user = new User
                {
                    Email = request.Email.Trim(),
                    Password = hashedPassword,
                    VerificationToken = GenerateVerificationToken()
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                // Get the frontend URL from configuration
                var backendUrl = _configuration["BackendUrl"];
                if (string.IsNullOrEmpty(backendUrl))
                {
                    return StatusCode(500, "BackendUrl not configured.");
                }

                // Send verification email
                var verificationUrl = $"{backendUrl}/api/register/verify?token={user.VerificationToken}";
                await SendEmail(user.Email, "Verify your account",
                    $"Click <a href='{verificationUrl}'>here</a> to verify your account.");

                return Ok(new { message = "Registration successful! Check your email to verify your account." });

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

        [HttpGet("Verify")]
        public async Task<IActionResult> VerifyToken(string token)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.VerificationToken == token);

            if (user == null)
            {
                return BadRequest("Invalid or expired verification token.");
            }

            user.IsVerified = true;
            user.VerificationToken = null; // Clear the token after verification
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

        private async Task SendEmail(string ToEmail, string Subject, string Body)
        {
            var Client = new SendGridClient(this._configuration["EmailSettings:SendGridApiKey"]);
            var From = new EmailAddress(this._configuration["EmailSettings:SmtpEmail"], this._configuration["EmailSettings:EmailName"]);
            var To = new EmailAddress(ToEmail);
            var HtmlContent = Body;
            var Msg = MailHelper.CreateSingleEmail(From, To, Subject, "", HtmlContent);
            var Response = await Client.SendEmailAsync(Msg).ConfigureAwait(false);
        }

        private string GenerateVerificationToken()
        {
            var tokenBytes = new byte[32];

            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(tokenBytes);
            }

            return WebEncoders.Base64UrlEncode(tokenBytes);
        }

        public record class RegisterRequest(string Email, string Password);
    }
}

