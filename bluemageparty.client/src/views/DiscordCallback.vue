<template>
    <v-card-text>
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-card-text>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { handleDiscordCallback } from '@/services/authService';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'DiscordCallback',
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();

        onMounted(async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            if (code) {
                try {
                    const { token } = await handleDiscordCallback(code);
                    authStore.login(token); // Store the JWT
                    router.push('/character/search');
                } catch (error) {
                    console.error('Error during Discord callback:', error);
                    router.push('/login'); // Redirect to login on error
                }
            } else {
                router.push('/login'); // Redirect to login if no code
            }
        });
    },
});
</script>