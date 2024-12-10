using System.ComponentModel.DataAnnotations.Schema;

namespace BlueMageParty.Server.Models
{
    public class ErrorLog
    {
        public Guid Id { get; set; }
        public string Message { get; set; }
        public string StackTrace { get; set; }

        // Foreign Key
        public Guid UserId { get; set; }

        // Navigation Property
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.Now;
    }
}
