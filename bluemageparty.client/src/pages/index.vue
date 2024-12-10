<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card title="Login">

            <v-form @submit.prevent="login" v-model="isValid">
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

              <v-btn :disabled="!isValid" type="submit" color="primary" block>
                Login
              </v-btn>
              <v-btn to="/register" text color="primary" block>Don't have an account? Register here</v-btn>

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
import axios from "axios";

export default defineComponent({
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref("");
    const message = ref("");
    const isValid = ref(false);

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    // Validation rules
    const emailRule = (value: string) => !!value || "Email is required";
    const passwordRule = (value: string) => !!value || "Password is required";

    // Login method
    const login = async () => {
      try {
        const response = await axios.post(apiBaseUrl + "/Login/Login", {
          email: email.value,
          password: password.value,
        });

        // Handle success
        console.log("Login successful:", response.data);
        message.value = ""; // Clear any previous error messages
      } catch (error) {
        // Handle error
        if (axios.isAxiosError(error)) {
          message.value = error.response?.data?.message || "Login failed";
        } else {
          message.value = "Unexpected error occurred";
        }
      }
    };

    return {
      email,
      password,
      message,
      isValid,
      login,
      emailRule,
      passwordRule,
    };
  },
});
</script>

<style scoped>
#app {
  max-width: 400px;
  margin: 0 auto;
}
.v-card-title {
  font-weight: bold;
  color: #FFF;
}
</style>
