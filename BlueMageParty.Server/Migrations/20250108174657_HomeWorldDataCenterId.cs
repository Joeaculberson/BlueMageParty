using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlueMageParty.Server.Migrations
{
    /// <inheritdoc />
    public partial class HomeWorldDataCenterId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "DataCenterId",
                table: "HomeWorlds",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_HomeWorlds_DataCenterId",
                table: "HomeWorlds",
                column: "DataCenterId");

            migrationBuilder.AddForeignKey(
                name: "FK_HomeWorlds_DataCenters_DataCenterId",
                table: "HomeWorlds",
                column: "DataCenterId",
                principalTable: "DataCenters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HomeWorlds_DataCenters_DataCenterId",
                table: "HomeWorlds");

            migrationBuilder.DropIndex(
                name: "IX_HomeWorlds_DataCenterId",
                table: "HomeWorlds");

            migrationBuilder.DropColumn(
                name: "DataCenterId",
                table: "HomeWorlds");
        }
    }
}
