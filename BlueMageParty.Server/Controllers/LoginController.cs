namespace BlueMageParty.Server.Controllers
{
    using BlueMageParty.Server.Data;
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
                if (request.Email == "user" && request.Password == "password")
                {
                    var token = GenerateJwtToken(request.Email);
                    return Ok(new { Token = token });
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

            var key = new SymmetricSecurityKey(Convert.FromBase64String(Credentials.SymmetricSecurityKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: "AuthApp",
                audience: "AuthAppUsers",
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }

    public record LoginRequest(string Email, string Password);
}
