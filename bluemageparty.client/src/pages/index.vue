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
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required />
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
    const username = ref("");
    const password = ref("");
    const message = ref("");

    const login = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/login/login", {
          username: username.value,
          password: password.value,
        });
        const token = response.data.token;
        localStorage.setItem("jwt", token);
        message.value = "Login successful!";
      } catch (error) {
        message.value = "Invalid username or password.";
      }
    };

    return { username, password, login, message };
  },
});
</script>

<style scoped>
#app {
  max-width: 300px;
  margin: 0 auto;
}
</style>
