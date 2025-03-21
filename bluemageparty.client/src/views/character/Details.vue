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
                            <v-btn v-if="!loading" color="primary" @click="refreshCharacterData">
                                <v-icon small>mdi-refresh</v-icon> Refresh Character Data
                            </v-btn>
                            <v-card-text>
                                <v-row class="d-flex justify-center align-center">
                                    <v-col cols="12" class="text-center">
                                        <img src="@/assets/seifer-panic.gif" width="128" alt="Loading" />
                                    </v-col>
                                    <v-col cols="12" class="text-center">
                                        Loading...
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </div>
                </v-card>

                <!-- Spell Comparison Section -->
                <v-card class="mt-4">
                    <v-card-title>Spell Comparison</v-card-title>
                    <v-card-text>
                        <SpellComparison v-if="!loading" :party="party" :showRemoveIcon="false"
                            :currentUserId="currentUserId" @update-party-members="updatePartyMembers"
                            @update-everyone-needs="recalculateEveryoneNeeds" />
                        <v-card-text v-else>
                            <v-row class="d-flex justify-center align-center">
                                <v-col cols="12" class="text-center">
                                    <img src="@/assets/seifer-panic.gif" width="128" alt="Loading" />
                                </v-col>
                                <v-col cols="12" class="text-center">
                                    Loading...
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, watch, ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import apiClient from '@/apiClient';
import { GET_CHARACTER_BY_LOADSTONE_ID_URL, REFRESH_CHARACTER_DATA_FROM_LOADSTONE_URL, GET_MOCK_PARTY_FROM_CHARACTER_IDS_URL } from "@/constants/api";
import { useCharacterStore } from "@/stores/characterStore";
import { useAuthStore } from "@/stores/authStore";
import SpellComparison from "@/components/SpellComparison.vue";

interface Character {
    avatar: string;
    firstName: string;
    lastName: string;
    title: string;
    server: string;
    id: string;
    activeClassJobIcon: string;
    activeClassJobLevel: number | null;
    bio: string;
    freeCompany: string;
    gender: string;
    grandCompanyName: string;
    grandCompanyRank: string;
    guardianDeityIcon: string;
    guardianDeityName: string;
    nameday: string;
    portrait: string;
    pvpTeam: string;
    race: string;
    raceClanGender: string;
    townIcon: string;
    townName: string;
    tribe: string;
}

interface Party {
    partyMembers: any[];
    everyoneNeeds: any[];
}

interface CharacterResponse {
    id: string;
    firstName: string;
    lastName: string;
    server: string;
    // Add other expected properties...
}

export default defineComponent({
    name: "CharacterDetails",
    components: {
        SpellComparison,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const ownsCharacter = ref(false);
        const loading = ref(false);
        const character = reactive<Character>({
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
            tribe: "",
        });

        const characterStore = useCharacterStore();
        const authStore = useAuthStore();
        const currentUserId = authStore.getUserId();

        // Define the party object with the character and the verified character
        const party = ref<Party>({
            partyMembers: [],
            everyoneNeeds: [],
        });

        ownsCharacter.value = characterStore
            .getVerifiedCharacters()
            .some((character) => character.loadstoneCharacterId === route.params.loadstoneCharacterId);

        const getCharacterDetails = async () => {
            try {
                const response = await apiClient.get<CharacterResponse>(GET_CHARACTER_BY_LOADSTONE_ID_URL, {
                    params: { loadstoneCharacterId: route.params.loadstoneCharacterId },
                });

                if (response.data) {
                    Object.assign(character, response.data); // Updates character data
                    if (characterStore.getVerifiedCharacters().length === 0) return;

                    // Ensure response.data.id is recognized as a string
                    const characterId = response.data.id;
                    const verifiedCharacterId = characterStore.getVerifiedCharacters()[0].id;

                    await getMockParty([characterId, verifiedCharacterId]);
                    recalculateEveryoneNeeds();
                } else {
                    console.log("Error fetching character data.");
                }
            } catch (error) {
                console.error("Error fetching character data:", error);
            }
        };

        const fetchMockPartyFromCharacterIds = async (characterIds: string[]) => {
            if (characterIds.length !== 2) {
                console.error("Exactly two character IDs are required.");
                return null;
            }

            try {
                const response = await apiClient.get(GET_MOCK_PARTY_FROM_CHARACTER_IDS_URL, {
                    params: { characterIds },
                    paramsSerializer: (params) => {
                        return characterIds.map((id) => `characterIds=${id}`).join("&");
                    },
                });

                if (response.data) {
                    return response.data as Party; // Return the mock party data
                } else {
                    console.error("No data returned from the server.");
                    return null;
                }
            } catch (error) {
                console.error("Error fetching mock party data:", error);
                return null;
            }
        };

        const getMockParty = async (characterIds: string[]) => {
            const result = await fetchMockPartyFromCharacterIds(characterIds);
            if (result) {
                party.value = result; // Update the reactive mockParty object
            } else {
                console.error("Failed to fetch mock party data.");
            }
        };

        const refreshCharacterData = async () => {
            loading.value = true;
            try {
                const response = await apiClient.post(REFRESH_CHARACTER_DATA_FROM_LOADSTONE_URL, {
                    Name: character.firstName + " " + character.lastName,
                    Server: character.server,
                });
                Object.assign(character, response.data);
            } catch (error) {
                console.error("Error fetching verification code:", error);
            } finally {
                loading.value = false;
            }
        };

        // Recalculate spells that everyone in the party needs
        const recalculateEveryoneNeeds = () => {
            if (!party.value.partyMembers || party.value.partyMembers.length === 0) {
                console.error("Party members are undefined or empty.");
                return;
            }

            // Get all unique spells from the party members
            const allSpells = party.value.partyMembers
                .flatMap((member) => member.character.missingSpells)
                .filter((spell, index, self) => self.findIndex((s) => s.id === spell.id) === index);

            // Filter spells that are missing for all members
            party.value.everyoneNeeds = allSpells.filter((spell) =>
                party.value.partyMembers.every((member) =>
                    member.character.missingSpells.some((missingSpell) => missingSpell.id === spell.id)
                )
            );
        };

        // Update party members when an event is emitted
        const updatePartyMembers = (updatedPartyMembers: any[]) => {
            party.value.partyMembers = updatedPartyMembers;
            recalculateEveryoneNeeds();
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
            loading,
            party,
            currentUserId,
            updatePartyMembers,
            recalculateEveryoneNeeds,
        };
    },
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