using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlueMageParty.Server.Models
{
    public class SpellSource
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public Guid SpellId { get; set; }
        [ForeignKey(nameof(SpellId))]
        public Spell Spell { get; set; }
        public string Enemy { get; set; } = null!;
        public string Location { get; set; } = null!;
    }

    public class SpellSourceVM
    {
        [Required]
        public Guid SpellId { get; set; }
        public string Enemy { get; set; } = null!;
        public string Location { get; set; } = null!;
    }
}
