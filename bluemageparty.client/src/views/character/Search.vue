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
                        <v-select label="Data Center" :items="dataCenters" item-title="name" item-value="name"
                            v-model="selectedDataCenter" @update:model-value="filterHomeWorlds"></v-select>

                        <!-- Home World Dropdown -->
                        <v-select label="Home World" :items="filteredHomeWorlds" item-title="name" item-value="name"
                            v-model="selectedHomeWorld"></v-select>

                        <v-text-field v-model="name" label="Name" type="input" required />
                        <v-btn @click="search" color="primary">Search</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card class="mx-auto" width="400">
                    <template v-slot:title>
                        <span class="font-weight-black">Character Search</span>
                    </template>

                    <v-list lines="one">
                        <div v-for="character in characters">
                            <v-list-item :prepend-avatar="character.avatar"
                                :title="character.name">
                                <template v-slot:subtitle>
                                    <span class="font-weight-bold">{{ character.server }}</span>
                                </template>
                            </v-list-item>

                            <v-divider inset></v-divider>
                        </div>

                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { GET_HOME_WORLDS_URL, GET_DATA_CENTERS_URL, SEARCH_CHARACTER_URL } from '@/constants/api';

export default defineComponent({
    name: 'Home',
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();
        const name = ref('');
        const characters = ref([]);

        // Define default values for the selects
        const selectedDataCenter = ref<string | null>('All Data Centers');
        const selectedHomeWorld = ref<string | null>('All Worlds');

        // Define the data centers and home worlds with correct types
        const dataCenters = ref<{ id: string; name: string; homeWorlds: { id: string; name: string }[] }[]>([]);
        const homeWorlds = ref<{ id: string; name: string; dataCenter: { id: string; name: string } }[]>([]);
        const filteredHomeWorlds = ref<{ id: string; name: string }[]>([]);

        // Fetch Home Worlds
        const search = async () => {
            try {
                const response = await axios.post(SEARCH_CHARACTER_URL, { name: name.value, world: selectedHomeWorld.value });
                characters.value = response.data;
                console.log(response);
            } catch (error) {
                console.error('Searching failed:', error);
            }
        };

        // Fetch Home Worlds
        const getHomeWorlds = async () => {
            try {
                const response = await axios.get(GET_HOME_WORLDS_URL);
                homeWorlds.value = response.data;
            } catch (error) {
                console.error('Getting home worlds failed:', error);
            }
        };

        // Fetch Data Centers
        const getDataCenters = async () => {
            try {
                const response = await axios.get(GET_DATA_CENTERS_URL);
                dataCenters.value = response.data;
            } catch (error) {
                console.error('Getting data centers failed:', error);
            }
        };

        // Filter Home Worlds based on the selected Data Center
        const filterHomeWorlds = () => {
            if (!selectedDataCenter.value) {
                filteredHomeWorlds.value = homeWorlds.value; // Show all HomeWorlds if no DataCenter is selected
            } else {
                selectedHomeWorld.value = 'All Worlds';
                const filteredDataCenters = dataCenters.value.filter(x => x.name == selectedDataCenter.value);
                filteredHomeWorlds.value = filteredDataCenters[0].homeWorlds;
            }
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
            search
        };
    },
});
</script>