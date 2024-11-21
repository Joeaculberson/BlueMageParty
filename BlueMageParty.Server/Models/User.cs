using System.Text.Json.Serialization;

namespace BlueMageParty.Server.Models
{
    public class User
    {
        public int Id { get; set;  }
        public string Username { get; set; } = null!;
        [JsonIgnore]
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;
    }
}
