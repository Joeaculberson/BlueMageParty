using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BlueMageParty.Server.Models
{
    [Table("SpellsOwned")]
    public class SpellOwned
    {
        [Key]
        public Guid Id { get; set; }

        [JsonIgnore]
        public Guid CharacterId { get; set; }
        [ForeignKey("CharacterId")]

        public virtual Character Character { get; set; }  // Navigation property to the Character model

        // Foreign key to the Spell table
        public Guid SpellId { get; set; }
        [ForeignKey("SpellId")]
        public virtual Spell Spell { get; set; }  // Navigation property to the Spell model
        public bool Owned { get; set; }

        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.UtcNow;
    }

    public class SpellOwnedDto
    {
        public Guid Id { get; set; }
        public Guid CharacterId { get; set; }
        public Guid SpellId { get; set; }
        public bool Owned { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
    }



    public class SpellOwnedVM
    {
        public Guid CharacterId { get; set; }
        public Guid SpellId { get; set; }
        public bool Owned { get; set; }
    }
}
