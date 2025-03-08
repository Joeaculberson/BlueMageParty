<template>
    <v-card-text class="d-flex justify-center align-center" style="height: 100%;">
        <v-row class="d-flex justify-center align-center">
            <v-col cols="12" class="text-center">
                <img src="@/assets/seifer-panic.gif" width="128" alt="Loading" />
            </v-col>
            <v-col cols="12" class="text-center">
                Loading...
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { handleDiscordCallback } from '@/services/authService';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
import axios from "axios";
import {
    GET_LOGIN_RESPONSE
} from '@/constants/api';

export default defineComponent({
    name: 'DiscordCallback',
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();

        const getUser = async (token) => {
            try {
                const response = await axios.get(GET_LOGIN_RESPONSE, {
                    params: { jwt: token },
                });
                if (response.data) {
                    return response.data;
                } else {
                    console.log("Error fetching user data.");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        onMounted(async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            if (code) {
                try {
                    const { token } = await handleDiscordCallback(code);
                    authStore.login(token); // Store the JWT
                    const user = await getUser(token);
                    authStore.setEmail(user.email);
                    authStore.setIsAdmin(user.isAdmin);
                    authStore.setUserId(user.id);

                    // Redirect to the stored URL or fallback to the default route
                    const redirectUrl = localStorage.getItem('redirectUrl');
                    if (redirectUrl) {
                        localStorage.removeItem('redirectUrl'); // Clear the stored URL
                        router.push(redirectUrl); // Redirect to the original page
                    } else {
                        router.push('/character/search'); // Fallback to the default route
                    }
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