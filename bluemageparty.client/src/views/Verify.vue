<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col>
                    <v-card title="Verify Your Account">
                        <v-form>
                            <v-card-text>
                                <!-- Verification Code Field -->
                                <v-text-field 
                                    v-model="code" 
                                    label="Verification Code" 
                                    required
                                ></v-text-field>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="primary" @click="verifyCode">Verify</v-btn>
                            </v-card-actions>

                            <!-- Error Message Alert -->
                            <v-alert v-if="error" type="error" dismissible>
                                {{ error }}
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
import { useAuthStore } from '@/stores/authStore';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import { VERIFY_CODE_URL } from "@/constants/api";

export default {
  setup() {
    const authStore = useAuthStore();
    const code = ref('');
    const error = ref('');
    const router = useRouter();

    // Access the email from the store
    const email = authStore.email;

    onMounted(() => {
        if (!email) {
            router.push('/register'); // Redirect back to register if email is missing
        }
    });

    const verifyCode = async () => {
      try {
        const response = await axios.post(VERIFY_CODE_URL, { email, code: code.value });
        authStore.clearEmail(); // Clear email after verification
        router.push('/login?verified=true');
      } catch (err) {
        error.value = err.response?.data || 'Verification failed. ' + err;
      }
    };

    return { email, code, error, verifyCode };
  },
};
</script>

  