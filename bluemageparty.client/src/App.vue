<script lang="ts" setup>
  import { RouterLink, RouterView } from 'vue-router';

  import { useAuthStore } from '@/stores';

  const authStore = useAuthStore();
</script>

<template>
  <div>
    <nav v-show="authStore.user">
      <div>
        <RouterLink to="/" class="nav-item nav-link">Home</RouterLink>
        <a @click="authStore.logout()" class="nav-item nav-link">Logout</a>
      </div>
    </nav>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style>
  @import '@/assets/base.css';
</style>
