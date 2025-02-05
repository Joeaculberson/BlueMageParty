using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BlueMageParty.Server.Models
{
    public class Character
    {
        [Key]
        public Guid Id { get; set; }
        public string LoadstoneCharacterId { get; set; }
        // Foreign key to the User table
        [Required]
        [ForeignKey(nameof(UserId))]
        public Guid UserId { get; set; }

        [JsonIgnore]
        // Navigation property
        public User User { get; set; }

        [Required]
        [MaxLength(16)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(16)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(64)]
        public string Server { get; set; }

        public string Title { get; set; }
        public string Avatar { get; set; }
        public bool Default { get; set; }

        public string ActiveClassJobIcon { get; set; }
        public int? ActiveClassJobLevel { get; set; }
        public string Bio { get; set; }
        public string? FreeCompany { get; set; }
        public string Gender { get; set; }
        public string GrandCompanyName { get; set; }
        public string GrandCompanyRank { get; set; }
        public string GuardianDeityIcon { get; set; }
        public string GuardianDeityName { get; set; }
        public string Nameday { get; set; }
        public string Portrait { get; set; }
        public string? PvpTeam { get; set; }
        public string Race { get; set; }
        public string RaceClanGender { get; set; }
        public string? TownIcon { get; set; }
        public string TownName { get; set; }
        public string Tribe { get; set; }

        public virtual ICollection<SpellOwned> SpellsOwned { get; set; }
        [NotMapped]
        public List<Spell> MissingSpells { get; set; } = new();

        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedOn { get; set; } = DateTime.UtcNow;
    }

    public class CharacterDto
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Avatar { get; set; }
        public string Server { get; set; }
        public List<SpellOwnedDto> SpellsOwned { get; set; }
        public List<SpellDto> MissingSpells { get; set; }
        public string LoadstoneCharacterId { get; internal set; }
    }

    public class CharacterVM
    {
        public Guid Id { get; set; }
        public string LoadstoneCharacterId { get; set; }

        public Guid UserId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Server { get; set; }

        public string Title { get; set; }
        public string Avatar { get; set; }
        public bool Default { get; set; }

        public string ActiveClassJobIcon { get; set; }
        public int? ActiveClassJobLevel { get; set; }
        public string Bio { get; set; }
        public string? FreeCompany { get; set; }
        public string Gender { get; set; }
        public string GrandCompanyName { get; set; }
        public string GrandCompanyRank { get; set; }
        public string GuardianDeityIcon { get; set; }
        public string GuardianDeityName { get; set; }
        public string Nameday { get; set; }
        public string Portrait { get; set; }
        public string? PvpTeam { get; set; }
        public string Race { get; set; }
        public string RaceClanGender { get; set; }
        public string? TownIcon { get; set; }
        public string TownName { get; set; }
        public string Tribe { get; set; }
    }
}
