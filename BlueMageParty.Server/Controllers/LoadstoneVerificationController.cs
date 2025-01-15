using Microsoft.AspNetCore.Mvc;
using NetStone.Search.Character;
using NetStone;
using BlueMageParty.Server.Models;
using BlueMageParty.Server.Data;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class LoadstoneVerificationController : ControllerBase
{
    private readonly BlueMagePartyContext _context;

    public LoadstoneVerificationController(BlueMagePartyContext context, IConfiguration configuration)
    {
        this._context = context;
    }

    [HttpGet("GetVerificationCode")]
    public async Task<IActionResult> GetVerificationCode(string token)
    {
        try
        {
            var userId = TokenDecoder.DecodeUserIdFromJwtToken(token);
            var email = TokenDecoder.DecodeEmailFromJwtToken(token);
            string namespacePrefix = "bluemageparty:";
            string dataToHash = $"{userId}:{email}";

            string verificationCode = LoadstoneVerificationCodeGenerator.GenerateUniqueCode(namespacePrefix, dataToHash);
            return Ok(new { VerificationCode = verificationCode });
        } catch(Exception ex)
        {
            var error = new ErrorLog()
            {
                Message = ex.Message,
                StackTrace = ex.StackTrace
            };

            this._context.ErrorLogs.Add(error);
            await _context.SaveChangesAsync();
            throw ex;
        }
    }

    [HttpPost("VerifyCharacter")]
    public async Task<IActionResult> VerifyCharacter(VerifyCharacterRequest request)
    {
        try
        {
            var firstName = request.Name.Split(' ')[0];
            var lastName = request.Name.Split(' ')[1];
            var existingCharacter = await this._context.Characters.FirstOrDefaultAsync(x => x.FirstName == firstName && x.LastName == lastName && x.Server == request.World);
            if(existingCharacter != null)
                return Ok(new { Verified = true, AlreadyVerified = true, VerifiedCharacter = existingCharacter });

            var lodestoneClient = await LodestoneClient.GetClientAsync();
            var csq = new CharacterSearchQuery();
            csq.CharacterName = request.Name;
            csq.World = request.World;

            var searchResponse = await lodestoneClient.SearchCharacter(csq);

            if (searchResponse == null)
                return Ok(null);

            var queriedCharacterResults =
                searchResponse?.Results
                .FirstOrDefault(entry => entry.Name.ToLower() == request.Name.ToLower());

            var character = queriedCharacterResults.GetCharacter().Result;
            var containsCode = character.Bio.Contains(request.LoadstoneVerificationCode);
            

            if (containsCode)
            {
                Character c = new Character()
                {
                    FirstName = request.Name.Split(" ")[0],
                    LastName = request.Name.Split(" ")[1],
                    Server = request.World,
                    Title = request.Title,
                    Avatar = request.Avatar,
                    UserId = TokenDecoder.DecodeUserIdFromJwtToken(request.AuthToken),
                    Default = true,
                    ActiveClassJobIcon = request.ActiveClassJobIcon,
                    ActiveClassJobLevel = request.ActiveClassJobLevel,
                    Bio = request.Bio,
                    FreeCompany = request.FreeCompany,
                    Gender = request.Gender,
                    GrandCompanyName = request.GrandCompanyName,
                    GrandCompanyRank = request.GrandCompanyRank,
                    GuardianDeityIcon = request.GuardianDeityIcon,
                    GuardianDeityName = request.GuardianDeityName,
                    Nameday = request.Nameday,
                    Portrait = request.Portrait,
                    PvpTeam = request.PvpTeam,
                    Race = request.Race,
                    RaceClanGender = request.RaceClanGender,
                    TownIcon = request.TownIcon,
                    TownName = request.TownName,
                    Tribe = request.Tribe
                };

                await this._context.Characters.AddAsync(c);
                await this._context.SaveChangesAsync();
                return Ok(new { Verified = true, AlreadyVerified = false, VerifiedCharacter = c });
            } else
            {
                return Ok(new { Verified = false });
            }
        }
        catch (Exception ex)
        {
            var error = new ErrorLog()
            {
                Message = ex.Message,
                StackTrace = ex.StackTrace
            };

            this._context.ErrorLogs.Add(error);
            await _context.SaveChangesAsync();
            throw ex;
        }
    }

    public record VerifyCharacterRequest(
        string LoadstoneVerificationCode,
        string Name,
        string World,
        string Title,
        string Avatar,
        string AuthToken,
        string Id,
        string Server,
        string ActiveClassJobIcon,
        int? ActiveClassJobLevel,
        string Bio,
        string? FreeCompany,
        string Gender,
        string GrandCompanyName,
        string GrandCompanyRank,
        string GuardianDeityIcon,
        string GuardianDeityName,
        string Nameday,
        string Portrait,
        string? PvpTeam,
        string Race,
        string RaceClanGender,
        string? TownIcon,
        string TownName,
        string Tribe
    );

}
