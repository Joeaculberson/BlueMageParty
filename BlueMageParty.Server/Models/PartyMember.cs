using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BlueMageParty.Server.Models
{
    public class PartyMember
    {
        public Guid Id { get; set; }
        public Guid PartyId { get; set; }
        [ForeignKey("PartyId")]
        [JsonIgnore]
        public virtual Party Party { get; set; }
        public Guid CharacterId { get; set; }
        [ForeignKey("CharacterId")]
        public virtual Character Character { get; set; }
        public bool IsHost { get; set; } = false;
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.UtcNow;
    }

    public class PartyMemberDto
    {
        public Guid Id { get; set; }
        public Guid CharacterId { get; set; }
        public CharacterDto Character { get; set; }
        public bool IsHost { get; set; }
    }
}
