using Microsoft.AspNetCore.Mvc;
using RestSharp;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Linq;
using BlueMageParty.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Text;
using BlueMageParty.Server.Data;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly string _discordClientId;
    private readonly string _discordClientSecret;
    private readonly string _jwtSecret;
    private readonly string _frontendUrl;

    public BlueMagePartyContext _context;
    private readonly IConfiguration _configuration;

    public AuthController(BlueMagePartyContext context, IConfiguration configuration)
    {
        this._context = context;
        _configuration = configuration;

        _discordClientSecret = this._configuration["Discord:ClientSecret"];
        _discordClientId = this._configuration["DiscordClientKey"];
        _jwtSecret = this._configuration["LoginSettings:JWTSecurityKey"];
        _frontendUrl = this._configuration["FrontendUrl"];
    }

    [HttpPost("discord/callback")]
    public async Task<IActionResult> DiscordCallback([FromBody] DiscordCallbackRequest request)
    {
        // Exchange the authorization code for an access token
        var client = new RestClient("https://discord.com/api/v10");
        var tokenRequest = new RestRequest("oauth2/token", Method.Post);
        tokenRequest.AddParameter("client_id", _discordClientId);
        tokenRequest.AddParameter("client_secret", _discordClientSecret);
        tokenRequest.AddParameter("grant_type", "authorization_code");
        tokenRequest.AddParameter("code", request.Code);
        tokenRequest.AddParameter("redirect_uri", _frontendUrl + "/auth/discord/callback");

        var tokenResponse = await client.ExecuteAsync(tokenRequest);
        if (!tokenResponse.IsSuccessful)
        {
            return BadRequest("Failed to exchange code for token.");
        }

        var accessToken = JObject.Parse(tokenResponse.Content)["access_token"]?.ToString();

        // Fetch the user's Discord profile
        var userRequest = new RestRequest("users/@me", Method.Get);
        userRequest.AddHeader("Authorization", $"Bearer {accessToken}");
        var userResponse = await client.ExecuteAsync(userRequest);
        if (!userResponse.IsSuccessful)
        {
            return BadRequest("Failed to fetch user profile.");
        }

        var userProfile = JObject.Parse(userResponse.Content);
        var discordId = userProfile["id"]?.ToString();
        var email = userProfile["email"]?.ToString();
        var username = userProfile["username"]?.ToString();

        // Save or update the user in your database
        var user = await SaveOrUpdateUser(discordId, email, username);

        // Generate a JWT
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_jwtSecret);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim("user_id", user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            }),
            Expires = DateTime.UtcNow.AddHours(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        var jwt = tokenHandler.WriteToken(token);

        return Ok(new { Token = jwt });
    }

    private async Task<User> SaveOrUpdateUser(string discordId, string email, string username)
    {
        // Implement your logic to save or update the user in the database
        // Example:
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email.ToLower() == email.ToLower());
        if (user == null)
        {
            user = new User { Email = email, IsVerified = true, CreatedOn = DateTime.UtcNow };
            _context.Users.Add(user);
        }
        else
        {
            user.Email = email;
        }
        await _context.SaveChangesAsync();
        return user;
    }
}

public class DiscordCallbackRequest
{
    public string Code { get; set; }
}