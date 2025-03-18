using AspNet.Security.OAuth.Discord;
using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy =>
                      {
                          policy
                          .AllowAnyHeader()
                          .AllowAnyMethod()
                          .AllowCredentials();
                      });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add services to the container.
builder.Services.AddControllers();

string sql = builder.Configuration.GetConnectionString("BlueMagePartyContext");
// Add EF Core with SQL Server
builder.Services.AddDbContext<BlueMagePartyContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BlueMagePartyContext")));

// Add JWT Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "AuthApp",
            ValidAudience = "AuthAppUsers",
            IssuerSigningKey = new SymmetricSecurityKey(Convert.FromBase64String(builder.Configuration["LoginSettings:JWTSecurityKey"]))
        };
    });

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = DiscordAuthenticationDefaults.AuthenticationScheme;
})
.AddCookie()
.AddDiscord(options =>
{
    options.ClientId = builder.Configuration["Discord:ClientId"];
    options.ClientSecret = builder.Configuration["Discord:ClientSecret"];
    options.CallbackPath = new PathString("/api/auth/callback");
    options.SaveTokens = true;
});


var app = builder.Build();
// Apply migrations at startup
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<BlueMagePartyContext>();
        context.Database.Migrate(); // Apply any pending migrations
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error applying migrations: {ex.Message}");
    }
}

app.UseCors("AllowSpecificOrigins");

app.UseSwagger();
app.UseSwaggerUI();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

