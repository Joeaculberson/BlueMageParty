using Microsoft.AspNetCore.WebUtilities;
using System.Security.Cryptography;

namespace BlueMageParty.Server.Helpers
{
    public class TokenManager
    {
        public static string GenerateVerificationCode()
        {
            Random random = new Random();
            return random.Next(100000, 999999).ToString(); // Generate 6-digit code
        }

        public static string GenerateToken()
        {
            var tokenBytes = new byte[32];

            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(tokenBytes);
            }

            return WebEncoders.Base64UrlEncode(tokenBytes);
        }
    }
}
