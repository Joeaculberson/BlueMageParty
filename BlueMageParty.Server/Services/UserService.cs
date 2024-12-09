using BlueMageParty.Server.Data;
using BlueMageParty.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace BlueMageParty.Server.Services
{
    public class UserService
    {
        private readonly BlueMagePartyContext _context;

        public UserService(BlueMagePartyContext context)
        {
            _context = context;
        }

        public async Task<User?> GetUserByEmailAsync(string email)
        {
            return await _context.Users.SingleOrDefaultAsync(u => u.Email == email);
        }
    }
}
