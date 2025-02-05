<template>
    <div class="party-details">
        <!-- Search and add character to party -->
        <v-autocomplete
            v-model="selectedCharacter"
            :items="filteredCharacters"
            label="Search Character"
            item-value="id"
            item-title="fullName"
            return-object
            :loading="searchLoading"
            @update:search="(value) => {
                searchQuery = value;
                characters = []; // Reset before searching
            }"
            @blur="clearSearch"
            no-data-text="No characters found"
            @update:model-value="addCharacterToParty"
        >

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
                    <div class="align-right">
                        
                    </div>
                </v-list-item>
            </template>
        </v-autocomplete>

        <!-- Display Party Details -->
        <div v-if="!loading">
            <SpellComparison :party="party" :showRemoveIcon="true" />
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
import { GET_PARTY_DETAILS_URL, 
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
        const party = ref({}); // Party data
        const loading = ref(true); // Loading state for fetching party details
        const searchLoading = ref(false); // Loading state for searching characters
        const searchQuery = ref(""); // Search query state
        const selectedCharacter = ref(null); // Selected character for adding to the party
        const characters = ref([]); // List of characters
        const authStore = useAuthStore();

        // Fetch party details from the API
        const getPartyDetails = async () => {
            loading.value = true;
            try {
                const response = await axios.get(GET_PARTY_DETAILS_URL, {
                    params: { partyId: route.params.partyId }
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

        // Search characters based on the query
        const searchCharacters = async () => {
            if (searchQuery.value.length < 3) return;
            searchLoading.value = true;
            try {
                const response = await axios.get(SEARCH_DATABASE_CHARACTERS_URL, {
                    params: { query: searchQuery.value }
                });
                characters.value = response.data;
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
            searchLoading.value = false;
        };

        const clearSearch = () => {
            searchQuery.value = "";
            characters.value = [];
        };

        const memberSpells = (character) => {
            if (!character?.missingSpells || !Array.isArray(character.missingSpells)) {
                return []; // Return an empty array if missingSpells is undefined or not an array
            }

            return props.party.spells.filter(spell =>
                character.missingSpells.some(missing => missing.id === spell.id)
            );
        };

        // Add character to the party and fetch missing spells
        const addCharacterToParty = async (character) => {
            if (!character) return;
            try {
                console.log("Adding character:", JSON.stringify(character)); // Check the character data
                const response = await axios.get(GET_MISSING_SPELLS_URL, {
                    params: { characterId: character.id }
                });
                const missingSpells = response.data;
                //console.log("Missing Spells:", missingSpells); // Log missing spells

                if (!party.value.partyMembers) {
                    party.value.partyMembers = [];
                }

                party.value.partyMembers.push({
                    character: { ...character, missingSpells: missingSpells }
                });

                console.log('Updated Party:', JSON.stringify(party.value)); // Log updated party
            } catch (error) {
                console.error("Error fetching missing spells:", error);
            }
        };

        const filteredCharacters = computed(() => {
            return characters.value.map(char => ({
                ...char, // Keep all original properties
                fullName: `${char.firstName} ${char.lastName}` // Add fullName property
            }));
        });

        watch(searchQuery, (newValue) => {
            searchCharacters();
        });

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
            clearSearch
        };
    },
});
</script>


<style>

</style>
