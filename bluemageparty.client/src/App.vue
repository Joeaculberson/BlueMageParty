<template>
  <v-app>
    <!-- Navbar -->
    <Navbar @toggle-drawer="drawer = !drawer" />

    <!-- Drawer -->
    <v-navigation-drawer app v-model="drawer" temporary>
      <!-- Drawer content goes here -->
      <v-list dense>
        <v-list-item link @click="goToHome">
            <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="goToParties">
            <v-list-item-title>Parties</v-list-item-title>
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

export default {
  components: {
    Navbar,
  },
  setup() {
    const drawer = ref(false);
    const router = useRouter();

    const goToHome = () => {
      router.push('/spellmanager');
    };

    const goToParties = () => {
      router.push('/parties');
    };

    return {
      drawer,
      goToHome,
      goToParties,
    };
  },
};
</script>
