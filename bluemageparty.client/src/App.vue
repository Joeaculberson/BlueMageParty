<!-- src/App.vue -->
<template>
  <v-app>
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <v-main class="fill-height">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import 'vuetify/styles';


export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
/* You can add global styles here */
@import 'vuetify/styles';

/* Ensure the main content respects the navbar height */
.main-content {
  padding-top: var(--v-toolbar-height);
}

</style>
