<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col>
          <!-- Alert for Success/Error Messages -->
          <v-alert v-if="message" :type="alertType" dismissible>
            {{ message }}
          </v-alert>
          <v-card title="Login">
            <v-form v-model="isValid">
              <v-card-text>
                <!-- Email Input Field -->
                <v-text-field label="Email" v-model="email" type="email" :rules="[emailRule]" required />
                <!-- Password Input Field -->
                <v-text-field label="Password" v-model="password" type="password" :rules="[passwordRule]" required />
                <!-- Login Button -->
                <v-card-actions>
                  <v-btn @click="login" color="primary" :disabled="!isValid">
                    Login
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
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { emailRule, passwordRule } from '@/utils/validationRules';

interface LoginResponse {
  auth_token: string;
  is_admin: boolean;
  id: string;
  message?: string;
}

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const message = ref('');
    const alertType = ref<'success' | 'error' | 'info' | 'warning'>('info');
    const isValid = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();

    const login = async () => {
      if (!isValid.value) return;

      try {
        const response = await axios.post<LoginResponse>('/api/login', {
          email: email.value,
          password: password.value,
        });

        if (response.data.auth_token) {
          authStore.login(response.data.auth_token);
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
      login,
      emailRule,
      passwordRule,
    };
  },
};
</script>