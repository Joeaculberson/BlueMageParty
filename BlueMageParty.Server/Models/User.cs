using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BlueMageParty.Server.Models
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(255)]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
        public string? VerificationToken { get; set; }
        public string? VerificationCode { get; set; }  // For code-based verification
        public DateTime? VerificationExpires { get; set; }
        public bool IsVerified { get; set; } = false;
        public string? PasswordResetToken { get; set; }
        public DateTime? PasswordResetTokenExpiry { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedOn { get; set; } = DateTime.UtcNow;

        // Navigation Property for ErrorLogs
        public ICollection<ErrorLog> ErrorLogs { get; set; }
        public ICollection<Character> Characters { get; set; }
    }
}
