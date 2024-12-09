namespace BlueMageParty.Server.Models
{
    public class Character
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Server { get; set; } = null!;
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set;}
    }
}
