# BlueMageParty

## Setting Up the Project

To run the application on your local machine, follow the steps below:

---

### **Step 1: Generate a JWT Security Key**
To secure the application, you need to generate your own JWT Security Key.

1. Run the following command to generate a key:
   ```bash
   openssl rand -base64 64
   ```
2. Copy the generated key and set it in your project using the command below:
   ```bash
   dotnet user-secrets set "LoginSettings:JWTSecurityKey" "YOUR_JWT_SECURITY_KEY"
   ```
   > **Windows Users:** If you have Git installed, you can find OpenSSL here:
   > `C:\Program Files\Git\usr\bin`.

3. Execute the command in the console at the following location:
   ```
   BlueMageParty/BlueMageParty.Server/
   ```

---

### **Step 2: Configure Email or Authentication Keys**
To authenticate new users, you’ll need SMTP info/keys, Google Auth keys, or Facebook Auth keys. Alternatively, you can skip this setup and generate users directly using the SQL script provided (see **Step 3**).

#### **Option 1: Email Authentication**
1. **Set up a SendGrid Account:**
   - Sign up for a [SendGrid account](https://sendgrid.com/).
   - Obtain your SendGrid API Key.

2. **Add SendGrid API Key to User Secrets:**
   Run the following command:
   ```bash
   dotnet user-secrets set "EmailSettings:SendGridApiKey" "YOUR_SEND_GRID_API_KEY"
   ```

3. **Configure SMTP Settings (Optional):**
   - Ensure you have a paid email setup.
   - Save the SMTP email password in user secrets:
     ```bash
     dotnet user-secrets set "EmailSettings:SMTPEmailPassword" "YOUR_SMTP_EMAIL_PASSWORD"
     ```

---

### **Step 3: Generate Users (Optional)**
If you don’t want to set up email or authentication keys, you can generate users directly in your database:

1. Navigate to the root directory of the project.
2. Run the provided `InsertMockData.sql` script against your database.
3. All generated users will have the default password: `test123`.

---

## **Notes**
- Make sure to replace `YOUR_JWT_SECURITY_KEY`, `YOUR_SEND_GRID_API_KEY`, and `YOUR_SMTP_EMAIL_PASSWORD` with your actual credentials.
- Use `.gitignore` or `user-secrets` to avoid exposing sensitive information in version control.
- If you need further assistance, refer to the official documentation for [ASP.NET Core User Secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets).

Happy coding!