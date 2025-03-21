<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card title="Character Search" class="elevation-2">
            <v-form v-model="isValid">
              <v-card-text>
                <!-- Data Center Dropdown -->
                <v-select label="Data Center" :items="dataCenters" item-title="name" item-value="name"
                  v-model="selectedDataCenter" @update:model-value="filterHomeWorlds" required></v-select>

                <!-- Home World Dropdown -->
                <v-select label="Home World" :items="filteredHomeWorlds" item-title="name" item-value="name"
                  v-model="selectedHomeWorld" required></v-select>

                <!-- Name Input -->
                <v-text-field label="Character's Full Name" v-model="name" required
                  @keydown.enter="search"></v-text-field>
              </v-card-text>

              <v-card-actions class="justify-space-between">
                <v-btn :disabled="!isValid" @click="search" color="primary">
                  Search
                </v-btn>
              </v-card-actions>

              <!-- Success Message Alert -->
              <v-alert v-if="message" :type="alertType" dismissible>
                {{ message }}
              </v-alert>
            </v-form>
          </v-card>
        </v-col>
      </v-row>

      <!-- Character Search Results -->
      <v-row justify="center">
        <v-col v-if="isLoading" cols="12" md="8" lg="6">
          <v-card class="mx-auto">
            <template v-slot:title>
              <span>Character Search Results</span>
            </template>
            <v-card-text>
              <v-row class="d-flex justify-center align-center">
                <v-col cols="12" class="text-center">
                  <img src="@/assets/seifer-panic.gif" width="128" alt="Loading" />
                </v-col>
                <v-col cols="12" class="text-center">
                  Searching...
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col v-if="characters.length && !isLoading" cols="12" md="8" lg="6">
          <v-card class="mx-auto">
            <template v-slot:title>
              <span>Character Search Results</span>
            </template>
            <div class="character-list">
              <ul>
                <li v-for="character in characters" :key="character.id" @click="selectCharacter(character)"
                  class="character-item">
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
  </v-app>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import apiClient from '@/apiClient';
import { useRouter } from "vue-router";
import { useCharacterStore } from "@/stores/characterStore";
import { GET_HOME_WORLDS_URL, GET_DATA_CENTERS_URL, SEARCH_CHARACTER_URL } from "@/constants/api";

export default {
  name: "CharacterSearch",
  setup() {
    const router = useRouter();
    const characterStore = useCharacterStore();
    const name = ref("");
    const characters = ref([]);
    const isLoading = ref(false);
    const isValid = ref(false);
    const message = ref("");
    const alertType = ref<"success" | "error" | "info" | "warning">("info");

    const selectedDataCenter = ref<string | null>("All Data Centers");
    const selectedHomeWorld = ref<string | null>("All Worlds");
    const dataCenters = ref<any[]>([]); // Explicitly typed as an array
    const homeWorlds = ref<any[]>([]); // Explicitly typed as an array
    const filteredHomeWorlds = ref<any[]>([]); // Explicitly typed as an array

    const search = async () => {
      if (!isLoading.value) {
        isLoading.value = true;
        try {
          const response = await apiClient.post(SEARCH_CHARACTER_URL, {
            name: name.value,
            world: selectedHomeWorld.value,
          });
          characters.value = Object.keys(response.data).map((id) => ({
            id: id,
            name: response.data[id].name,
            avatar: response.data[id].avatar,
            server: response.data[id].server,
            title: response.data[id].title,
            activeClassJobIcon: response.data[id].activeClassJobIcon,
            activeClassJobLevel: response.data[id].activeClassJobLevel, //int
            bio: response.data[id].bio,
            freeCompandy: response.data[id].freeCompandy,
            gender: response.data[id].gender,
            grandCompanyName: response.data[id].grandCompanyName,
            grandCompanyRank: response.data[id].grandCompanyRank,
            guardianDeityIcon: response.data[id].guardianDeityIcon,
            guardianDeityName: response.data[id].guardianDeityName,
            nameday: response.data[id].nameday,
            portrait: response.data[id].portrait,
            pvpTeam: response.data[id].pvpTeam,
            race: response.data[id].race,
            raceClanGender: response.data[id].raceClanGender,
            townIcon: response.data[id].townIcon,
            townName: response.data[id].townName,
            tribe: response.data[id].tribe
          }));
        } catch (error) {
          console.log('There was an error searching for characters: ' + error);
        } finally {
          isLoading.value = false;
        }
      }
    };

    const getHomeWorlds = async () => {
      try {
        const response = await apiClient.get(GET_HOME_WORLDS_URL);
        // Ensure response.data is an array
        homeWorlds.value = Array.isArray(response.data) ? response.data : Object.values(response.data);
      } catch (error) {
        console.error("Error fetching home worlds:", error);
      }
    };

    const getDataCenters = async () => {
      try {
        const response = await apiClient.get(GET_DATA_CENTERS_URL);
        // Ensure response.data is an array
        dataCenters.value = Array.isArray(response.data) ? response.data : Object.values(response.data);
      } catch (error) {
        console.error("Error fetching data centers:", error);
      }
    };

    const filterHomeWorlds = () => {
      if (!selectedDataCenter.value) {
        filteredHomeWorlds.value = homeWorlds.value;
      } else {
        selectedHomeWorld.value = "All Worlds";
        const filteredDataCenters = dataCenters.value.filter((x) => x.name === selectedDataCenter.value);
        filteredHomeWorlds.value = filteredDataCenters[0]?.homeWorlds || [];
      }
    };

    const selectCharacter = (character: any) => {
      characterStore.setSelectedCharacter(character);
      router.push("/character/verify");
    };

    onMounted(() => {
      getDataCenters();
      getHomeWorlds();
    });

    return {
      name,
      characters,
      isLoading,
      isValid,
      message,
      alertType,
      selectedDataCenter,
      selectedHomeWorld,
      dataCenters,
      homeWorlds,
      filteredHomeWorlds,
      filterHomeWorlds,
      search,
      selectCharacter,
    };
  },
};
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
  font-size: 0.9rem;
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