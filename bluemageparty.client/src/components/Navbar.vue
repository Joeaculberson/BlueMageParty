<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="toggleDrawer" />
    <v-toolbar-title>Blue Mage Party</v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="isAuthenticated">
      <v-menu v-if="verifiedCharacters.length > 0" offset-y>
        <template v-slot:activator="{ props }">
          <v-btn text v-bind="props">
            <img
              :src="verifiedCharacters[0].avatar"
              alt="avatar"
              class="character-avatar"
            />
            {{ verifiedCharacters[0].firstName }} {{ verifiedCharacters[0].lastName }}
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <div v-if="verifiedCharacters.length > 0">
            <v-list-item
              v-for="character in verifiedCharacters"
              :key="character.id"
              @click="setAsActiveCharacter(character)"
            >
              <v-list-item-title>
                <v-row align="center" justify="space-between">
                  <v-col cols="auto">
                    <v-row align="center">
                      <img
                        :src="character.avatar"
                        alt="avatar"
                        class="character-avatar"
                      />
                      {{ character.firstName }} {{ character.lastName }}
                    </v-row>
                  </v-col>
                  <v-col cols="auto">
                    <v-icon @click.stop="goToCharacterDetails(character)" small>
                      mdi-account-outline
                    </v-icon>
                  </v-col>
                  <v-col cols="auto">
                    <v-icon
                      @click.stop="removeCharacter(character)"
                      color="red"
                      small
                    >
                      mdi-close
                    </v-icon>
                  </v-col>
                </v-row>
              </v-list-item-title>
            </v-list-item>
          </div>
          <v-list-item @click="goToCharacterSearch" text>
            <v-list-item-title>
              <v-row align="center" justify="space-between">
                <span>Add Character</span>
                <v-icon color="blue" small>mdi-plus</v-icon>
              </v-row>
            </v-list-item-title>
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
    <v-btn v-if="!isAuthenticated && isOnLoginPage" @click="goToRegisterPage" text>
      Register
    </v-btn>
    <v-btn v-if="!isAuthenticated && !isOnLoginPage" @click="goToLogin" text>
      Login
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { ref, computed, defineComponent, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { useCharacterStore } from "@/stores/characterStore";

export default defineComponent({
  name: "Navbar",
  setup(props, { emit }) {
    const router = useRouter();
    const route = useRoute();
    const authStore = useAuthStore();
    const characterStore = useCharacterStore();

    const isAuthenticated = computed(() => authStore.isAuthenticated);
    const isOnLoginPage = computed(() => route.path === "/login");
    const isOnRegisterPage = computed(() => route.path === "/register");
    const verifiedCharacters = ref(characterStore.getVerifiedCharacters());

    // Watch for changes in the character store and update the local verifiedCharacters
    watch(
      () => characterStore.getVerifiedCharacters(),
      (newCharacters) => {
        verifiedCharacters.value = newCharacters;
      },
      { immediate: true, deep: true }
    );

    const goToLogin = () => router.push("/login");
    const goToRegisterPage = () => router.push("/register");
    const goToCharacterSearch = () => router.push("/character/search");
    const toggleDrawer = () => {
      if (isAuthenticated.value) emit("toggle-drawer");
    };

    const logout = () => {
      authStore.clearEmail();
      characterStore.clearVerifiedCharacters();
      authStore.logout();
      router.push("/login");
    };

    const setAsActiveCharacter = (character) => {
      characterStore.setAsActiveCharacter(character);
    };

    const removeCharacter = (character) => {
      characterStore.removeVerifiedCharacter(character);
    };

    const goToCharacterDetails = (character) => {
      router.push(`/character/${character.loadstoneCharacterId}`);
    };

    const clearSelection = () => {
      characterStore.clearVerifiedCharacters();
      characterStore.clearSelectedCharacter();
    };

    onMounted(() => {
      if (
        characterStore.getVerifiedCharacters().length === 0 ||
        Object.keys(characterStore.getVerifiedCharacters())
      ) {
        characterStore.syncVerifiedCharacters();
      }
    });

    return {
      isAuthenticated,
      goToLogin,
      goToRegisterPage,
      logout,
      toggleDrawer,
      goToCharacterSearch,
      isOnLoginPage,
      isOnRegisterPage,
      verifiedCharacters,
      clearSelection,
      setAsActiveCharacter,
      removeCharacter,
      goToCharacterDetails,
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

.v-list-item-title {
  padding: 8px 16px;
}

.v-row {
  margin: 0;
}

.v-col {
  padding: 0;
}

.v-list-item {
  border-bottom: 1px solid #ccc;
}

.v-list-item:hover {
  background-color: #f5f5f5;
}

.v-icon {
  cursor: pointer;
  margin-left: 8px;
}
</style>
