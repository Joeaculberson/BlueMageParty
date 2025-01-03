<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card title="Dashboard">
            <v-expansion-panels>
              <v-expansion-panel
                title="Title"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
              >
              </v-expansion-panel>
            </v-expansion-panels>
            <v-card-text>
              <!-- Button to fetch and save spells -->
              <v-btn v-if="isAdmin" @click="fetchAndSaveSpells" color="primary">Fetch and Save Spells</v-btn>
              <!-- Alert for success or error messages -->
              <v-alert v-if="adminMessage" :type="alertType" dismissible>
                {{ adminMessage }}
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { GET_USER_ADMIN_URL, SAVE_SPELLS_BULK_URL } from '@/constants/api';
import { useAuthStore } from '@/stores/authStore';

interface Spell {
  name: string;
  description: string;
  tooltip: string;
  order: number;
  rank: number;
  patch: string;
  owned: string;
  icon: string;
  type: { id: number; name: string };
  aspect: { id: number; name: string };
  sources: { type: string; text: string; related_type: string | null; related_id: string | null }[];
}

export default {
  name: 'Dashboard',
  setup() {
    const alertType = ref<'success' | 'error' | 'info'>('info');
    const adminMessage = ref<string>('');
    const isAdmin = ref<boolean>(false);
    const authStore = useAuthStore();

    const setIsAdmin = async () => {
      try {
        const response = await axios.get(GET_USER_ADMIN_URL + authStore.getAuthToken());
        console.log('Admin check response:', response);
        isAdmin.value = response.data;
      } catch (error) {
        alertType.value = 'error';
        adminMessage.value = 'Failed to check admin status.';
        console.error('Error checking admin status:', error);
      }
    };

    onMounted(() => {
      setIsAdmin();
    });

    const fetchAndSaveSpells = async (): Promise<void> => {
      try {
        const response = await axios.get<Spell[]>(
          'https://ffxivcollect.com/api/characters/43958939/spells/missing'
        );

        const spells = response.data;

        // Prepare the spells data for saving
        const spellsToSave = spells.map(spell => ({
          Number: spell.order,
          Name: spell.name,
          Description: spell.description,
          Tooltip: spell.tooltip,
          Order: spell.order,
          Rank: spell.rank,
          Patch: spell.patch,
          Owned: spell.owned,
          Icon: spell.icon,
          TypeName: spell.type.name,
          AspectName: spell.aspect.name,
        }));

        // Send the spells data in bulk to the server
        await saveSpellsInBulk(spellsToSave);
      } catch (error) {
        alertType.value = 'error';
        adminMessage.value = 'Failed to fetch or save spells.';
        console.error('Error fetching or saving spells:', error);
      }
    };

    const saveSpellsInBulk = async (spells: {
      Number: number;
      Name: string;
      Description: string;
      Tooltip: string;
      Order: number;
      Rank: number;
      Patch: string;
      Owned: string;
      Icon: string;
      TypeName: string;
      AspectName: string;
    }[]): Promise<void> => {
      try {
        const response = await axios.post(SAVE_SPELLS_BULK_URL, spells);

        alertType.value = 'success';
        adminMessage.value = response.data.message;
        console.log('Spells saved successfully:', response.data.message);
      } catch (error) {
        alertType.value = 'error';
        adminMessage.value = 'Error saving spells in bulk.';
        console.error('Error saving spells in bulk:', error);
      }
    };

    return {
      alertType,
      adminMessage,
      fetchAndSaveSpells,
      isAdmin,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
