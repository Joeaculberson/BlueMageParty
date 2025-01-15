using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlueMageParty.Server.Migrations
{
    /// <inheritdoc />
    public partial class CharacterInfo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ActiveClassJobIcon",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "ActiveClassJobLevel",
                table: "Characters",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Bio",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FreeCompany",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "GrandCompanyName",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "GrandCompanyRank",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "GuardianDeityIcon",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "GuardianDeityName",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Nameday",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Portrait",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PvpTeam",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Race",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "RaceClanGender",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TownIcon",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TownName",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Tribe",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ActiveClassJobIcon",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "ActiveClassJobLevel",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Bio",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "FreeCompany",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "GrandCompanyName",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "GrandCompanyRank",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "GuardianDeityIcon",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "GuardianDeityName",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Nameday",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Portrait",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "PvpTeam",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Race",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "RaceClanGender",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "TownIcon",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "TownName",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Tribe",
                table: "Characters");
        }
    }
}
