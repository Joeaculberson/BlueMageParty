using System.ComponentModel.DataAnnotations;

namespace BlueMageParty.Server.Models
{
    public class Spell
    {
        [Key]
        public Guid Id { get; set; }
        public int Number { get; set; }
        public string Enemy { get; set; } = null!;
        public string Location { get; set; } = null!;
        public string Patch { get; set; } = null!;
        public string Icon { get; set; } = null!;
    }
}
