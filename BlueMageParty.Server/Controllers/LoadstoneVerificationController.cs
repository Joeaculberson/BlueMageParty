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
            var firstName = request.characterName.Split(' ')[0];
            var lastName = request.characterName.Split(' ')[1];
            var existingCharacter = await this._context.Characters.FirstOrDefaultAsync(x => x.FirstName == firstName && x.LastName == lastName && x.Server == request.characterWorld);
            if(existingCharacter != null)
                return Ok(new { Verified = true, AlreadyVerified = true, VerifiedCharacter = existingCharacter });

            var lodestoneClient = await LodestoneClient.GetClientAsync();
            var csq = new CharacterSearchQuery();
            csq.CharacterName = request.characterName;
            csq.World = request.characterWorld;

            var searchResponse = await lodestoneClient.SearchCharacter(csq);

            if (searchResponse == null)
                return Ok(null);

            var queriedCharacterResults =
                searchResponse?.Results
                .FirstOrDefault(entry => entry.Name.ToLower() == request.characterName.ToLower());

            var character = queriedCharacterResults.GetCharacter().Result;
            var containsCode = character.Bio.Contains(request.loadstoneVerificationCode);
            

            if (containsCode)
            {
                Character c = new Character()
                {
                    FirstName = request.characterName.Split(" ")[0],
                    LastName = request.characterName.Split(" ")[1],
                    Server = request.characterWorld,
                    Title = request.characterTitle,
                    Avatar = request.characterAvatar,
                    UserId = TokenDecoder.DecodeUserIdFromJwtToken(request.authToken)
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

    public record VerifyCharacterRequest(string loadstoneVerificationCode, 
        string characterName, 
        string characterWorld, 
        string characterTitle, 
        string characterAvatar, 
        string authToken);
}
