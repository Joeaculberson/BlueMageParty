using BlueMageParty.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace BlueMageParty.Server.Data
{
    public class BlueMagePartyContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Spell> Spells { get; set; }
        public DbSet<SpellsOwned> SpellsOwned { get; set; }
        public DbSet<Character> Characters { get; set; }
        public DbSet<ErrorLog> ErrorLogs { get; set; }

        public BlueMagePartyContext(DbContextOptions<BlueMagePartyContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Character>()
                .HasOne(e => e.User)
                .WithMany(u => u.Characters)
                .HasForeignKey(e => e.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<ErrorLog>()
                .HasOne(e => e.User)
                .WithMany(u => u.ErrorLogs)
                .HasForeignKey(e => e.UserId);
              
            base.OnModelCreating(modelBuilder);
        }
    }
}
