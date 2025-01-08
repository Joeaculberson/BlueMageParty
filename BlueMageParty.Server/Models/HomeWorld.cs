using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BlueMageParty.Server.Models
{
    public class HomeWorld
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public Guid DataCenterId { get; set; }
        [JsonIgnore]
        [ForeignKey(nameof(DataCenterId))]
        public virtual DataCenter DataCenter { get; set; }
    }
}
