<template>
    <v-container>
        <v-row>
        <v-col cols="12" md="6" offset-md="3">
            <v-card>
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-text-field label="Email" v-model="email" type="email" required />
                <v-text-field label="Password" v-model="password" type="password" required />
            </v-card-text>
            <v-card-actions>
                <v-btn @click="login">Login</v-btn>
            </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { LOGIN_URL } from '@/constants/api';

export default {
    name: 'Login',
    setup() {
        const email = ref('');
        const password = ref('');
        const router = useRouter();

        const login = async () => {
        try {
            const response = await axios.post(LOGIN_URL, { email: email.value, password: password.value });
            if (response.data.auth_token) {
                console.log("login response: " + response);
                localStorage.setItem('auth_token', response.data.auth_token);
                router.push('/dashboard');  // Redirect to the dashboard after login
            } else {
                console.log('No login response');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
        };

        return {
        email,
        password,
        login,
        };
    },
    };
</script>
  