namespace BlueMageParty.Server.Controllers
{
    using BlueMageParty.Server.Data;
    using BlueMageParty.Server.Helpers;
    using BlueMageParty.Server.Models;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.IdentityModel.Tokens;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;

    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly BlueMagePartyContext _context;
        private readonly IConfiguration _configuration;

        public LoginController(BlueMagePartyContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginRequest request)
        {
            try
            {
                if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
                {
                    return BadRequest("Email and password are required");
                }

                var user = await this._context.Users.FirstOrDefaultAsync(x => x.Email.ToLower() == request.Email.ToLower());
                if (user == null)
                {
                    return Unauthorized("Invalid credentials");
                }

                // Check if the user is locked out
                if (user.LockoutEnd.HasValue && user.LockoutEnd.Value > DateTime.UtcNow)
                {
                    return Unauthorized($"Your account is locked. Please try again later.");
                }

                // Verify the password
                if (PasswordHasher.VerifyPassword(request.Password, user.Password))
                {
                    if (user.IsVerified)
                    {
                        // Reset failed login attempts on successful login
                        user.FailedLoginAttempts = 0;
                        user.LockoutEnd = null;
                        await _context.SaveChangesAsync();

                        var token = GenerateJwtToken(request.Email);
                        return Ok(new { auth_token = token });
                    }
                    else
                    {
                        return Unauthorized("Your account needs to be verified before you can login.");
                    }
                }
                else
                {
                    // Increment failed login attempts
                    user.FailedLoginAttempts += 1;

                    // Check if failed attempts exceed the limit
                    if (user.FailedLoginAttempts >= 5) // Adjust limit as needed
                    {
                        user.LockoutEnd = DateTime.UtcNow.AddMinutes(15); // Lockout duration
                        user.FailedLoginAttempts = 0; // Reset attempts after lockout
                    }

                    await _context.SaveChangesAsync();
                    return Unauthorized("Invalid credentials");
                }
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


        private string GenerateJwtToken(string username)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this._configuration["LoginSettings:JWTSecurityKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: "AuthApp",
                audience: "AuthAppUsers",
                claims: claims,
                expires: DateTime.Now.AddHours(3),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }

    public record LoginRequest(string Email, string Password);
}
