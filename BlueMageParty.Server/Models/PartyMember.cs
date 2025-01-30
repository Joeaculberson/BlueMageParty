﻿using System.ComponentModel.DataAnnotations.Schema;

namespace BlueMageParty.Server.Models
{
    public class PartyMember
    {
        public Guid Id { get; set; }
        public Guid PartyId { get; set; }
        [ForeignKey("PartyId")]
        public virtual Party Party { get; set; }
        public Guid CharacterId { get; set; }
        [ForeignKey("CharacterId")]
        public virtual Character Character { get; set; }
        public bool IsHost { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.UtcNow;
    }
}
