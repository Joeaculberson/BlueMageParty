<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col>

                    <!-- Alert for Success/Error Messages -->
                    <v-alert v-if="message" :type="alertType" dismissible>
                        {{ message }}
                    </v-alert>
                    <v-card title="Reset Password">
                        <v-form v-model="isValid">
                            <v-card-text>
                                <!-- Password Input -->
                                <v-text-field v-model="password" label="Password" type="password"
                                    :rules="[passwordRule]" required />

                                <!-- Confirm Password Input -->
                                <v-text-field v-model="confirmPassword" label="Confirm Password" type="password"
                                    :rules="[confirmPasswordValidation]" required @keydown.enter="resetPassword" />

                                <!-- Reset Password Button -->
                                <v-card-actions>
                                    <v-btn @click="resetPassword" color="primary" :disabled="!isValid">
                                        Reset Password
                                    </v-btn>
                                </v-card-actions>
                            </v-card-text>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { RESET_PASSWORD_URL } from '@/constants/api';
import { passwordRule, confirmPasswordRule } from '@/utils/validationRules';


export default {
    name: 'resetPassword',
    setup() {
        const route = useRoute(); // Use the vue-router route object
        const password = ref('');
        const confirmPassword = ref('');
        const message = ref('');
        const alertType = ref<'success' | 'error' | 'info' | 'warning'>('info');
        const isValid = ref(false);
        const isVerifying = ref(false);
        const router = useRouter();

        // Confirm password rule depends on the current password value
        const confirmPasswordValidation = confirmPasswordRule(() => password.value);

        const resetPassword = async () => {
            if (!isValid.value) return;

            if (isVerifying.value) return; // Prevent double clicks
            isVerifying.value = true;

            try {
                // Get token from URL
                const token = route.query.token || route.params.token;

                if (!token) {
                    alertType.value = 'error';
                    message.value = 'Token is missing from the URL.';
                    return;
                }

                const response = await axios.post(RESET_PASSWORD_URL, {
                    password: password.value,
                    token: token,
                });

                router.push('/login?passwordreset=true');
                alertType.value = 'success';
                message.value = 'Password has been successfully reset.';
                console.log('Reset Password response:', response.data.message);
            } catch (error) {
                alertType.value = 'error';
                message.value = error.response?.data || 'There was a problem resetting your password.';
                console.error('Password reset failed:', error);
            } finally {
                isVerifying.value = false;
            }
        };

        return {
            password,
            confirmPassword,
            message,
            alertType,
            isValid,
            resetPassword,
            passwordRule,
            confirmPasswordRule,
            confirmPasswordValidation
        };
    },
};
</script>
