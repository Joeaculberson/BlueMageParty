using System.ComponentModel.DataAnnotations;

namespace BlueMageParty.Server.Models
{
    public class Spell
    {
        [Key]
        public Guid Id { get; set; }
        public int Number { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string Tooltip { get; set; } = null!;
        public int Order { get; set; }
        public int Rank { get; set; }
        public string Patch { get; set; } = null!;
        public string Owned { get; set; } = null!;
        public string Icon { get; set; } = null!;
        public string TypeName { get; set; } = null!;
        public string AspectName { get; set; } = null!;
    }
}
