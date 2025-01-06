<template>
    <v-container>  
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            #  <span style="visibility: hidden;">Space</span>
          </th>
          <th class="text-left">
            <!-- Empty span to keep the column in place -->
            <span style="visibility: hidden;">Icon Space</span>
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Patch
          </th>
          <th class="text-left">
            <span style="visibility: hidden;">Space</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="spell in spells" :key="spell.name">
          <td>No. {{ spell.number }}</td>
          <td><v-img :src="spell.icon" class="spell-sprite" max-width="42" max-height="42" /></td>
          <td>{{ spell.name }}</td>
          <td>{{ spell.description }}</td>
          <td>{{ spell.patch }}</td>
          <td></td>
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
  import { GET_USER_ADMIN_URL, GET_SPELLS_URL } from '@/constants/api';
  
  export default {
    name: 'SpellManager',
    setup() {
      const authStore = useAuthStore();
      const alertType = ref<'success' | 'error'>('info');
      const adminMessage = ref('');
      const isAdmin = ref(false);
      const spells = ref<any[]>([]); // Store spells here
  
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
  
      // Fetch and save spells
      const fetchAndSaveSpells = async () => {
        try {
          // First, get the list of all spells
          const response = await axios.get(GET_SPELLS_URL);
          spells.value = response.data.reverse(); // Store the spells in the spells array
  
          alertType.value = 'success';
        } catch (error) {
          alertType.value = 'error';
          console.error('Error fetching spells:', error);
        }
      };
  
      onMounted(() => {
        checkAdminStatus();
        fetchAndSaveSpells();
      });
  
      return {
        isAdmin,
        spells,
        adminMessage,
        alertType,
        fetchAndSaveSpells,
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