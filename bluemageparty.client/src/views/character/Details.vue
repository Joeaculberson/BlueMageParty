<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-title>
                        <v-row align="center" justify="space-between" class="px-4">
                            <div>
                                <h1>{{ character.firstName }} {{ character.lastName }}</h1>
                                <p>{{ character.title }}</p>
                            </div>

                            <img :src="character.portrait" class="rcorners" alt="Character Portrait" />
                        </v-row>
                    </v-card-title>

                    <v-card-subtitle class="px-4">
                        <p><strong>Server:</strong> {{ character.server }}</p>
                        <p><strong>Free Company:</strong> {{ character.freeCompany || 'None' }}</p>
                        <p><strong>Race:</strong> {{ character.race }}</p>
                        <p><strong>Tribe:</strong> {{ character.tribe }}</p>
                        <p><strong>Gender:</strong> {{ character.gender }}</p>
                        <p><strong>Nameday:</strong> {{ character.nameday }}</p>
                    </v-card-subtitle>

                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="6">
                                <h3>Grand Company</h3>
                                <p><strong>Name:</strong> {{ character.grandCompanyName }}</p>
                                <p><strong>Rank:</strong> {{ character.grandCompanyRank }}</p>
                            </v-col>

                            <v-col cols="12" md="6">
                                <h3>Guardian Deity</h3>
                                <p><strong>Name:</strong> {{ character.guardianDeityName }}</p>
                                <img :src="character.guardianDeityIcon" alt="Guardian Deity Icon" class="icon" />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" md="6">
                                <h3>Active Class</h3>
                                <p><strong>Level:</strong> {{ character.activeClassJobLevel }}</p>
                                <img :src="character.activeClassJobIcon" alt="Class Icon" class="icon" />
                            </v-col>

                            <v-col cols="12" md="6">
                                <h3>Town</h3>
                                <p><strong>Name:</strong> {{ character.townName }}</p>
                                <img v-if="character.townIcon" :src="character.townIcon" alt="Town Icon" class="icon" />
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <div v-if="ownsCharacter">
                        <v-card-actions>
                            <v-btn
                                v-if="!isRefreshing"
                                color="primary"
                                @click="refreshCharacterData"
                            >
                                <v-icon small>mdi-refresh</v-icon> Refresh Character Data
                            </v-btn>
                            <v-progress-circular
                                v-else
                                indeterminate
                                color="primary"
                            ></v-progress-circular>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, watch, ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { GET_CHARACTER_BY_LOADSTONE_ID_URL, REFRESH_CHARACTER_DATA_FROM_LOADSTONE_URL } from "@/constants/api";
import { useCharacterStore } from "@/stores/characterStore";

export default defineComponent({
    name: "CharacterDetails",
    setup() {
        const router = useRouter();
        const route = useRoute();
        const ownsCharacter = ref(false);
        const isRefreshing = ref(false);
        const character = reactive({
            avatar: "",
            firstName: "",
            lastName: "",
            title: "",
            server: "",
            id: "",
            activeClassJobIcon: "",
            activeClassJobLevel: null,
            bio: "",
            freeCompany: "",
            gender: "",
            grandCompanyName: "",
            grandCompanyRank: "",
            guardianDeityIcon: "",
            guardianDeityName: "",
            nameday: "",
            portrait: "",
            pvpTeam: "",
            race: "",
            raceClanGender: "",
            townIcon: "",
            townName: "",
            tribe: ""
        });
        const characterStore = useCharacterStore();

        const getCharacterDetails = async () => {
            try {
                const response = await axios.get(GET_CHARACTER_BY_LOADSTONE_ID_URL, {
                    params: { loadstoneCharacterId: route.params.loadstoneCharacterId }
                });

                if (response.data) {
                    Object.assign(character, response.data); // Updates character data
                } else {
                    console.log("Error fetching character data.");
                }
            } catch (error) {
                console.error("Error fetching character data:", error);
            }
        };

        ownsCharacter.value = characterStore
            .getVerifiedCharacters()
            .some(character => character.loadstoneCharacterId === route.params.loadstoneCharacterId);

        const refreshCharacterData = async () => {
            isRefreshing.value = true;
            try {
                const response = await axios.post(REFRESH_CHARACTER_DATA_FROM_LOADSTONE_URL, {
                    Name: character.firstName + " " + character.lastName,
                    Server: character.server
                });
                Object.assign(character, response.data);
            } catch (error) {
                console.error("Error fetching verification code:", error);
            } finally {
                isRefreshing.value = false;
            }
        };

        watch(
            () => route.params.loadstoneCharacterId,
            () => {
                getCharacterDetails(); // Fetch data when the route changes
            },
            { immediate: true } // Call this immediately on mount
        );

        return {
            character,
            refreshCharacterData,
            ownsCharacter,
            isRefreshing
        };
    }
});
</script>


<style scoped>
.rcorners {
  border-radius: 25px;
  padding: 20px;
  width: 366px;
  height: 500px;
}
.icon {
    width: 50px;
    height: 50px;
    margin-top: 8px;
}

h1 {
    margin: 0;
}

p {
    margin: 4px 0;
}
</style>
