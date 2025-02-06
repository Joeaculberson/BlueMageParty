<template>
  <v-container>
    <!-- Display the warning message -->
    <v-alert v-if="characterStore.getVerifiedCharacters().length == 0" type="info" dismissible border="start">
      Please select a character before managing your spells.
    </v-alert>

    <v-row>
      <v-col cols="12" md="3">
        <v-checkbox v-model="filters.isSolo" label="Solo"></v-checkbox>
      </v-col>
      <v-col cols="12" md="3">
        <v-checkbox v-model="filters.isLightParty" label="Light Party"></v-checkbox>
      </v-col>
      <v-col cols="12" md="3">
        <v-checkbox v-model="filters.isFullParty" label="Full Party"></v-checkbox>
      </v-col>
      <v-col cols="12" md="3">
        <v-checkbox v-model="filters.hideOwned" label="Hide Owned Spells" @change="applyFilters"></v-checkbox>
      </v-col>
    </v-row>

    <v-card-text v-if="isLoading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-card-text>
    <v-container v-else>
      <SpellTable :spells="filteredSpells" :characterId="selectedCharacterId" @spell-updated="handleSpellUpdate" />
    </v-container>
  </v-container>
</template>

<script lang="ts">
import SpellTable from "@/components/SpellTable.vue";
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';
import { watch } from 'vue';
import { useCharacterStore } from '@/stores/characterStore';
import {
  GET_SPELLS_URL
} from '@/constants/api';

interface Spell {
  id: string;
  name: string;
  number: number;
  description: string;
  tooltip: string;
  order: number;
  rank: number;
  patch: string;
  icon: string;
  type: { id: number; name: string };
  aspect: { id: number; name: string };
  sources: { enemy: string; location: string }[];
  owned: boolean; // Track checkbox state
  isSolo: boolean;
  isLightParty: boolean;
  isFullParty: boolean;
}

export default {
  name: 'SpellManager',
  setup() {
    const characterStore = useCharacterStore();
    const alertType = ref<'success' | 'error' | 'info'>('info');
    const adminMessage = ref('');
    const isAdmin = ref(false);
    const spells = ref<Spell[]>([]); // Store spells here
    const isLoading = ref(false);
    const selectedCharacterId = ref(characterStore.getVerifiedCharacters()[0].id);
    const filters = ref({
      isSolo: false,
      isLightParty: false,
      isFullParty: false,
      hideOwned: true
    });

    const filteredSpells = computed(() => {
      return spells.value.filter((spell) => {
        return (
          (!filters.value.isSolo || spell.isSolo) &&
          (!filters.value.isLightParty || spell.isLightParty) &&
          (!filters.value.isFullParty || spell.isFullParty) &&
          (!filters.value.hideOwned || !spell.owned)
        );
      });
    });

    // Handle spell ownership updates
    const handleSpellUpdate = (data: { spellId: string; owned: boolean }) => {
      // console.log("Spell ownership updated:", data);
      // Update the spells array if needed
    };

    // Fetch the list of spells
    const getSpells = async () => {
      if (!isLoading.value) {
        isLoading.value = true;
        try {
          const characterId =
            characterStore.getVerifiedCharacters().length > 0
              ? characterStore.getVerifiedCharacters()[0].id
              : undefined;

          // Fetch spells based on the active character
          const response = await axios.get(GET_SPELLS_URL, {
            params: { characterId },
          });

          spells.value = response.data.map((spell: any) => ({
            ...spell,
            checked: false, // Initialize checkbox state as false
          }));
          alertType.value = 'success';
        } catch (error) {
          alertType.value = 'error';
          console.error('Error fetching spells:', error);
        }
        isLoading.value = false;
      }
    };

    watch(filters, () => {
      applyFilters();
    }, { deep: true });

    // Watch for changes to the verified characters and fetch spells when the list changes
    watch(
      () => characterStore.getVerifiedCharacters(),
      () => {
        getSpells(); // Trigger getSpells whenever the verified characters array is updated
      },
      { immediate: false } // Run this on initial load to fetch spells
    );

    // Apply filters to the spells
    const applyFilters = () => {
      spells.value = spells.value.map(spell => ({ ...spell })); // Forces reactivity update
    };

    onMounted(() => {
      getSpells();
    });

    return {
      isLoading,
      isAdmin,
      spells,
      adminMessage,
      alertType,
      getSpells,
      handleSpellUpdate,
      characterStore,
      filters,
      filteredSpells,
      applyFilters,
      selectedCharacterId
    };
  },
};
</script>

<style scoped>

</style>
