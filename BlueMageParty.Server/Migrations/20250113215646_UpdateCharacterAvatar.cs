﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlueMageParty.Server.Migrations
{
    /// <inheritdoc />
    public partial class UpdateCharacterAvatar : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Avatar",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Avatar",
                table: "Characters");
        }
    }
}
