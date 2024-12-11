<template>
    <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Blue Mage Party</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- Right Section: Conditional Buttons -->
        <v-btn v-if="!isAuthenticated && !isOnLoginPage && !isOnRegisterPage" @click="goToLogin" text>
            Login
        </v-btn>

        <v-btn v-if="!isAuthenticated && isOnLoginPage" @click="goToRegisterPage" text>
            Register
        </v-btn>

        <v-btn v-if="isAuthenticated" @click="logout" text>
            Logout
        </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';  // Import the store

export default {
    name: 'Navbar',
    setup() {
        const router = useRouter();
        const route = useRoute();
        const authStore = useAuthStore();  // Access the store

        // Reactive variable to check if user is authenticated
        const isAuthenticated = computed(() => authStore.isAuthenticated);

        // Computed properties to determine which page we are on
        const isOnLoginPage = computed(() => route.path === '/login');
        const isOnRegisterPage = computed(() => route.path === '/register');

        const goToLogin = () => router.push('/login');
        const goToRegisterPage = () => router.push('/register');

        const logout = () => {
            authStore.logout();  // Call logout from the store
            router.push('/login');  // Redirect to login page
        };

        return {
            isAuthenticated,
            goToLogin,
            goToRegisterPage,
            logout,
            isOnLoginPage,
            isOnRegisterPage,
        };
    },
};
</script>

<style scoped>
.v-toolbar-title {
    font-weight: bold;
}
</style>