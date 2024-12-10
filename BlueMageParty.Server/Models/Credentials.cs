namespace BlueMageParty.Server.Models
{
    public class Credentials
    {
        /// <summary>
        /// If you want to run this project on your own, you'll need to generate your own key.
        /// To generate your own key, run this command: "openssl rand -base64 64".
        /// Windows Users: If you have git installed you can find openssl here: C:\Program Files\Git\usr\bin
        /// then copy/paste the key into the string below in to JWTSecurityKey.
        /// </summary>
        public const string JWTSecurityKey = "";
    }
}
