using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlueMageParty.Server.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSpellsOwnedCharacterId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SpellsOwned_Users_UserId",
                table: "SpellsOwned");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "SpellsOwned",
                newName: "CharacterId");

            migrationBuilder.RenameIndex(
                name: "IX_SpellsOwned_UserId",
                table: "SpellsOwned",
                newName: "IX_SpellsOwned_CharacterId");

            migrationBuilder.AddForeignKey(
                name: "FK_SpellsOwned_Users_CharacterId",
                table: "SpellsOwned",
                column: "CharacterId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SpellsOwned_Users_CharacterId",
                table: "SpellsOwned");

            migrationBuilder.RenameColumn(
                name: "CharacterId",
                table: "SpellsOwned",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_SpellsOwned_CharacterId",
                table: "SpellsOwned",
                newName: "IX_SpellsOwned_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_SpellsOwned_Users_UserId",
                table: "SpellsOwned",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
