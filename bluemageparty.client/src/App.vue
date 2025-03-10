<template>
  <v-app>
    <!-- Navbar -->
    <Navbar @toggle-drawer="drawer = !drawer" />

    <!-- Drawer -->
    <v-navigation-drawer app v-model="drawer" temporary>
      <!-- Drawer content goes here -->
      <v-list dense>
        <v-list-item link @click="goToSpellManager">
          <v-list-item-title>
            <v-icon color="blue" small>
              mdi-book-account
            </v-icon>Spell Manager
          </v-list-item-title>
        </v-list-item>
        <v-list-item link @click="goToPartyManager">
          <v-list-item-title>
            <v-icon color="blue" small>
              mdi-party-popper
            </v-icon>Party Manager
          </v-list-item-title>
        </v-list-item>
        <v-list-item v-if="isAdmin" link @click="goToAdmin">
          <v-list-item-title>
            <v-icon color="blue" small>
              mdi-security
            </v-icon>Admin
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="fill-height">
      <div class="main-content">
        <router-view />
      </div>
      <BottomBar class="bottom-bar" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue'; // Added defineComponent and computed
import { useRouter } from 'vue-router'; // Added useRouter
import Navbar from './components/Navbar.vue';
import BottomBar from './components/BottomBar.vue'; // Ensure this import is correct
import { useAuthStore } from './stores/authStore';

export default defineComponent({ // Wrapped in defineComponent for TypeScript support
  name: 'App',
  components: {
    Navbar,
    BottomBar, // Ensure BottomBar is registered
  },
  setup() {
    const drawer = ref(false); // Made drawer reactive with ref
    const router = useRouter(); // Added router for navigation
    const authStore = useAuthStore();

    // Use computed to reactively check if the user is an admin
    const isAdmin = computed(() => authStore.getIsAdmin());

    const goToSpellManager = () => {
      router.push('/spellmanager');
    };

    const goToPartyManager = () => {
      router.push('/partymanager');
    };

    const goToAdmin = () => {
      router.push('/admin');
    };

    return {
      drawer,
      isAdmin,
      goToSpellManager,
      goToPartyManager,
      goToAdmin,
    };
  },
});
</script>

<style scoped>
.main-content {
  padding-bottom: 20px; /* Adjust this value based on the height of your bottom bar */
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000; /* Ensure this is higher than other elements */
}

.v-expansion-panels {
  z-index: 1; /* Ensure this is lower than the BottomBar's z-index */
}

.panel-container {
  margin-bottom: 60px; /* Adjust based on the height of your BottomBar */
}
</style>