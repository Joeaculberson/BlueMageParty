<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col>
                    <v-card title="Verify Your Account">
                        <v-form v-model="isValid">
                            <v-card-text>
                                <!-- Verification Code Field -->
                                <v-text-field v-model="code" label="Verification Code" required maxlength="6" counter
                                    type="number"></v-text-field>
                            </v-card-text>

                            <v-card-actions class="justify-space-between">
                                <v-btn color="primary" @click="verifyCode" :disabled="!isValid">
                                    Verify
                                </v-btn>
                                <v-btn @click="goToResendActivationEmail" color="primary">
                                    Resend Activation Email
                                </v-btn>
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
import { ref, onMounted, watch } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import { VERIFY_CODE_URL } from '@/constants/api';

export default {
    setup() {
        const authStore = useAuthStore();
        const code = ref('');
        const error = ref('');
        const message = ref('');
        const isValid = ref(false);
        const alertType = ref<'success' | 'error' | 'info' | 'warning'>('info');
        const isVerifying = ref(false); // Prevent double requests
        const router = useRouter();
        const route = useRoute();

        // Access the email from the store
        const email = authStore.email;

        // Redirect to register if no email is available
        onMounted(() => {
            if (!email) {
                router.push('/register');
            }

            if (route.query.emailsent) {
                alertType.value = 'success';
                message.value = 'Verification email sent.';
            }
        });

        const verifyCode = async () => {
            if (!isValid.value) return;

            if (isVerifying.value) return; // Prevent double clicks
            isVerifying.value = true;

            try {
                const response = await axios.post(VERIFY_CODE_URL, { email, code: code.value });
                authStore.clearEmail(); // Clear email after verification
                router.push('/login?verified=true');
            } catch (err) {
                alertType.value = 'error';
                message.value = err.response?.data || 'Verification failed. ' + err;
            } finally {
                isVerifying.value = false;
            }
        };

        const goToResendActivationEmail = () => {
            router.push('/ResendActivationEmail');
        };

        // Watch the code input and auto-submit when it reaches 6 digits
        watch(
            () => code.value,
            (newCode) => {
                if (/^\d{6}$/.test(newCode)) {
                    verifyCode(); // Trigger verification as soon as 6 digits are entered
                }
            }
        );

        return {
            email,
            code,
            error,
            message,
            isValid,
            alertType,
            isVerifying,
            verifyCode,
            goToResendActivationEmail,
        };
    },
};
</script>
