using BlueMageParty.Server.Data;
using BlueMageParty.Server.Helpers;
using BlueMageParty.Server.Models;
using BlueMageParty.Server.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

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

                var hashedPassword = PasswordHasher.HashPassword(request.Password);

                var user = new User
                {
                    Email = request.Email.Trim(),
                    Password = hashedPassword,
                    CreatedOn = DateTime.Now,
                    UpdatedOn = DateTime.Now
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                return Ok(new { message = "User registered successfully" });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public record class RegisterRequest(string Email, string Password);
    }
}

