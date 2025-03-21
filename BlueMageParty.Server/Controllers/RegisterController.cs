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
using Azure.Core;
using Microsoft.AspNetCore.Authorization;

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
                    return Conflict(new { message = "A user with this email already exists." });
                }

                var hashedPassword = PasswordHasher.HashPassword(request.Password);
                var verificationCode = TokenManager.GenerateVerificationCode();
                var user = new User
                {
                    Email = request.Email.Trim(),
                    Password = hashedPassword,
                    VerificationToken = TokenManager.GenerateToken(),
                    VerificationCode = PasswordHasher.HashPassword(verificationCode),
                    VerificationExpires = DateTime.UtcNow.AddMinutes(int.Parse(_configuration["EmailTimeoutMinutes"]))
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                // Get the frontend URL from configuration
                var backendUrl = _configuration["BackendUrl"];
                if (string.IsNullOrEmpty(backendUrl))
                {
                    return StatusCode(500, "BackendUrl not configured.");
                }

                this.ProcessEmail(verificationCode, user, backendUrl);

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

        [HttpPost("ResendActivationEmail")]
        public async Task<IActionResult> ResendActivationCode([FromBody] ResendActivationCodeRequest request)
        {
            if (string.IsNullOrEmpty(request.Email))
            {
                return BadRequest("Email is required.");
            }

            var existingUser = await this._context.Users.FirstOrDefaultAsync(x => x.Email == request.Email);
            if(existingUser == null)
            {
                return BadRequest("User does not exist.");
            }
            
            if(existingUser.IsVerified)
            {
                return BadRequest("User already activated.");
            }

            var timeInitialRequestWasSubmitted = existingUser.VerificationExpires.GetValueOrDefault().AddMinutes(-int.Parse(_configuration["EmailTimeoutMinutes"]));
            if (DateTime.UtcNow < timeInitialRequestWasSubmitted.AddMinutes(int.Parse(_configuration["EmailWaitMinutes"])))
            {
                return BadRequest("Please wait " + int.Parse(_configuration["EmailWaitMinutes"]) + " minute(s) before requesting a new code.");
            }

            var verificationCode = TokenManager.GenerateVerificationCode();

            existingUser.Email = request.Email.Trim();
            existingUser.VerificationToken = TokenManager.GenerateToken();
            existingUser.VerificationCode = PasswordHasher.HashPassword(verificationCode);
            existingUser.VerificationExpires = DateTime.UtcNow.AddMinutes(int.Parse(_configuration["EmailTimeoutMinutes"]));

            _context.Users.Update(existingUser);
            await _context.SaveChangesAsync();

            // Get the frontend URL from configuration
            var backendUrl = _configuration["BackendUrl"];
            if (string.IsNullOrEmpty(backendUrl))
            {
                return StatusCode(500, "BackendUrl not configured.");
            }

            this.ProcessEmail(verificationCode, existingUser, backendUrl);

            return Ok(new { message = "Activation email resent. Code/link expires in " + int.Parse(_configuration["EmailTimeoutMinutes"]) + " minute(s)." });
        }

        private async void ProcessEmail(string verificationCode, User user, string backendUrl)
        {
            // Send verification email
            var verificationUrl = $"{backendUrl}/api/verify/verifytoken?token={user.VerificationToken}";
            await EmailManager.SendEmail(user.Email, verificationCode + " is your Blue Mage Party activation code",
                $"<p>Alternatively, click <a href='{verificationUrl}'>here</a> to verify your account. The code/link expires in " + int.Parse(_configuration["EmailTimeoutMinutes"]) + " minute(s).</p>", _configuration);
        }

        public record class RegisterRequest(string Email, string Password);
        public record class ResendActivationCodeRequest(string Email);
    }
}

