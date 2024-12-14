<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card title="Register">
            <v-form @submit.prevent="register" v-model="isValid">
              <v-card-text>
                <!-- Email Input -->
                <v-text-field v-model="email" label="Email" type="email" :rules="[emailRule]" required></v-text-field>

                <!-- Password Input -->
                <v-text-field v-model="password" label="Password" type="password" :rules="[passwordRule]"
                  required></v-text-field>

                <!-- Confirm Password Input -->
                <v-text-field v-model="confirmPassword" label="Confirm Password" type="password"
                  :rules="[confirmPasswordRule]" required @keydown.enter="register" />
              </v-card-text>

              <v-card-actions class="justify-space-between">
                <v-btn :disabled="!isValid" @click="register" color="primary">Register</v-btn>
                <v-btn @click="goToResendActivationEmail" color="primary">Resend Activation Code</v-btn>
              </v-card-actions>

              <!-- Error Message Alert -->
              <v-alert v-if="message" type="error" dismissible>
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
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { REGISTER_URL } from "@/constants/api";
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
  name: "Register",
  setup() {
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const message = ref("");
    const isValid = ref(false);
    const isVerifying = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();

    // Validation rules
    const emailRule = (value: string) => !!value || "Email is required";
    const passwordRule = (value: string) => !!value || "Password is required";
    const confirmPasswordRule = (value: string) => {
      if (!value) return "Please confirm your password";
      if (value !== password.value) return "Passwords do not match";
      return true;
    };

    // Register method
    const register = async () => {
      try {
        // Only proceed if the form is valid
        if (!isValid.value) return;

        if (isVerifying.value) return; // Prevent double clicks
        isVerifying.value = true;

        const response = await axios.post(REGISTER_URL, {
          email: email.value,
          password: password.value,
        });

        // Store email in Pinia
        authStore.setEmail(email.value);

        // Handle success
        console.log("Registration successful:", response.data);
        router.push('/verify?emailsent=true');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          message.value = error.response?.data?.message || "Registration failed";
        } else {
          message.value = "Unexpected error occurred";
        }
      } finally {
        isVerifying.value = false;
      }
    };

    const goToResendActivationEmail = async () => router.push('/ResendActivationEmail');

    return {
      email,
      password,
      confirmPassword,
      message,
      isValid,
      register,
      goToResendActivationEmail,
      emailRule,
      passwordRule,
      confirmPasswordRule,
    };
  },
});
</script>

<style scoped>
/* Add custom styles if necessary */
</style>