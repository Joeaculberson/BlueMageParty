using Microsoft.AspNetCore.Mvc;
using NetStone.Search.Character;
using NetStone;
using BlueMageParty.Server.Models;
using BlueMageParty.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

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
    public async Task<IActionResult> VerifyCharacter([FromBody] VerifyCharacterRequest request)
    {
        try
        {
            var existingCharacter = await this._context.Characters.FirstOrDefaultAsync(x => 
            x.FirstName == request.Character.FirstName
            && x.LastName == request.Character.LastName
            && x.Server == request.Character.Server);

            if(existingCharacter != null)
                return Ok(new { Verified = true, AlreadyVerified = true, VerifiedCharacter = existingCharacter });

            var lodestoneClient = await LodestoneClient.GetClientAsync();
            var csq = new CharacterSearchQuery();
            csq.CharacterName = request.Character.FirstName + " " + request.Character.LastName;
            csq.World = request.Character.Server;

            var searchResponse = await lodestoneClient.SearchCharacter(csq);

            if (searchResponse == null)
                return Ok(null);

            var queriedCharacterResults =
                searchResponse?.Results
                .FirstOrDefault(entry => entry.Name.ToLower() == request.Character.FirstName.ToLower() + " " + request.Character.LastName.ToLower());

            var character = queriedCharacterResults.GetCharacter().Result;
            var containsCode = character.Bio.Contains(request.LoadstoneVerificationCode);
            

            if (containsCode)
            {
                Character c = new Character()
                {
                    FirstName = request.Character.FirstName,
                    LastName = request.Character.LastName,
                    Server = request.Character.Server,
                    Title = request.Character.Title,
                    Avatar = request.Character.Avatar,
                    LoadstoneCharacterId = request.Character.LoadstoneCharacterId,
                    UserId = TokenDecoder.DecodeUserIdFromJwtToken(request.AuthToken),
                    Default = true,
                    ActiveClassJobIcon = request.Character.ActiveClassJobIcon,
                    ActiveClassJobLevel = request.Character.ActiveClassJobLevel,
                    Bio = request.Character.Bio,
                    FreeCompany = request.Character.FreeCompany,
                    Gender = request.Character.Gender,
                    GrandCompanyName = request.Character.GrandCompanyName,
                    GrandCompanyRank = request.Character.GrandCompanyRank,
                    GuardianDeityIcon = request.Character.GuardianDeityIcon,
                    GuardianDeityName = request.Character.GuardianDeityName,
                    Nameday = request.Character.Nameday,
                    Portrait = request.Character.Portrait,
                    PvpTeam = request.Character.PvpTeam,
                    Race = request.Character.Race,
                    RaceClanGender = request.Character.RaceClanGender,
                    TownIcon = request.Character.TownIcon,
                    TownName = request.Character.TownName,
                    Tribe = request.Character.Tribe
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
        string AuthToken,
        CharacterVM Character
    );

}
