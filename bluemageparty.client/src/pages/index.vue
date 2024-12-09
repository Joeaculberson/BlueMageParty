<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Blue Mage Party</v-app-bar-title>
  </v-app-bar>
  <div id="app">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="text" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "App",
  setup() {
    const email = ref("");
    const password = ref("");
    const message = ref("");
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    const login = async () => {
      try {
        // Send POST request with email and password
        const response = await axios.post(apiBaseUrl + '/Login/Login', {
          email: email.value,
          password: password.value,
        });

        // Log successful response
        console.log('Login successful:', response.data);
      } catch (error) {
        // Log error details for debugging
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.response?.data || error.message);
        } else {
          console.error('Unexpected error:', error);
        }
      }
    };

    return {
      email,
      password,
      login,
      message
    };
  },
});
</script>

<style scoped>
#app {
  max-width: 300px;
  margin: 0 auto;
}
</style>
