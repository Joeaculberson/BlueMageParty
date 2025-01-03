using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlueMageParty.Server.Migrations
{
    /// <inheritdoc />
    public partial class SpellsExpanded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Spells",
                newName: "TypeName");

            migrationBuilder.RenameColumn(
                name: "IconUrl",
                table: "Spells",
                newName: "Tooltip");

            migrationBuilder.RenameColumn(
                name: "Enemy",
                table: "Spells",
                newName: "Owned");

            migrationBuilder.AddColumn<string>(
                name: "AspectName",
                table: "Spells",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Spells",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Icon",
                table: "Spells",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Spells",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Order",
                table: "Spells",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Rank",
                table: "Spells",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AspectName",
                table: "Spells");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Spells");

            migrationBuilder.DropColumn(
                name: "Icon",
                table: "Spells");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Spells");

            migrationBuilder.DropColumn(
                name: "Order",
                table: "Spells");

            migrationBuilder.DropColumn(
                name: "Rank",
                table: "Spells");

            migrationBuilder.RenameColumn(
                name: "TypeName",
                table: "Spells",
                newName: "Location");

            migrationBuilder.RenameColumn(
                name: "Tooltip",
                table: "Spells",
                newName: "IconUrl");

            migrationBuilder.RenameColumn(
                name: "Owned",
                table: "Spells",
                newName: "Enemy");
        }
    }
}
