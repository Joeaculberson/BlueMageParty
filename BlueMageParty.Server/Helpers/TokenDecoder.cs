using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;

public class TokenDecoder
{
    public static string DecodeEmailFromJwtToken(string token)
    {
        var handler = new JwtSecurityTokenHandler();

        try
        {
            // Parse the token without validation (no need to validate the signature if you're just decoding)
            var jwtToken = handler.ReadJwtToken(token);

            // Extract the 'sub' claim, which is your username (email)
            var username = jwtToken?.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Sub)?.Value;

            return username;
        }
        catch (Exception ex)
        {
            // Handle token parsing exceptions (e.g., invalid token format)
            Console.WriteLine($"Error decoding token: {ex.Message}");
            return null;
        }
    }

    public static Guid DecodeUserIdFromJwtToken(string token)
    {
        var handler = new JwtSecurityTokenHandler();

        try
        {
            // Parse the token without validation (no need to validate the signature if you're just decoding)
            var jwtToken = handler.ReadJwtToken(token);

            // Extract the 'sub' claim, which is your username (email)
            var username = jwtToken?.Claims.FirstOrDefault(c => c.Type == "user_id")?.Value;

            return new Guid(username);
        }
        catch (Exception ex)
        {
            // Handle token parsing exceptions (e.g., invalid token format)
            Console.WriteLine($"Error decoding token: {ex.Message}");
            return Guid.Empty;
        }
    }
}
