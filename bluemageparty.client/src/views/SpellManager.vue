<template>
  <v-container>
    <!-- Display the warning message -->
    <v-alert v-if="characterStore.getVerifiedCharacters().length == 0" type="info" dismissible border="start">
      Please select a character before managing your spells.
    </v-alert>

    <div v-else>
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
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" class="text-center">
            <img src="@/assets/seifer-panic.gif" width="128" alt="Loading" />
          </v-col>
          <v-col cols="12" class="text-center">
            Loading...
          </v-col>
        </v-row>
      </v-card-text>
      <v-container v-else>
        <SpellTable 
          :spells="filteredSpells" 
          :character-id="characterStore.getVerifiedCharacters()[0]?.id"
          :show-owned-column="characterStore.getVerifiedCharacters().length > 0" 
          :missing-spells="missingSpells"
          @spell-updated="handleSpellUpdate" 
        />
      </v-container>
    </div>
  </v-container>
</template>

<script lang="ts">
import SpellTable from "@/components/SpellTable.vue";
import { ref, computed, onMounted } from 'vue';
import apiClient from '@/apiClient';
import { useAuthStore } from '@/stores/authStore';
import { watch } from 'vue';
import { useCharacterStore } from '@/stores/characterStore';
import {
  GET_SPELLS_URL,
  GET_MISSING_SPELLS_URL
} from '@/constants/api';

interface MissingSpell {
  id: string;
  number: number;
  name: string | null;
  description: string | null;
  tooltip: string | null;
  order: number;
  rank: number;
  patch: string | null;
  icon: string | null;
  typeName: string | null;
  aspectName: string | null;
  isSolo: boolean;
  isLightParty: boolean;
  isFullParty: boolean;
  sources: any[] | null;
}

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
  owned: boolean;
  isSolo: boolean;
  isLightParty: boolean;
  isFullParty: boolean;
}

export default {
  name: 'SpellManager',
  components: {
    SpellTable
  },
  setup() {
    const characterStore = useCharacterStore();
    const alertType = ref<'success' | 'error' | 'info'>('info');
    const adminMessage = ref('');
    const isAdmin = ref(false);
    const spells = ref<Spell[]>([]);
    const isLoading = ref(false);
    const authStore = useAuthStore();
    const currentUserId = authStore.getUserId();
    const missingSpells = ref<MissingSpell[]>([]);
    const filters = ref({
      isSolo: true,
      isLightParty: true,
      isFullParty: true,
      hideOwned: true
    });

    const filteredSpells = computed(() => {
      return spells.value.filter((spell) => {
        const matchesPartyType =
          (filters.value.isSolo && spell.isSolo) ||
          (filters.value.isLightParty && spell.isLightParty) ||
          (filters.value.isFullParty && spell.isFullParty);

        const matchesOwnership = !filters.value.hideOwned || !spell.owned;

        return matchesPartyType && matchesOwnership;
      });
    });

    const handleSpellUpdate = (data: { spellId: string; owned: boolean }) => {
      // Update the spells array to reflect the new owned status
      const spellIndex = spells.value.findIndex(spell => spell.id === data.spellId);
      if (spellIndex !== -1) {
        spells.value[spellIndex].owned = data.owned;
      }
    };

    const getSpells = async () => {
      if (!isLoading.value) {
        isLoading.value = true;
        try {
          const characterId = characterStore.getVerifiedCharacters()[0]?.id;
          if (!characterId) return;

          // Fetch spells
          const response = await apiClient.get<Spell[]>(GET_SPELLS_URL, {
            params: { characterId },
          });

          // Fetch missing spells with proper typing
          const missingSpellsResponse = await apiClient.get<MissingSpell[]>(GET_MISSING_SPELLS_URL, {
            params: { characterId },
          });

          // Update missing spells
          missingSpells.value = missingSpellsResponse.data;

          // Initialize spells with owned status
          spells.value = response.data.map((spell) => ({
            ...spell,
            owned: !missingSpells.value.some(missing => missing.id === spell.id)
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

    watch(
      () => characterStore.getVerifiedCharacters(),
      (newCharacters) => {
        if (newCharacters.length > 0) {
          getSpells();
        }
      },
      { deep: true, immediate: true }
    );

    const applyFilters = () => {
      // Force reactivity update
      spells.value = [...spells.value];
    };

    onMounted(() => {
      // Initialization if needed
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
      currentUserId,
      missingSpells
    };
  },
};
</script>

<style scoped></style>