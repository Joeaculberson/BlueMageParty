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

namespace BlueMageParty.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegisterController : ControllerBase
    {
        public BlueMagePartyContext _context;

        public RegisterController(BlueMagePartyContext context)
        {
            this._context = context;
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
                    VerificationToken = GenerateVerificationToken(),
                    IsVerified = false
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                // Send verification email
                var verificationUrl = $"{Request.Scheme}://{Request.Host}/verify?token={user.VerificationToken}";
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
        public async Task<IActionResult> Verify(string token)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.VerificationToken == token);

            if (user == null)
            {
                return BadRequest("Invalid or expired verification token.");
            }

            user.IsVerified = true;
            user.VerificationToken = null; // Clear the token after verification
            await _context.SaveChangesAsync();

            // Redirect to login with a query parameter indicating success
            return Redirect($"{Request.Scheme}://{Request.Host}/login?verified=true");
        }

        private async Task SendEmail(string To, string Subject, string Body)
        {
            var Client = new SendGridClient(Credentials.SendGridApiKey);
            var From = new EmailAddress(Credentials.SMTPEmail, "noreply");
            var to1 = new EmailAddress(To);
            var HtmlContent = "";
            var Msg = MailHelper.CreateSingleEmail(From, to1, Subject, Body, HtmlContent);
            var Response = await Client.SendEmailAsync(Msg).ConfigureAwait(false);
        }

        private string GenerateVerificationToken()
        {
            var tokenBytes = new byte[32];
            string refreshToken = "";

            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(tokenBytes);
                refreshToken = Convert.ToBase64String(tokenBytes);
            }

            return refreshToken;
        }

        public record class RegisterRequest(string Email, string Password);
    }
}

