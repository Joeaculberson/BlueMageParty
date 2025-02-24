<template>
    <div class="party-details">
        <!-- Search and add character to party -->
        <v-autocomplete v-model="selectedCharacter" :items="filteredCharacters" label="Search Character" item-value="id"
            item-title="fullName" return-object :loading="searchLoading" @update:search="(value) => {
                searchQuery = value;
                characters = []; // Reset before searching
            }" @blur="clearSearch" no-data-text="No characters found" @update:model-value="addCharacterToParty">
            <template v-slot:item="{ item }">
                <v-list-item @click="addCharacterToParty(item.raw)">
                    <div class="d-flex align-center">
                        <v-avatar size="50" class="mr-3">
                            <img width="50px" :src="item.raw.avatar" alt="Character Avatar" />
                        </v-avatar>
                        <v-list-item-title>
                            {{ item.raw.fullName }}
                            ({{ item.raw.server }})
                        </v-list-item-title>
                    </div>
                    <div class="align-right"></div>
                </v-list-item>
            </template>
        </v-autocomplete>

        <!-- Display Party Details -->
        <div v-if="!loading">
            <SpellComparison :party="party" :showRemoveIcon="true" :currentUserId="currentUserId"
                @update-party-members="updatePartyMembers" @update-everyone-needs="recalculateEveryoneNeeds" />
        </div>

        <!-- Loading state -->
        <div v-else class="text-gray-600">
            <v-card-text>
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-card-text>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import SpellComparison from "@/components/SpellComparison.vue";
import {
    GET_PARTY_DETAILS_URL,
    SEARCH_DATABASE_CHARACTERS_URL,
    GET_MISSING_SPELLS_URL,
    ADD_PARTY_MEMBER_URL
} from '@/constants/api';

export default defineComponent({
    name: "PartyDetails",
    components: {
        SpellComparison
    },
    setup() {
        const route = useRoute();
        const party = ref({
            partyMembers: [],
            everyoneNeeds: [],
        });
        const loading = ref(true);
        const searchLoading = ref(false);
        const searchQuery = ref("");
        const selectedCharacter = ref(null);
        const characters = ref([]);
        const authStore = useAuthStore();
        const currentUserId = authStore.getUserId(); // Get the current user's ID

        // Fetch party details from the API
        const getPartyDetails = async () => {
            loading.value = true;
            try {
                const response = await axios.get(GET_PARTY_DETAILS_URL, {
                    params: { partyId: route.params.partyId },
                });
                if (response.data) {
                    party.value = response.data;
                } else {
                    console.log("Error fetching party data.");
                }
            } catch (error) {
                console.error("Error fetching party data:", error);
            }
            loading.value = false;
        };

        const recalculateEveryoneNeeds = () => {
            if (!party.value.partyMembers || !party.value.spells) {
                console.error("Party members or spells are undefined.");
                return;
            }

            const allSpells = party.value.spells;
            //console.log("All Spells:", allSpells);

            // Log missingSpells for each party member
            /* party.value.partyMembers.forEach(member => {
                console.log(`Member ${member.character.firstName} missing spells:`, member.character.missingSpells);
            });*/

            // Create a Set of spell IDs that each member is missing
            const memberOwnedSpells = party.value.partyMembers
                .map(member => {
                    if (!member.character.missingSpells || !Array.isArray(member.character.missingSpells)) {
                        //console.error(`Member ${member.character.firstName} has invalid missingSpells.`);
                        return new Set(); // Return an empty Set if missingSpells is invalid
                    }
                    return new Set(member.character.missingSpells.map(spell => spell.id));
                });

            //console.log("Member Owned Spells (as Sets):", memberOwnedSpells);

            // Filter spells that are missing for all members
            party.value.everyoneNeeds = allSpells.filter(spell => {
                const isMissingForEveryone = memberOwnedSpells.every(ownedSpells => ownedSpells.has(spell.id));
                //console.log(`Spell ${spell.id} (${spell.name}): Is missing for everyone?`, isMissingForEveryone);
                return isMissingForEveryone;
            });

            //console.log("Everyone Needs:", party.value.everyoneNeeds);
        };

        // Search characters based on the query
        const searchCharacters = async () => {
            if (searchQuery.value.length < 3) return;
            searchLoading.value = true;
            try {
                const response = await axios.get(SEARCH_DATABASE_CHARACTERS_URL, {
                    params: { query: searchQuery.value, partyId: party.value.id }
                });
                characters.value = response.data;
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
            searchLoading.value = false;
        };

        // Clear the search query and results
        const clearSearch = () => {
            searchQuery.value = "";
            characters.value = [];
        };

        // Update partyMembers when an event is emitted
        const updatePartyMembers = (updatedPartyMembers) => {
            party.value.partyMembers = updatedPartyMembers;
            recalculateEveryoneNeeds(); // Recalculate everyoneNeeds after updating party members
        };

        const addCharacterToParty = async (character) => {
            if (!character) return;

            // Check if the character is already in the party
            const isCharacterInParty = party.value.partyMembers?.some(member => member.character.id === character.id);
            if (isCharacterInParty) {
                alert(`${character.firstName} ${character.lastName} is already in the party.`);
                console.log(`${character.firstName} ${character.lastName} is already in the party.`);
                return; // Exit if the character is already in the party
            }

            try {
                // Fetch missing spells for the character
                const response = await axios.get(GET_MISSING_SPELLS_URL, {
                    params: { characterId: character.id }
                });
                const missingSpells = response.data;

                // Add the character to the party via API
                const addResponse = await axios.post(ADD_PARTY_MEMBER_URL, {
                    characterId: character.id,
                    partyId: party.value.id
                });

                // Initialize partyMembers array if it doesn't exist
                if (!party.value.partyMembers) {
                    party.value.partyMembers = [];
                }

                // Add the character to the local party state
                party.value.partyMembers.push({
                    id: addResponse.data.id,
                    character: { ...character, missingSpells: missingSpells },
                    isHost: false
                });

                // Recalculate everyone's needs after adding a member
                recalculateEveryoneNeeds();
            } catch (error) {
                console.error("Error fetching missing spells or adding character to party:", error);
            }
        };

        // Compute filtered characters for the autocomplete
        const filteredCharacters = computed(() => {
            return characters.value.map(char => ({
                ...char,
                fullName: `${char.firstName} ${char.lastName}`
            }));
        });

        // Watch for changes to the search query and trigger search
        watch(searchQuery, (newValue) => {
            searchCharacters();
        });

        // Fetch party details when the component mounts
        onMounted(() => {
            getPartyDetails();
        });

        return {
            party,
            loading,
            searchLoading,
            searchQuery,
            selectedCharacter,
            filteredCharacters,
            addCharacterToParty,
            clearSearch,
            updatePartyMembers,
            recalculateEveryoneNeeds,
            currentUserId, // Pass the current user's ID to the template
        };
    },
});
</script>