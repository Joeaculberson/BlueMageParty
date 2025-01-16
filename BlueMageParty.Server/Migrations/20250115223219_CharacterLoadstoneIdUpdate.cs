using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlueMageParty.Server.Migrations
{
    /// <inheritdoc />
    public partial class CharacterLoadstoneIdUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LoadstoneCharacterId",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LoadstoneCharacterId",
                table: "Characters");
        }
    }
}
