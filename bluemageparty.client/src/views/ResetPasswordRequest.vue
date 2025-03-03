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
                                <!-- Email Input Field -->
                                <v-text-field label="Email" v-model="email" type="email" :rules="[emailRule]"
                                    required />
                                <!-- Resend Activation Code Button -->
                                <v-card-actions>
                                    <v-btn @click="resetPasswordRequest" color="primary" :disabled="!isValid">
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
import axios from 'axios';
import { RESET_PASSWORD_REQUEST_URL } from '@/constants/api';
import { useAuthStore } from '@/stores/authStore';
import { emailRule } from '@/utils/validationRules';

export default {
    name: 'resetPassword',
    setup() {
        const email = ref('');
        const message = ref('');
        const alertType = ref<'success' | 'error' | 'info' | 'warning'>('info');
        const isValid = ref(false);
        const isVerifying = ref(false);
        const authStore = useAuthStore();

        const resetPasswordRequest = async () => {
            if (!isValid.value) return;

            if (isVerifying.value) return; // Prevent double clicks
            isVerifying.value = true;

            try {
                const response = await axios.post(RESET_PASSWORD_REQUEST_URL, { email: email.value });

                // Store email in Pinia
                authStore.setEmail(email.value);

                alertType.value = 'success';
                message.value = 'Password reset email has been sent.';
                console.log("Reset Password response: " + response.data.message);
            } catch (error) {
                alertType.value = 'error';
                message.value = error.response?.data || 'There was a problem sending the password reset email.';
                console.error('Password reset failed:', error);
            } finally {
                isVerifying.value = false;
            }
        };

        return {
            email,
            message,
            alertType,
            isValid,
            resetPasswordRequest,
            emailRule
        };
    },
};
</script>