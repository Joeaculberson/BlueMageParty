<template>
    <button @click="loginWithDiscord" class="discord-login-button">
      <img height="10px" width="10px" src="@/assets/discord-logo.svg" alt="Discord Logo" class="discord-logo" />
      Login with Discord
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { redirectToDiscord } from '@/services/authService';
  
  export default defineComponent({
    name: 'LoginWithDiscord',
    methods: {
      loginWithDiscord() {
        redirectToDiscord();
      },
    },
  });
  </script>
  
  <style scoped>
  .discord-login-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background-color: #5865f2; /* Discord's brand color */
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .discord-login-button:hover {
    background-color: #4752c4; /* Slightly darker shade for hover */
  }
  
  .discord-logo {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  </style>