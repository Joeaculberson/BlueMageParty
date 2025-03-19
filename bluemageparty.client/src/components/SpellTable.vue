<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">#</th>
        <th class="text-left">Icon</th>
        <th class="text-left">Name</th>
        <th class="text-left">Enemy</th>
        <th class="text-left">Location</th>
        <th class="text-left">Patch</th>
        <th class="text-left" v-if="showOwnedColumn">Owned</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="spell in spells" :key="spell.id">
        <td>No. {{ spell.number }}</td>
        <td>
          <v-img :src="spell.icon" class="spell-sprite" width="42px" />
        </td>
        <td>{{ spell.name }}</td>
        <td>
          <div v-for="source in spell.sources" :key="source.enemy">
            {{ source.enemy }}
          </div>
        </td>
        <td>
          <div v-for="source in spell.sources" :key="source.location">
            {{ source.location }}
          </div>
        </td>
        <td>{{ spell.patch }}</td>
        <td v-if="showOwnedColumn">
          <v-checkbox
            v-model="spell.owned"
            @change="() => debouncedHandleCheckboxChange(spell)"
            color="primary"
          />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import axios from "axios";
import { UPDATE_SPELL_OWNED_URL } from "@/constants/api";
import debounce from "lodash.debounce";
import { defineComponent, PropType } from "vue";

interface Source {
  enemy: string;
  location: string;
}

interface Spell {
  id: string;
  number: number;
  icon: string;
  name: string;
  sources: Source[];
  patch: string;
  owned: boolean;
}

export default defineComponent({
  props: {
    spells: {
      type: Array as PropType<Spell[]>,
      required: true,
    },
    characterId: {
      type: String,
      required: true,
    },
    showOwnedColumn: {
      type: Boolean,
      required: true,
    },
    missingSpells: {
      type: Array as PropType<Spell[]>,
      required: true,
    },
  },
  emits: ["spell-updated"],
  setup(props, { emit }) {
    const isSpellOwned = (spellId: string) => {
      return !props.missingSpells?.some((spell) => spell.id === spellId);
    };

    const handleCheckboxChange = async (spell: Spell) => {
      try {
        await axios.post(UPDATE_SPELL_OWNED_URL, {
          spellId: spell.id,
          characterId: props.characterId,
          isChecked: spell.owned,
        });

        emit("spell-updated", {
          spellId: spell.id,
          owned: spell.owned,
          characterId: props.characterId,
        });
      } catch (error) {
        console.error("Error updating spell ownership:", error);
        spell.owned = !spell.owned; // Revert the checkbox state
      }
    };

    const debouncedHandleCheckboxChange = debounce(handleCheckboxChange, 500);

    return { isSpellOwned, debouncedHandleCheckboxChange };
  },
});
</script>

<style scoped>
.spell-sprite {
  border-radius: 0.3rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.391);
}
</style>