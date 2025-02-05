<template>
  <v-container>
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
            <SpellTable :spells="memberSpells(party.everyoneNeeds)" />
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
              <v-icon v-if="showRemoveIcon && !member.isHost" @click.stop="removeMemberFromParty(member.id)" color="red"
                small>
                mdi-trash-can
              </v-icon>
            </span>
          </h2>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-card-text v-if="loading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-card-text>
          <v-container v-else>
            <SpellTable :spells="memberSpells(member.character.missingSpells)" :characterId="member.character.id"
              @spell-updated="handleSpellUpdate" />
          </v-container>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useCharacterStore } from '@/stores/characterStore';
import {
  REMOVE_PARTY_MEMBER_URL
} from '@/constants/api';

export default defineComponent({
  name: 'SpellComparison',
  props: {
    party: Object, // Full party object with members and their spells
    showRemoveIcon: Boolean // Determines if the trashcan should be shown
  },
  setup(props) {
    const panel = ref([]);
    const items = ref([]);
    const loading = ref(false);
    const characterStore = useCharacterStore();

    const headers = ref([
      { text: 'Spell Name', value: 'spellName' },
      { text: 'Element', value: 'element' },
      { text: 'Power', value: 'power' }
    ]);

    const memberSpells = (missingSpells) => {
      if (!missingSpells || !Array.isArray(missingSpells)) {
        return []; // Return an empty array if missingSpells is undefined or not an array
      }
      if (!props.party?.spells) {
        return []; // Return an empty array if party.spells is missing
      }
      return props.party.spells.filter(spell =>
        missingSpells.some(missing => missing.id === spell.id)
      );
    };


    const handleSpellUpdate = (data: { spellId: string; owned: boolean }) => {
      // console.log("Spell ownership updated:", data);
      // Update the spells array if needed
    };

    // Remove a character from the party
    const removeMemberFromParty = async (memberId) => {
      if (!memberId) return;

      const response = await axios.delete(REMOVE_PARTY_MEMBER_URL, {
        params: { Id: memberId }
      });

      const index = party.value.partyMembers.findIndex((member) => member.Id === memberId);
      if (index !== -1) {
        party.value.partyMembers.splice(index, 1); // Remove character from the array
      }
    };

    //console.log('props.party: ' + JSON.stringify(props.party.partyMembers));
    const processPartyData = () => {
      if (props.party && props.party.partyMembers) {
        //console.log('process ' + JSON.stringify(props.party.partyMembers))
        items.value = props.party.partyMembers.map(member => ({
          id: member.id,
          title: `${member.character.firstName} ${member.character.lastName}`,
          tableData: member.spells || []
        }));
      }
    };
    watch(() => props.party, processPartyData, { deep: true, immediate: true });

    return { panel, headers, loading, items, characterStore, memberSpells, handleSpellUpdate, removeMemberFromParty };
  }
});
</script>
<style>
.character-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
}
</style>