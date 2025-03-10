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
          <v-avatar size="80">
            <img width="80px" src="@/assets/malboro-minion.jpg" alt="avatar" />
          </v-avatar>
          <h2>Everyone Needs</h2>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-card-text v-if="loading">
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
              :spells="filteredSpells(memberSpells(party.everyoneNeeds))"
              :character-id="'everyone'"
              :show-owned-column="false"
              :missing-spells="[]"
            />
          </v-container>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel v-for="member in party.partyMembers" :key="member.id">
        <v-expansion-panel-title>
          <v-avatar size="80">
            <img width="80px" :src="member.character.avatar" alt="avatar" />
          </v-avatar>

          <h2>
            {{ member.character.firstName }} {{ member.character.lastName }} ({{ member.character.server }})
            <span v-if="member.isHost">
              <v-icon color="black" small>
                mdi-bullhorn-variant-outline
              </v-icon>
            </span>
            <v-icon v-if="isAuthenticated" @click.stop="goToCharacterPage(member.character.loadstoneCharacterId)" small>
              mdi-account-outline
            </v-icon>
            <v-icon v-if="isAuthenticated && showRemoveIcon && !member.isHost && party.userId == currentUserId"
              @click.stop="removeMemberFromParty(member.id)" color="red" small>
              mdi-trash-can
            </v-icon>
          </h2>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-card-text v-if="loading">
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
              :spells="filteredSpells(memberSpells(member.character.missingSpells))"
              :character-id="member.character.id"
              :show-owned-column="ownsCharacter(member.character.userId)"
              :missing-spells="member.character.missingSpells"
              @spell-updated="handleSpellUpdate"
            />
          </v-container>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useCharacterStore } from '@/stores/characterStore';
import { useRouter } from "vue-router";
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
    },
    showRemoveIcon: Boolean // Determines if the trashcan should be shown
  },
  emits: ['update-party-members', 'update-everyone-needs'], // Define custom events
  setup(props, { emit }) {
    const panel = ref([]);
    const loading = ref(false);
    const router = useRouter();
    const characterStore = useCharacterStore();
    const authStore = useAuthStore();
    const currentUserId = authStore.getUserId(); // Get the current user's ID
    const isAuthenticated = authStore.isAuthenticated;

    // State for filters
    const filters = ref({
      solo: true,
      lightParty: true,
      fullParty: true,
    });

    // Track the previous state of verifiedCharacters
    const previousVerifiedCharacters = ref(characterStore.getVerifiedCharacters());

    const goToCharacterPage = (loadstoneCharacterId) => {
      router.push('/character/' + loadstoneCharacterId);
    };

    const ownsCharacter = (partyMemberUserId) => {
      return characterStore.getVerifiedCharacters().some(character => character.userId === partyMemberUserId);
    };

    // Watch for changes to verifiedCharacters
    watch(
      () => characterStore.getVerifiedCharacters(),
      (newVerifiedCharacters) => {
        if (newVerifiedCharacters.length == previousVerifiedCharacters.value.length)
          return;

        console.log('New verified characters:', newVerifiedCharacters);
        console.log('Previous verified characters:', previousVerifiedCharacters.value);

        // Only proceed if the array got smaller
        if (newVerifiedCharacters.length < previousVerifiedCharacters.value.length) {
          // Find the character that was removed
          const removedCharacter = previousVerifiedCharacters.value.find(
            oldChar => !newVerifiedCharacters.some(newChar => newChar.id === oldChar.id)
          );

          console.log('Removed character:', removedCharacter); // Debug log

          if (removedCharacter) {
            // Remove the specific character from the party
            const updatedPartyMembers = props.party.partyMembers.filter(
              member => member.character.id !== removedCharacter.id
            );

            console.log('Updated party members:', updatedPartyMembers); // Debug log

            if (updatedPartyMembers.length !== props.party.partyMembers.length) {
              // Emit the updated party members to the parent
              console.log('Emitting update-party-members'); // Debug log
              emit('update-party-members', updatedPartyMembers);
            }
          }
        }

        // Update the previous state
        previousVerifiedCharacters.value = newVerifiedCharacters;
      },
      { deep: true }
    );

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
      if (!missingSpells || !Array.isArray(missingSpells)) return [];
      if (!props.party?.spells) return [];

      return props.party.spells.filter((spell) =>
        missingSpells.some((missing) => missing.id === spell.id)
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
      ownsCharacter,
      goToCharacterPage,
      isAuthenticated
    };
  }
});
</script>