using BlueMageParty.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace BlueMageParty.Server.Data
{
    public class BlueMagePartyContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Spell> Spells { get; set; }
        public DbSet<SpellOwned> SpellsOwned { get; set; }
        public DbSet<Character> Characters { get; set; }
        public DbSet<ErrorLog> ErrorLogs { get; set; }
        public DbSet<SpellSource> SpellSources { get; set; }
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

            modelBuilder.Entity<Spell>()
                .HasMany(s => s.Sources)
                .WithOne()
                .HasForeignKey(ss => ss.SpellId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<SpellSource>()
                .HasOne(e => e.Spell)
                .WithMany(u => u.Sources)
                .HasForeignKey(e => e.SpellId)
                .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(modelBuilder);
        }
    }
}
