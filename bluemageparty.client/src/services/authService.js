import axios from "axios";
const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;
export const redirectToDiscord = () => {
    const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(DISCORD_REDIRECT_URI)}&response_type=code&scope=identify email`;
    window.location.href = discordAuthUrl;
};
export const handleDiscordCallback = async (code) => {
    try {
        const response = await axios.post("https://localhost:7015/api/auth/discord/callback", { code });
        return response.data; // Contains the JWT
    }
    catch (error) {
        console.error("Error handling Discord callback:", error);
        throw error;
    }
};
