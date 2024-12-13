<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col>
                    <v-card title="Login">
                        <v-form v-model="isValid">
                            <v-card-text>
                                <!-- Email and Password Fields -->
                                <v-text-field label="Email" v-model="email" type="email" :rules="[emailRule]" required />
                                <v-text-field
                                    label="Password"
                                    v-model="password"
                                    type="password"
                                    :rules="[passwordRule]"
                                    required
                                    @keydown.enter="login"
                                />
                            </v-card-text>

                            <v-card-actions class="justify-space-between">
                                <v-btn :disabled="!isValid" @click="login" color="primary">Login</v-btn>
                                <v-btn @click="forgotPassword" color="primary" text>Forgot Password?</v-btn>
                            </v-card-actions>

                            <!-- Success Message Alert -->
                            <v-alert v-if="message" type="success" dismissible>
                                {{ message }}
                            </v-alert>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { LOGIN_URL } from '@/constants/api';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

export default {
    name: 'Login',
    setup() {
        const email = ref('');
        const password = ref('');
        const message = ref('');
        const isValid = ref(false);
        const isVerifying = ref(false);
        const router = useRouter();
        const route = useRoute();
        const authStore = useAuthStore();

        // Validation rules
        const emailRule = (value: string) => !!value || "Email is required";
        const passwordRule = (value: string) => !!value || "Password is required";

        // Check for verification success message on mount
        onMounted(() => {
            if (route.query.verified) {
                message.value = 'Your account has been successfully verified. You can now log in.';
            }
        });

        const login = async () => {
            try {
                if(!isValid.value) return;

                if (isVerifying.value) return; // Prevent double clicks
                isVerifying.value = true;

                const response = await axios.post(LOGIN_URL, { email: email.value, password: password.value });
                if (response.data.auth_token) {
                    console.log("login response: success");
                    authStore.login(response.data.auth_token);
                    router.push('/dashboard'); // Redirect to the dashboard after login
                } else {
                    console.log('No login response');
                }
            } catch (error) {
                console.error('Login failed:', error);
            } finally {
                isVerifying.value = false;
            }
        };

        const forgotPassword = async () => {
            /*try {
                const response = await axios.post(LOGIN_URL, { email: email.value, password: password.value });
                if (response.data.auth_token) {
                    console.log("login response: success");
                    authStore.login(response.data.auth_token);
                    router.push('/dashboard'); // Redirect to the dashboard after login
                } else {
                    console.log('No login response');
                }
            } catch (error) {
                console.error('Login failed:', error);
            }*/
        };

        const goToRegister = () => {
            router.push('/register'); // Redirect to the registration page
        };

        return {
            email,
            password,
            message,
            isValid,
            emailRule,
            passwordRule,
            login,
            goToRegister,
        };
    },
};
</script>
