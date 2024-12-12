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

        public LoginController(BlueMagePartyContext context)
        {
            _context = context;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginRequest request)
        {   
            try
            {
                if(string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
                {
                    return BadRequest("Email and password are required");
                }

                var user = await this._context.Users.FirstOrDefaultAsync(x => x.Email.ToLower() == request.Email.ToLower());
                if (user == null)
                {
                    return Unauthorized("Invalid credentials");
                }

                if (request.Email.ToLower() == user.Email.ToLower()
                    && PasswordHasher.VerifyPassword(request.Password, user.Password))
                {
                    if(user.IsVerified)
                    {
                        var token = GenerateJwtToken(request.Email);
                        return Ok(new { auth_token = token });
                    } else
                    {
                        return Unauthorized("Your account needs to be verified before you can login.");
                    }
                }

                return Unauthorized("Invalid credentials");
            } catch (Exception ex) 
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

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Credentials.JWTSecurityKey));
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
