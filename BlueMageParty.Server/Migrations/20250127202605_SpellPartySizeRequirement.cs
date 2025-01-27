using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlueMageParty.Server.Migrations
{
    /// <inheritdoc />
    public partial class SpellPartySizeRequirement : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SpellPartyRequirement",
                table: "Spells");

            migrationBuilder.AddColumn<bool>(
                name: "IsFullParty",
                table: "Spells",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsLightParty",
                table: "Spells",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsSolo",
                table: "Spells",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsFullParty",
                table: "Spells");

            migrationBuilder.DropColumn(
                name: "IsLightParty",
                table: "Spells");

            migrationBuilder.DropColumn(
                name: "IsSolo",
                table: "Spells");

            migrationBuilder.AddColumn<int>(
                name: "SpellPartyRequirement",
                table: "Spells",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
