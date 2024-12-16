<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col>
                    <v-card title="Login">
                        <v-form v-model="isValid">
                            <v-card-text>
                                <!-- Email and Password Fields -->
                                <v-text-field label="Email" v-model="email" type="email" :rules="[emailRule]"
                                    required />
                                <v-text-field label="Password" v-model="password" type="password"
                                    :rules="[passwordRule]" required @keydown.enter="login" />
                            </v-card-text>

                            <v-card-actions class="justify-space-between">
                                <v-btn :disabled="!isValid" @click="login" color="primary">Login</v-btn>
                                <v-btn @click="goToResetPassword" color="primary" text>Forgot Password?</v-btn>
                            </v-card-actions>

                            <!-- Success Message Alert -->
                            <v-alert v-if="message" :type="alertType" dismissible>
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
import { emailRule, passwordRule } from '@/utils/validationRules';

export default {
    name: 'Login',
    setup() {
        const email = ref('');
        const password = ref('');
        const message = ref('');
        const alertType = ref<'success' | 'error' | 'info' | 'warning'>('info');
        const isValid = ref(false);
        const isVerifying = ref(false);
        const router = useRouter();
        const route = useRoute();
        const authStore = useAuthStore();

        // Check for verification success message on mount
        onMounted(() => {
            if (route.query.verified) {
                alertType.value = 'success';
                message.value = 'Your account has been successfully verified. You can now log in.';
            }

            if(route.query.passwordreset) {
                alertType.value = 'success';
                message.value = 'Your password has been successfully reset.';
            }
        });

        const login = async () => {
            try {
                if (!isValid.value) return;

                if (isVerifying.value) return; // Prevent double clicks
                isVerifying.value = true;

                const response = await axios.post(LOGIN_URL, { email: email.value, password: password.value });
                if (response.data.auth_token) {
                    alertType.value = 'success';
                    console.log("login response: success");
                    authStore.login(response.data.auth_token);
                    router.push('/dashboard'); // Redirect to the dashboard after login
                } else {
                    alertType.value = 'error';
                    message.value = response.data.message;
                    console.log('No login response');
                }
            } catch (error) {
                alertType.value = 'error';
                message.value = error.response.data;
                console.error('Login failed:', error);
            } finally {
                isVerifying.value = false;
            }
        };

        const goToResetPassword = () => {
            router.push('/resetpasswordrequest');
        };

        const goToRegister = () => {
            router.push('/register');
        };

        return {
            email,
            password,
            message,
            isValid,
            alertType,
            emailRule,
            passwordRule,
            goToResetPassword,
            login,
            goToRegister,
        };
    },
};
</script>
