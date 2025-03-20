<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col>
          <!-- Alert for Success/Error Messages -->
          <v-alert v-if="message || isVerified" :type="alertType" dismissible>
            {{ message }}
          </v-alert>
          <v-card title="Login">
            <v-form v-model="isValid" @submit.prevent="login"> <!-- Add @submit.prevent to the form -->
              <v-card-text>
                <!-- Email Input Field -->
                <v-text-field
                  label="Email"
                  v-model="email"
                  type="email"
                  :rules="[emailRule]"
                  required
                  @keyup.enter="login"
                />
                <!-- Password Input Field -->
                <v-text-field
                  label="Password"
                  v-model="password"
                  type="password"
                  :rules="[passwordRule]"
                  required
                  @keyup.enter="login"
                />
                <!-- Login Button -->
                <v-card-actions class="justify-space-between">
                  <v-btn type="submit" color="primary" :disabled="!isValid"> <!-- Change to type="submit" -->
                    Login
                  </v-btn>
                  <v-btn @click="forgotPassword" color="primary">
                    Forgot Password?
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'; // Import useRoute
import { useAuthStore } from '@/stores/authStore';
import { emailRule, passwordRule } from '@/utils/validationRules';
import { LOGIN_URL } from '@/constants/api';

interface LoginResponse {
  auth_token: string;
  is_admin: boolean;
  id: string;
  message?: string;
  email: string;
}

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const message = ref('');
    const alertType = ref<'success' | 'error' | 'info' | 'warning'>('info');
    const isValid = ref(false);
    const isVerified = ref(false); // Add a ref for verified status
    const router = useRouter();
    const route = useRoute(); // Use useRoute to access query parameters
    const authStore = useAuthStore();

    // Check if the URL contains verified=true
    onMounted(() => {
      if (route.query.verified === 'true') {
        message.value = 'Your account has been verified!';
        alertType.value = 'success';
      }
    });

    const forgotPassword = async () => {
      router.push('/resetpasswordrequest');
    };

    const login = async () => {
      if (!isValid.value) return;

      try {
        const response = await axios.post<LoginResponse>(LOGIN_URL, {
          email: email.value,
          password: password.value,
        });

        if (response.data.auth_token) {
          authStore.login(response.data.auth_token);
          authStore.setEmail(response.data.email);
          authStore.setIsAdmin(response.data.is_admin);
          authStore.setUserId(response.data.id);
          console.log('setUserId', response.data.id);

          alertType.value = 'success';
          message.value = 'Login successful.';
          router.push('/'); // Redirect to home page
        }
      } catch (error) {
        const errorData = error.response?.data as { message?: string };
        alertType.value = 'error';
        message.value = errorData?.message || 'An error occurred during login.';
        console.error('Login failed:', error);
      }
    };

    return {
      email,
      password,
      message,
      alertType,
      isValid,
      isVerified, // Return isVerified
      login,
      emailRule,
      passwordRule,
      forgotPassword,
    };
  },
};
</script>