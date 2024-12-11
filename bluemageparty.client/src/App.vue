<!-- src/App.vue -->
<template>
  <v-app>
    <!-- Include the Navbar component -->
    <Navbar />
    <!-- Main content rendered by vue-router -->
    <router-view />
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

</style>
