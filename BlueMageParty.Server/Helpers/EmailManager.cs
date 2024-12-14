using SendGrid.Helpers.Mail;
using SendGrid;

namespace BlueMageParty.Server.Helpers
{
    public class EmailManager
    {
        public static async Task SendEmail(string ToEmail, string Subject, string Body, IConfiguration _configuration)
        {
            var Client = new SendGridClient(_configuration["EmailSettings:SendGridApiKey"]);
            var From = new EmailAddress(_configuration["EmailSettings:SmtpEmail"], _configuration["EmailSettings:EmailName"]);
            var To = new EmailAddress(ToEmail);
            var HtmlContent = Body;
            var Msg = MailHelper.CreateSingleEmail(From, To, Subject, string.Empty, HtmlContent);
            var Response = await Client.SendEmailAsync(Msg).ConfigureAwait(false);
        }
    }
}
