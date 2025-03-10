<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col>
                    <!-- Alert for Success/Error Messages -->
                    <v-alert v-if="message" :type="alertType" dismissible>
                        {{ message }}
                    </v-alert>
                    <v-card title="Resend Activation Email">
                        <v-form v-model="isValid">
                            <v-card-text>
                                <!-- Email Input Field -->
                                <v-text-field label="Email" v-model="email" type="email" :rules="[emailRule]"
                                    required />
                                <!-- Resend Activation Code Button -->
                                <v-card-actions>
                                    <v-btn @click="resendActivationEmail" color="primary" :disabled="!isValid">
                                        Resend Activation Email
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
import { useAuthStore } from '@/stores/authStore';
import axios from 'axios';
import { RESEND_ACTIVATION_EMAIL_URL } from '@/constants/api';
import { useRouter } from 'vue-router';

interface ResendActivationEmailResponse {
    message: string;
}

export default {
    name: 'ResendActivationEmail',
    setup() {
        const email = ref('');
        const message = ref('');
        const alertType = ref<'success' | 'error' | 'info' | 'warning'>('info');
        const authStore = useAuthStore();
        const router = useRouter();
        const isValid = ref(false);
        const isVerifying = ref(false);

        const emailRule = (value: string) => {
            if (!value) return "Email is required";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) || "Please enter a valid email address";
        };

        const resendActivationEmail = async () => {
            if (!isValid.value) return;

            if (isVerifying.value) return; // Prevent double clicks
            isVerifying.value = true;

            try {
                const response = await axios.post<ResendActivationEmailResponse>(RESEND_ACTIVATION_EMAIL_URL, { email: email.value });

                // Store email in Pinia (authStore)
                authStore.setEmail(email.value);

                alertType.value = 'success';
                message.value = response.data.message; // No more error
                console.log("Resend activation response: success");
                router.push('/verify?emailsent=true'); // Redirect to verification page
            } catch (error) {
                const errorData = error.response?.data as { message?: string }; // Type assertion
                alertType.value = 'error';
                message.value = errorData?.message || 'There was a problem resending the activation email.';

                console.error('Resend activation failed:', error);
            } finally {
                isVerifying.value = false;
            }
        };

        return {
            email,
            message,
            alertType,
            isValid,
            emailRule,
            resendActivationEmail,
        };
    },
};
</script>