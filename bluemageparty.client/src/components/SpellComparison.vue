<template>
  <v-container>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="member in party.partyMembers" :key="member.id">
        <v-expansion-panel-title>
          <img :src="member.character.avatar" alt="avatar" class="character-avatar" />
          <h2>{{ member.character.firstName }} {{ member.character.lastName }} 
            <span v-if="member.isHost">
              (Host)
            </span>
          </h2>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">#<span style="visibility: hidden;">Number Space</span></th>
                <th class="text-left"><span style="visibility: hidden;">Icon Space</span></th>
                <th class="text-left">Name</th>
                <th class="text-left">Enemy</th>
                <th class="text-left">Location</th>
                <th class="text-left">Patch</th>
                <th class="text-left">Owned</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="spell in party.spells" :key="spell.name">
                <td>No. {{ spell.number }}</td>
                <td>
                  <v-img :src="spell.icon" class="spell-sprite" max-width="42" max-height="42" />
                </td>
                <td>{{ spell.name }}</td>
                <td>
                  <div v-for="source in spell.sources" :key="source.enemy">
                    {{ source.enemy }}
                  </div>
                </td>
                <td>
                  {{ spell.source }}
                  <div v-for="source in spell.sources" :key="source.location">
                    {{ source.location }}
                  </div>
                </td>
                <td>{{ spell.patch }}</td>
                <td>
                  <v-checkbox v-model="spell.owned" :disabled="characterStore.getVerifiedCharacters().length == 0"
                    @change="handleCheckboxChange(spell)" color="primary" />
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useCharacterStore } from '@/stores/characterStore';

export default defineComponent({
  name: 'SpellComparison',
  props: {
    party: Object // Full party object with members and their spells
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
    //console.log('props.party: ' + JSON.stringify(props.party.partyMembers));
    const processPartyData = () => {
      if (props.party && props.party.partyMembers) {
        items.value = props.party.partyMembers.map(member => ({
          id: member.id,
          title: `${member.character.firstName} ${member.character.lastName}`,
          tableData: member.spells || []
        }));
      }
    };
    watch(() => props.party, processPartyData, { deep: true, immediate: true });

    return { panel, headers, loading, items, characterStore };
  }
});
</script>