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
                  <!-- New Password Input Field -->
                  <v-text-field 
                    label="New Password" 
                    v-model="newPassword" 
                    type="password" 
                    :rules="[passwordRule]" 
                    required 
                  />
                  <!-- Confirm Password Input Field -->
                  <v-text-field 
                    label="Confirm Password" 
                    v-model="confirmPassword" 
                    type="password" 
                    :rules="[confirmPasswordRule]" 
                    required 
                  />
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
  import { ref, computed } from 'vue';
  import axios from 'axios';
  import { RESET_PASSWORD_URL } from '@/constants/api';
  import { passwordRule, confirmPasswordRule } from '@/utils/validationRules';
  
  interface ResetPasswordResponse {
    message: string;
  }
  
  export default {
    name: 'ResetPassword',
    setup() {
      const newPassword = ref<string>('');
      const confirmPassword = ref<string>('');
      const message = ref<string>('');
      const alertType = ref<'success' | 'error' | 'info' | 'warning'>('info');
      const isValid = ref<boolean>(false);
      const isResetting = ref<boolean>(false);
  
      const resetPassword = async () => {
        if (!isValid.value || isResetting.value) return;

        isResetting.value = true;
  
        try {
          const response = await axios.post<ResetPasswordResponse>(RESET_PASSWORD_URL, {
            newPassword: newPassword.value,
            confirmPassword: confirmPassword.value,
          });
  
          alertType.value = 'success';
          message.value = 'Password reset successfully.';
          console.log('Reset Password response:', response.data.message);
        } catch (error) {
          const errorData = error.response?.data as { message?: string };
          alertType.value = 'error';
          message.value = errorData?.message || 'There was a problem resetting your password.';
          console.error('Password reset failed:', error);
        } finally {
          isResetting.value = false;
        }
      };
  
      return {
        newPassword,
        confirmPassword,
        message,
        alertType,
        isValid,
        resetPassword,
        passwordRule, 
        confirmPasswordRule: confirmPasswordRule(() => newPassword.value)
      };
    },
  };
  </script>
