<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col>
                    <v-card title="Login">
                        <v-form>
                            <v-card-text>
                            <v-text-field label="Email" v-model="email" type="email" required />
                            <v-text-field label="Password" v-model="password" type="password" required
                                @keydown.enter="login"
                                />
                            </v-card-text>
                            <v-card-actions>
                                <v-btn @click="login" color="primary">Login</v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { LOGIN_URL } from '@/constants/api';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

export default {
    name: 'Login',
    setup() {
        const email = ref('');
        const password = ref('');
        const router = useRouter();
        const authStore = useAuthStore();

        const login = async () => {
            try {
                const response = await axios.post(LOGIN_URL, { email: email.value, password: password.value });
                if (response.data.auth_token) {
                    console.log("login response: success");
                    authStore.login(response.data.token);
                    router.push('/dashboard'); // Redirect to the dashboard after login
                } else {
                    console.log('No login response');
                }
            } catch (error) {
                console.error('Login failed:', error);
            }
        };

        const goToRegister = () => {
            router.push('/register'); // Redirect to the registration page
        };

        return {
            email,
            password,
            login,
            goToRegister,
        };
    },
};
</script>