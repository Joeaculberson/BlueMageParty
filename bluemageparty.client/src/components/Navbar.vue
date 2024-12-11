<!-- src/components/Navbar.vue -->
<template>
<v-app-bar app>
    <!-- Left Section: Logo or Title -->
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Blue Mage Party</v-toolbar-title>

    <!-- Right Section: Login/Logout button based on authentication -->
    <v-spacer></v-spacer>
    <v-btn v-if="!isAuthenticated" @click="goToLogin" text>Login</v-btn>
    <v-btn v-if="isAuthenticated" @click="goToDashboard" text>Dashboard</v-btn>
    <v-btn v-if="isAuthenticated" @click="logout" text>Logout</v-btn>
</v-app-bar>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
setup() {
    const isAuthenticated = ref(!!localStorage.getItem('auth_token'));
    const router = useRouter();

    const goToLogin = () => router.push('/login');
    const goToDashboard = () => router.push('/dashboard');
    const logout = () => {
    localStorage.removeItem('auth_token');
    isAuthenticated.value = false;
    router.push('/login');
    };

    return {
    isAuthenticated,
    goToLogin,
    goToDashboard,
    logout,
    };
},
};
</script>

<style scoped>
/* You can add custom styles here if necessary */
</style>
  