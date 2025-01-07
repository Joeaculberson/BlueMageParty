using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlueMageParty.Server.Migrations
{
    /// <inheritdoc />
    public partial class RemoveOwned : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Owned",
                table: "Spells");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Owned",
                table: "Spells",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
