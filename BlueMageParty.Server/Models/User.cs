namespace BlueMageParty.Server.Models
{
    public class User
    {
        public int Id { get; set;  }
        public String UserName { get; set; } = null!;
        public String Password { get; set; } = null!;
        public string Email { get; set; } = null!;
    }
}
