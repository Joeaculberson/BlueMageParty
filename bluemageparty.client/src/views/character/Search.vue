<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto" width="400">
            <template v-slot:title>
              <span class="font-weight-black">Character Search</span>
            </template>
  
            <v-card-text class="bg-surface-light pt-4">
              <!-- Data Center Dropdown -->
              <v-select
                label="Data Center"
                :items="dataCenters"
                item-title="name"
                item-value="name"
                v-model="selectedDataCenter"
                @update:model-value="filterHomeWorlds"
              ></v-select>
  
              <!-- Home World Dropdown -->
              <v-select
                label="Home World"
                :items="filteredHomeWorlds"
                item-title="name"
                item-value="name"
                v-model="selectedHomeWorld"
              ></v-select>
  
              <v-text-field
                v-model="name"
                label="Name"
                type="input"
                required
                @keyup.enter="search"
              />
              <v-btn @click="search" color="primary">Search</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Loading state -->
        <v-col v-if="isLoading" cols="12">
          <v-card class="mx-auto" width="400">
            <template v-slot:title>
              <span class="font-weight-black">Character Search Results</span>
            </template>
            <v-card-text>
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Character Results -->
        <v-col v-if="characters.length" cols="12">
          <v-card class="mx-auto" width="400">
            <template v-slot:title>
              <span class="font-weight-black">Character Search Results</span>
            </template>
            <div class="character-list">
              <ul>
                <li
                  v-for="character in characters"
                  :key="character.id"
                  @click="selectCharacter(character)"
                  class="character-item"
                >
                  <div class="character-icon">
                    <img :src="character.avatar" :alt="`${character.name} icon`" />
                  </div>
                  <div class="character-details">
                    <span class="character-title">{{ character.title }}</span>
                    <span class="character-name">{{ character.name }}</span>
                    <span class="character-server">
                      <v-icon icon="mdi-web" size="small"></v-icon>
                      {{ character.server }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import axios from "axios";
  import { useRouter } from "vue-router";
  import { useAuthStore } from "@/stores/authStore";
  import {
    GET_HOME_WORLDS_URL,
    GET_DATA_CENTERS_URL,
    SEARCH_CHARACTER_URL,
  } from "@/constants/api";
  
  export default defineComponent({
    name: "Home",
    setup() {
      const router = useRouter();
      const authStore = useAuthStore();
      const name = ref("");
      const characters = ref([]);
      const isLoading = ref(false); // Track loading state
  
      // Define default values for the selects
      const selectedDataCenter = ref<string | null>("All Data Centers");
      const selectedHomeWorld = ref<string | null>("All Worlds");
  
      // Define the data centers and home worlds with correct types
      const dataCenters = ref<
        { id: string; name: string; homeWorlds: { id: string; name: string }[] }[]
      >([]);
      const homeWorlds = ref<
        { id: string; name: string; dataCenter: { id: string; name: string } }[]
      >([]);
      const filteredHomeWorlds = ref<{ id: string; name: string }[]>([]);
  
      // Fetch Home Worlds
      const search = async () => {
        isLoading.value = true; // Set loading to true when search starts
        try {
          const response = await axios.post(SEARCH_CHARACTER_URL, {
            name: name.value,
            world: selectedHomeWorld.value,
          });
          const result = Object.keys(response.data).map(id => ({
            id: id,
            name: response.data[id].name,
            avatar: response.data[id].avatar,
            server: response.data[id].server,
            title: response.data[id].title
          }));
          characters.value = result;
          console.log(response);
        } catch (error) {
          console.error("Searching failed:", error);
        } finally {
          isLoading.value = false; // Set loading to false once the search completes
        }
      };
  
      // Fetch Home Worlds
      const getHomeWorlds = async () => {
        try {
          const response = await axios.get(GET_HOME_WORLDS_URL);
          homeWorlds.value = response.data;
        } catch (error) {
          console.error("Getting home worlds failed:", error);
        }
      };
  
      // Fetch Data Centers
      const getDataCenters = async () => {
        try {
          const response = await axios.get(GET_DATA_CENTERS_URL);
          dataCenters.value = response.data;
        } catch (error) {
          console.error("Getting data centers failed:", error);
        }
      };
  
      // Filter Home Worlds based on the selected Data Center
      const filterHomeWorlds = () => {
        if (!selectedDataCenter.value) {
          filteredHomeWorlds.value = homeWorlds.value; // Show all HomeWorlds if no DataCenter is selected
        } else {
          selectedHomeWorld.value = "All Worlds";
          const filteredDataCenters = dataCenters.value.filter(
            (x) => x.name == selectedDataCenter.value
          );
          filteredHomeWorlds.value = filteredDataCenters[0].homeWorlds;
        }
      };
  
      const selectCharacter = (character : Character) => {
        authStore.setSelectedCharacter(character);
        router.push('/character/verify');
      };
  
      onMounted(() => {
        getDataCenters();
        getHomeWorlds();
      });
  
      return {
        dataCenters,
        homeWorlds,
        filteredHomeWorlds,
        selectedDataCenter,
        selectedHomeWorld,
        characters,
        name,
        filterHomeWorlds,
        search,
        selectCharacter,
        isLoading, // Return isLoading to template
      };
    },
  });
</script>
  
<style>
.character-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
}

.character-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.2s;
}

.character-item:hover {
  background-color: #f0f0f0;
}

.character-icon img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
}

.character-details {
  display: flex;
  flex-direction: column;
}

.character-name {
  font-weight: bold;
}

.character-server {
  font-size: 0.8rem;
  color: #666;
}

.character-title {
  font-size: 0.7rem;
  color: #666;
}
</style>