using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BlueMageParty.Server.Models
{
    public class Character
    {
        [Key]
        public Guid Id { get; set; }

        // Foreign key to the User table
        [Required]
        [ForeignKey(nameof(UserId))]
        public Guid UserId { get; set; }

        [JsonIgnore]
        // Navigation property
        public User User { get; set; }

        [Required]
        [MaxLength(16)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(16)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(64)]
        public string Server { get; set; }

        public string Title { get; set; }
        public string Avatar { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedOn { get; set; } = DateTime.UtcNow;
    }
}
