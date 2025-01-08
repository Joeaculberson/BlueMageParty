<template>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-toolbar-title>Blue Mage Party</v-toolbar-title>
  
      <v-spacer></v-spacer>
  
      <!-- Right Section: Conditional Buttons -->
      <v-btn v-if="!isAuthenticated && !isOnLoginPage" @click="goToLogin" text>
        Login
      </v-btn>
  
      <v-btn v-if="!isAuthenticated && isOnLoginPage" @click="goToRegisterPage" text>
        Register
      </v-btn>

      <v-btn v-if="isAuthenticated" @click="goToCharacterSearch" text>
        Select Character
      </v-btn>
  
      <v-btn v-if="isAuthenticated" @click="logout" text>
        Logout
      </v-btn>
    </v-app-bar>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useAuthStore } from '@/stores/authStore';
  
  export default defineComponent({
    name: 'Navbar',
    setup(props, { emit }) {
      const router = useRouter();
      const route = useRoute();
      const authStore = useAuthStore();
  
      // Reactive variable to check if user is authenticated
      const isAuthenticated = computed(() => authStore.isAuthenticated);
  
      // Computed properties to determine which page we are on
      const isOnLoginPage = computed(() => route.path === '/login');
      const isOnRegisterPage = computed(() => route.path === '/register');
  
      const goToLogin = () => router.push('/login');
      const goToRegisterPage = () => router.push('/register');
  
      const logout = () => {
        authStore.clearEmail();
        authStore.logout();
        router.push('/login');
      };

      const goToCharacterSearch = () => {
        router.push('/character/search');
      };
  
      // Emit event to toggle the drawer when the hamburger button is clicked
      const toggleDrawer = () => {
        if (isAuthenticated.value) {
          emit('toggle-drawer');
        }
      };
  
      return {
        isAuthenticated,
        goToLogin,
        goToRegisterPage,
        logout,
        toggleDrawer,
        goToCharacterSearch,
        isOnLoginPage,
        isOnRegisterPage,
      };
    },
  });
  </script>
  
  <style scoped>
  .v-toolbar-title {
    font-weight: bold;
  }
  </style>
  