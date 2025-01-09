using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.AspNetCore.Mvc;
using NetStone;
using NetStone.Model.Parseables.Character;
using NetStone.Model.Parseables.Search.Character;
using NetStone.Search.Character;

namespace BlueMageParty.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoadstoneController : ControllerBase
    {
        private readonly BlueMagePartyContext _context;

        public LoadstoneController(BlueMagePartyContext context)
        {
            _context = context;
        }

        [HttpPost("SearchCharacter")]
        public async Task<IActionResult> SearchCharacter(SearchCharacterRequest request)
        {
            try
            {
                var lodestoneClient = await LodestoneClient.GetClientAsync();
                //Get Lodestone Id if not known
                var csq = new CharacterSearchQuery();
                csq.CharacterName = request.name;
                csq.World = request.world;

                var searchResponse = await lodestoneClient.SearchCharacter(csq);
                /*var lodestoneCharacter =
                    searchResponse?.Results
                    .FirstOrDefault(entry => entry.Name == request.name);*/

                if(searchResponse == null)
                    return Ok(null);

                List<LodestoneCharacter> characters = new List<LodestoneCharacter>();
                foreach(var result in searchResponse?.Results.Take(5)) //only get data for the first 5 results
                {
                    var character = result.GetCharacter().Result;
                    if(character != null)
                    {
                        characters.Add(character);
                    }
                }
                //var result = lodestoneCharacter.GetCharacter().Result;
                return Ok(characters);
            }
            catch (HttpRequestException ex)
            {
                var error = new ErrorLog
                {
                    Message = ex.Message,
                    StackTrace = ex.StackTrace
                };

                _context.ErrorLogs.Add(error);
                await _context.SaveChangesAsync();
                throw ex;
            }
        }

        public record SearchCharacterRequest(string name, string world);
    }
}
