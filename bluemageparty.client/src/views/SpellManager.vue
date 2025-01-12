<template>
    <v-container>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              #<span style="visibility: hidden;">Number Space</span>
            </th>
            <th class="text-left">
              <!-- Empty span to keep the column in place -->
              <span style="visibility: hidden;">Icon Space</span>
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Enemy
            </th>
            <th class="text-left">
              Location
            </th>
            <th class="text-left">
              Patch
            </th>
            <th class="text-left">
              Owned
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="spell in spells" :key="spell.name">
            <td>No. {{ spell.number }}</td>
            <td><v-img :src="spell.icon" class="spell-sprite" max-width="42" max-height="42" /></td>
            <td>{{ spell.name }}</td>
            <td>
                <div v-for="source in spell.sources">
                    {{ source.enemy }}
                </div>
            </td>
            <td>
                {{ spell.source }}
                <div v-for="source in spell.sources">
                    {{ source.location }}
                </div>
            </td>
            <td>{{ spell.patch }}</td>
            <td>
              <v-checkbox
                v-model="spell.owned"
                @change="handleCheckboxChange(spell)"
                color="primary"
              />
            </td>
          </tr>
        </tbody>
      </v-table>
  
      <!-- Display message if no spells are available -->
      <v-alert v-if="spells.length === 0" type="info" dismissible>
        No spells found.
      </v-alert>
  
      <v-alert v-if="adminMessage" :type="alertType" dismissible>
        {{ adminMessage }}
      </v-alert>
  
      <!-- Button to trigger Fetch and Save Spells -->
      <v-btn v-if="isAdmin" @click="fetchAndSaveSpells" color="primary">
        Fetch and Save Spells
      </v-btn>
    </v-container>
  </template>
  
  
  
  <script lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';
import { 
    GET_USER_ADMIN_URL, 
    GET_SPELLS_URL, 
    SAVE_SPELLS_BULK_URL, 
    UPDATE_SPELL_OWNED_URL,
    GET_TARO_BOKOKINGWAY_MISSING_SPELLS_URL 
} from '@/constants/api';

interface Spell {
    id: string,
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
}

export default {
  name: 'SpellManager',
  setup() {
    const authStore = useAuthStore();
    const alertType = ref<'success' | 'error'>('info');
    const adminMessage = ref('');
    const isAdmin = ref(false);
    const spells = ref<Spell[]>([]); // Store spells here

    // Check if the user is an admin
    const checkAdminStatus = async () => {
      try {
        const response = await axios.get(GET_USER_ADMIN_URL + authStore.getAuthToken());
        isAdmin.value = response.data;
      } catch (error) {
        console.error('Error checking admin status:', error);
        isAdmin.value = false;
      }
    };

    // Fetch the list of spells
    const getSpells = async () => {
      console.log(authStore.getVerifiedCharacter().id)
      try {
        const response = await axios.get(GET_SPELLS_URL + authStore.getVerifiedCharacter().id);
        spells.value = response.data.reverse().map((spell: any) => ({
          ...spell,
          checked: false, // Initialize checkbox state as false
        }));
        alertType.value = 'success';
      } catch (error) {
        alertType.value = 'error';
        console.error('Error fetching spells:', error);
      }
    };

    // Handle checkbox change (trigger POST API call)
    const handleCheckboxChange = async (spell: Spell) => {
      try {
          // Make POST request when checked
          console.log(authStore.getVerifiedCharacter().id)
          const response = await axios.post(UPDATE_SPELL_OWNED_URL, { 
            spellId: spell.id, 
            characterId: authStore.getVerifiedCharacter().id, 
            isChecked: spell.owned });
          adminMessage.value = `Spell ${spell.name} saved successfully!`;
          alertType.value = 'success';
      } catch (error) {
        console.error('Error saving spell:', error);
        adminMessage.value = `Failed to save spell ${spell.name}.`;
        alertType.value = 'error';
      }
    };

     // Fetch and save spells in bulk from external API
     const fetchAndSaveSpells = async (): Promise<void> => {
      try {
        // Fetch the spell data from the external API
        const response = await axios.get(GET_TARO_BOKOKINGWAY_MISSING_SPELLS_URL);

        const spellsToSave = response.data.map((spell: any) => ({
            number: spell.order,
            name: spell.name,
            description: spell.description,
            tooltip: spell.tooltip,
            order: spell.order,
            rank: spell.rank,
            patch: spell.patch,
            icon: spell.icon,
            typeName: spell.type.name,
            aspectName: spell.aspect.name,
            sources: spell.sources.map((source: any) => {
                // Split the source text by '/' and trim the parts
                const parts = source.text.split('/').map((part: string) => part.trim());
                let enemy = '';
                let location = '';

                // If there is only one part, assign it to location
                if (parts.length === 1) {
                location = parts[0];
                } else {
                enemy = parts[0];
                location = parts[1];
                }

                return { enemy, location };
            }),
        }));

        // Send the spells data in bulk to the server
        const bulkResponse = await axios.post(SAVE_SPELLS_BULK_URL, spellsToSave, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        alertType.value = 'success';
        adminMessage.value = bulkResponse.data.message;
        getSpells();
      } catch (error) {
        alertType.value = 'error';
        adminMessage.value = 'Failed to fetch or save spells.';
        console.error('Error response:', error.response?.data || error.message);
      }
    };

    onMounted(() => {
      checkAdminStatus();
      getSpells();
    });

    return {
      isAdmin,
      spells,
      adminMessage,
      alertType,
      getSpells,
      handleCheckboxChange,
      fetchAndSaveSpells
    };
  },
};
</script>

  
  <style scoped>
  tbody tr:nth-of-type(odd) {
   background-color: rgba(0, 0, 0, 0.391);
 }

 .spell-sprite {
        border-radius: 0.3rem;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
  </style>