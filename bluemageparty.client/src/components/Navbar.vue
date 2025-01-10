<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="toggleDrawer" />
    <v-toolbar-title>Blue Mage Party</v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="isAuthenticated">
      <v-menu v-if="selectedCharacter" offset-y>
        <template v-slot:activator="{ props }">
          <v-btn text v-bind="props">
            <img
              :src="selectedCharacter.avatar"
              alt="avatar"
              class="character-avatar"
            />
            {{ selectedCharacter.name }}
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="viewCharacterDetails">
            <v-list-item-title>View Character</v-list-item-title>
          </v-list-item>
          <v-list-item @click="clearSelection">
            <v-list-item-title>Clear Selection</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>


      <v-btn v-else @click="goToCharacterSearch" text>
        Select Character
      </v-btn>
    </template>

    <v-btn v-if="isAuthenticated" @click="logout" text>
      Logout
    </v-btn>
  </v-app-bar>
</template>


<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

export default defineComponent({
  name: "Navbar",
  setup(props, { emit }) {
    const router = useRouter();
    const route = useRoute();
    const authStore = useAuthStore();

    const isAuthenticated = computed(() => authStore.isAuthenticated);
    const isOnLoginPage = computed(() => route.path === "/login");
    const isOnRegisterPage = computed(() => route.path === "/register");
    const selectedCharacter = computed(() => authStore.getSelectedCharacter());

    const goToLogin = () => router.push("/login");
    const goToRegisterPage = () => router.push("/register");
    const goToCharacterSearch = () => router.push("/character/search");
    const toggleDrawer = () => {
      if (isAuthenticated.value) emit("toggle-drawer");
    };

    const logout = () => {
      authStore.clearEmail();
      authStore.logout();
      router.push("/login");
    };

    const viewCharacterDetails = () => {
      if (selectedCharacter.value) {
        router.push(`/character/${selectedCharacter.value.id}`);
      }
    };

    const clearSelection = () => {
      authStore.clearSelectedCharacter();
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
      selectedCharacter,
      viewCharacterDetails,
      clearSelection,
    };
  },
});
</script>

<style scoped>
.v-toolbar-title {
  font-weight: bold;
}

.character-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
}
</style>
