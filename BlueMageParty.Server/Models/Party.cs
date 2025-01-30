using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlueMageParty.Server.Models
{
    public class Party
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        [MaxLength(255)]
        public string Name { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }  // Navigation property to the User model
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.UtcNow;
        public ICollection<PartyMember> PartyMembers { get; set; } = new List<PartyMember>();

    }
}
