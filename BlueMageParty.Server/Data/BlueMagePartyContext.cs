using BlueMageParty.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace BlueMageParty.Server.Data
{
    public class BlueMagePartyContext : DbContext
    {
        public BlueMagePartyContext(DbContextOptions<BlueMagePartyContext> options)
            : base(options)
        {
        }

        public required DbSet<User> Users { get; set; }
    }
}
