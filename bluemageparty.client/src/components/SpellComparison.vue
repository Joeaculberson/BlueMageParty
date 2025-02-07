<template>
  <v-container>
    <!-- Checkboxes for filtering -->
    <v-row>
      <v-col>
        <v-checkbox v-model="filters.solo" label="Solo" color="primary"></v-checkbox>
      </v-col>
      <v-col>
        <v-checkbox v-model="filters.lightParty" label="Light Party" color="primary"></v-checkbox>
      </v-col>
      <v-col>
        <v-checkbox v-model="filters.fullParty" label="Full Party" color="primary"></v-checkbox>
      </v-col>
    </v-row>

    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <h2>Everyone Needs</h2>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-card-text v-if="loading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-card-text>
          <v-container v-else>
            <SpellTable :spells="filteredSpells(memberSpells(party.everyoneNeeds))" />
          </v-container>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel v-for="member in party.partyMembers" :key="member.id">
        <v-expansion-panel-title>
          <v-avatar size="80">
            <img width="80px" :src="member.character.avatar" alt="avatar" />
          </v-avatar>

          <h2>{{ member.character.firstName }} {{ member.character.lastName }} ({{ member.character.server }})
            <span v-if="member.isHost">
              <v-icon color="black" small>
                mdi-bullhorn-variant-outline
              </v-icon>
            </span>
            <v-icon v-if="showRemoveIcon && !member.isHost" @click.stop="removeMemberFromParty(member.id)" color="red"
              small>
              mdi-trash-can
            </v-icon>
          </h2>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-card-text v-if="loading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-card-text>
          <v-container v-else>
            <SpellTable
              :spells="filteredSpells(memberSpells(member.character.missingSpells))"
              :character-id="member.character.id"
              :show-owned-column="ownsCharacter(member.character.userId)"
              @spell-updated="handleSpellUpdate"
            />
          </v-container>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useCharacterStore } from '@/stores/characterStore';
import axios from "axios";
import { REMOVE_PARTY_MEMBER_URL } from '@/constants/api';
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
  name: 'SpellComparison',
  props: {
    party: {
      type: Object,
      required: true,
      default: () => ({
        partyMembers: [],  // Default empty array for safety
      })
    }, // Full party object with members and their spells
    showRemoveIcon: Boolean // Determines if the trashcan should be shown
  },
  emits: ['update-party-members', 'update-everyone-needs'], // Define custom events
  setup(props, { emit }) {
    const panel = ref([]);
    const loading = ref(false);
    const characterStore = useCharacterStore();
    const authStore = useAuthStore();
    const currentUserId = authStore.getUserId(); // Get the current user's ID

    // State for filters
    const filters = ref({
      solo: true,
      lightParty: true,
      fullParty: true,
    });

    const ownsCharacter = (partyMemberUserId) => {
      return authStore.getUserId() == partyMemberUserId
    };

    // Computed property to filter spells based on the checkbox values
    const filteredSpells = (spells) => {
      return spells.filter(spell => {
        const matchesPartyType =
          (filters.value.solo && spell.isSolo) ||
          (filters.value.lightParty && spell.isLightParty) ||
          (filters.value.fullParty && spell.isFullParty);

        return matchesPartyType;
      });
    };

    const memberSpells = (missingSpells) => {
      if (!missingSpells || !Array.isArray(missingSpells)) {
        return [];
      }
      if (!props.party?.spells) {
        return [];
      }
      return props.party.spells.filter(spell =>
        missingSpells.some(missing => missing.id === spell.id)
      );
    };

    const handleSpellUpdate = async (data: { spellId: string; owned: boolean; characterId: string }) => {
      try {
        if (!props.party || !props.party.partyMembers) {
          console.error('Party or partyMembers is undefined');
          return;
        }

        const { spellId, owned, characterId } = data;

        const member = props.party.partyMembers.find(
          (member) => member.character.id === data.characterId
        );

        if (owned) {
          member.character.missingSpells = member.character.missingSpells.filter(
            (spell) => spell.id !== spellId
          );
        } else {
          const spell = props.party.spells.find((s) => s.id === spellId);
          if (spell) {
            member.character.missingSpells.push(spell);
          }
        }

        emit('update-everyone-needs');
      } catch (error) {
        console.error("Error updating spell ownership:", error);
      }
    };

    const removeMemberFromParty = async (memberId) => {
      if (!memberId) return;

      try {
        const response = await axios.delete(REMOVE_PARTY_MEMBER_URL, {
          params: { Id: memberId }
        });

        const updatedPartyMembers = props.party.partyMembers.filter(
          (member) => member.id !== memberId
        );

        emit('update-party-members', updatedPartyMembers);
        emit('update-everyone-needs');
      } catch (error) {
        console.error("Failed to remove member:", error);
      }
    };

    return {
      panel,
      loading,
      filters,
      filteredSpells,
      memberSpells,
      handleSpellUpdate,
      removeMemberFromParty,
      currentUserId,
      ownsCharacter
    };
  }
});
</script>