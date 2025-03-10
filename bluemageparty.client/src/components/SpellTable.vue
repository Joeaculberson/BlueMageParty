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
        <!-- Only show the "Owned" column if the current user owns the character -->
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
        <!-- Only show the checkbox if the current user owns the character -->
        <td v-if="showOwnedColumn">
          <v-checkbox
            :input-value="isSpellOwned(spell.id)"
            @change="(value) => handleCheckboxChange(spell, value)"
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

export default {
  props: {
    spells: Array,
    characterId: String, // Passed from parent
    showOwnedColumn: Boolean,
    missingSpells: Array, // Pass the character's missingSpells array
  },
  emits: ["spell-updated"], // Define the custom event
  setup(props, { emit }) {
    // Determine if a spell is owned by the character
    const isSpellOwned = (spellId: string) => {
      return !props.missingSpells?.some((spell) => spell.id === spellId);
    };

    // Handle checkbox state change
    const handleCheckboxChange = async (spell: any, isChecked: boolean) => {
      console.log("handleCheckBoxChange triggered");
      try {
        await axios.post(UPDATE_SPELL_OWNED_URL, {
          spellId: spell.id,
          characterId: props.characterId,
          owned: isChecked,
        });

        emit("spell-updated", {
          spellId: spell.id,
          owned: isChecked,
          characterId: props.characterId,
        });
      } catch (error) {
        console.error("Error updating spell ownership:", error);
      }
    };

    return { isSpellOwned, handleCheckboxChange };
  },
};
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