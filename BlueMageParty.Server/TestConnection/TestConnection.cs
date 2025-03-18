using Microsoft.Data.SqlClient;

namespace BlueMageParty.Server.TestConnection
{
    class Program
    {
        static void Main(string[] args)
        {
            var connectionString = Environment.GetEnvironmentVariable("ConnectionStrings__BlueMagePartyContext");
            Console.WriteLine("Testing connection to database...");

            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    Console.WriteLine("Connection successful!");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Connection failed: {ex.Message}");
            }
        }
    }
}
