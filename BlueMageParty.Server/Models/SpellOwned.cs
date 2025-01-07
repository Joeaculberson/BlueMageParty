using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlueMageParty.Server.Models
{
    public class SpellOwned
    {
        [Key]
        public Guid Id { get; set; }

        // Foreign key to the User table
        public Guid UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User User { get; set; }  // Navigation property to the User model

        // Foreign key to the Spell table
        public Guid SpellId { get; set; }
        [ForeignKey("SpellId")]
        public virtual Spell Spell { get; set; }  // Navigation property to the Spell model
        public bool Owned { get; set; }

        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.UtcNow;
    }

    public class SpellOwnedVM
    {
        public string AuthToken { get; set; }
        public Guid SpellId { get; set; }
        public bool Owned { get; set; }
    }
}
