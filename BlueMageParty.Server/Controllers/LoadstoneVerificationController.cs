using Microsoft.AspNetCore.Mvc;
using NetStone.Search.Character;
using NetStone;

[ApiController]
[Route("api/[controller]")]
public class LoadstoneVerificationController : ControllerBase
{
    [HttpGet("GetVerificationCode")]
    public async Task<IActionResult> GetVerificationCode(string token)
    {
        var userId = TokenDecoder.DecodeUserIdFromJwtToken(token);
        var email = TokenDecoder.DecodeEmailFromJwtToken(token);
        string namespacePrefix = "bluemageparty:";
        string dataToHash = $"{userId}:{email}";

        string verificationCode = LoadstoneVerificationCodeGenerator.GenerateUniqueCode(namespacePrefix, dataToHash);
        return Ok(new { VerificationCode = verificationCode });
    }

    [HttpPost("VerifyCharacter")]
    public async Task<IActionResult> VerifyCharacter(VerifyCharacterRequest request)
    {
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

        return Ok(new { Verified = containsCode });
    }

    public record VerifyCharacterRequest(string loadstoneVerificationCode, string characterName, string characterWorld);
}
