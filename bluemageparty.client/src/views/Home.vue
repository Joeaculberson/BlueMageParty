<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>Welcome to Blue Mage Party</h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

export default {
    name: 'Home',
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();

        // Redirect to Dashboard if logged in
        onMounted(() => {
            if (authStore.isAuthenticated) {
                router.push('/spellmanager');
            }
        });
    },
};
</script>
