# 🧙‍♂️ Blue Mage Party

**Blue Mage Party** is a tool designed to help Final Fantasy XIV Blue Mages play together easier. Whether you're playing solo, in a light party, or a full party, this application makes it easy to track which spells each party member has and identify the spells everyone still needs.

---

## 🚀 Getting Started

### **How It Works**
1. **Claim Your Character**: Start by claiming a character from the Lodestone. You can claim multiple characters if needed.
2. **Mark Your Spells**: Use the **Spell Manager** to mark which spells your character has learned.
3. **Create a Party**: Head to the **Party Manager** to create a new party.
4. **Add Members**: Add characters to your party to see which spells are missing across the group. The **"Everyone Needs"** expansion panel highlights spells that no one in the party has learned yet.
5. **Filter Spells**: Filter spells by solo, light party, or full party requirements to focus on what matters most.

> **Note**:  
> - Each user must fill out their character's spell list in the **Spell Manager** for the party to be effective.  
> - Only claimed characters can be added to a party.

---

## 🖼️ Screenshot

![image](https://github.com/user-attachments/assets/4d8b1f32-e182-436c-add3-0ca5bc017a3d)

---

## 🛠️ Setting Up the Project

Follow these steps to run the application on your local machine.

---

## Simple Installation
If you don’t need to debug the login system, follow the steps below:

### **Step 1: Update Connection String**
Update the connection string (`BlueMagePartyContext`) in appsettings.json. Change `Database=BlueMageParty` to the name of your database.

---

### **Step 2: Generate Database**
Run the following command in the Package Manager Console:
   ```bash
   dotnet ef database update
   ```

---

### **Step 3: Insert Mock Data**
1. Navigate to the root directory of the project.
2. Run the provided `InsertUser.sql` script against your database.
3. All generated users will have the default password: `test123`.
4. Login with Pavetheway101@gmail.com and test123

---

## Advanced Installation 

### Only follow these steps if you're wanting to add to the login system. Otherwise, stick to the simple installation.

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
To authenticate new users, you’ll need SMTP info/keys and Discord Keys.

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

### **Step 3: Configure Discord Client Key and Secret**
To authenticate new users via Discord, you'll need a Discord Secret Key and Discord Client Key.

1. **Add Discord Secret to User Secrets:**
   Run the following command:
   ```bash
   dotnet user-secrets set "Discord:ClientSecret" "YOUR_SECRET_HERE"
   ```
2. **Add Discord Client Key to BlueMageParty.Server/appsettings.Development.json:**
   Run the following command:
   ```bash
   "DiscordClientKey": "YOUR_CLIENT_KEY_HERE",
   ```

---

## **Notes**
- Use `.gitignore` or `user-secrets` to avoid exposing sensitive information in version control.
- If you need further assistance, refer to the official documentation for [ASP.NET Core User Secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets).

Happy coding!
