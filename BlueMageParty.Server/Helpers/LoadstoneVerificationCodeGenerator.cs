using System;
using System.Security.Cryptography;
using System.Text;

public static class LoadstoneVerificationCodeGenerator
{
    public static string GenerateUniqueCode(string namespacePrefix, string data)
    {
        if (string.IsNullOrWhiteSpace(namespacePrefix) || string.IsNullOrWhiteSpace(data))
        {
            throw new ArgumentException("Namespace prefix and data must be non-empty.");
        }

        using (SHA256 sha256 = SHA256.Create())
        {
            // Combine namespace and data
            string combinedData = $"{namespacePrefix}:{data}";

            // Compute the hash
            byte[] hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(combinedData));
            string hashString = BitConverter.ToString(hashBytes).Replace("-", "").ToLower();

            // Return the namespace-prefixed hash
            return $"{namespacePrefix}{hashString}";
        }
    }
}
