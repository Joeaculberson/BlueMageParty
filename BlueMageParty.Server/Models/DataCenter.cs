namespace BlueMageParty.Server.Models
{
    public class DataCenter
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public ICollection<HomeWorld> HomeWorlds { get; set; }
    }
}
