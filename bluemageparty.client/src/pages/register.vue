<template>
    <v-container>
        <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
            <v-card>
            <v-card-title class="headline">Register</v-card-title>

            <v-form @submit.prevent="register" v-model="isValid">
                <v-text-field
                v-model="email"
                label="Email"
                type="email"
                :rules="[emailRule]"
                required
                ></v-text-field>

                <v-text-field
                v-model="password"
                label="Password"
                type="password"
                :rules="[passwordRule]"
                required
                ></v-text-field>

                <v-text-field
                v-model="confirmPassword"
                label="Confirm Password"
                type="password"
                :rules="[confirmPasswordRule]"
                required
                ></v-text-field>

                <v-btn :disabled="!isValid" type="submit" color="primary" block>
                Register
                </v-btn>

                <v-alert v-if="errorMessage" type="error" dismissible>
                {{ errorMessage }}
                </v-alert>

                <v-alert v-if="successMessage" type="success" dismissible>
                {{ successMessage }}
                </v-alert>
            </v-form>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  import { REGISTER_URL } from '@/constants/api'; // Centralized API URL
  
  export default defineComponent({
    name: 'Register',
    setup() {
      // Form fields
      const email = ref('');
      const password = ref('');
      const confirmPassword = ref('');
      const errorMessage = ref('');
      const successMessage = ref('');
      const isValid = ref(false);
  
      // Validation rules
      const emailRule = (value: string) => !!value || 'Email is required';
      const passwordRule = (value: string) => !!value || 'Password is required';
      const confirmPasswordRule = (value: string) => {
        if (!value) return 'Please confirm your password';
        if (value !== password.value) return 'Passwords do not match';
        return true;
      };
  
      // Register user
      const register = async () => {
        // Reset messages
        errorMessage.value = '';
        successMessage.value = '';
  
        try {
          // Make a POST request to the registration endpoint
          const response = await axios.post(REGISTER_URL, {
            email: email.value,
            password: password.value,
          });
  
          // Handle success
          successMessage.value = 'Registration successful! Please log in.';
          email.value = '';
          password.value = '';
          confirmPassword.value = '';
        } catch (error) {
          // Handle errors
          if (axios.isAxiosError(error)) {
            errorMessage.value = error.response?.data?.message || 'An error occurred while registering. ' + error;
          } else {
            errorMessage.value = 'Unexpected error occurred. ' + error;
          }
        }
      };
  
      return {
        email,
        password,
        confirmPassword,
        errorMessage,
        successMessage,
        isValid,
        register,
        emailRule,
        passwordRule,
        confirmPasswordRule,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Optional: Add custom styles for the component */
  </style>
  