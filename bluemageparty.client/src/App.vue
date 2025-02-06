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
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import { useAuthStore } from './stores/authStore';

export default {
  components: {
    Navbar,
  },
  setup() {
    const drawer = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();
    const isAdmin = authStore.getIsAdmin();

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
      goToAdmin
    };
  },
};
</script>
