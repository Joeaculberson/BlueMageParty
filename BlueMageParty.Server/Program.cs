using AspNet.Security.OAuth.Discord;
using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", policy =>
    {
        policy.WithOrigins(builder.Configuration["FrontendUrl"])
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

// Add controllers and Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add EF Core with SQL Server
string sql = builder.Configuration["ConnectionStrings:BlueMagePartyContext"];
builder.Services.AddDbContext<BlueMagePartyContext>(options =>
    options.UseSqlServer(sql));

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

// Add Discord Authentication
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

// Enable CORS
app.UseCors("AllowSpecificOrigins");

// Enable Swagger
app.UseSwagger();
app.UseSwaggerUI();

// Middleware order is critical
app.UseRouting();

// Add the API key middleware before authentication and authorization
app.UseMiddleware<ApiKeyMiddleware>();

// Enable authentication and authorization
app.UseAuthentication();
app.UseAuthorization();

// Map controllers
app.MapControllers();

app.Run();