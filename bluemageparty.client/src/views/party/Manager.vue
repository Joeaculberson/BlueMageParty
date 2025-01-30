<template>
    <div class="party-manager">
      <h2 class="text-2xl font-bold mb-4">Party Manager</h2>
      
      <button @click="createParty" class="bg-blue-500 text-blue px-4 py-2 rounded mb-4">Create Party</button>
  
      <div v-if="loading" class="text-gray-600">Loading...</div>
  
      <div v-else-if="parties.length === 0" class="text-gray-600">No parties found.</div>
  
      <div v-else>
        <ul class="space-y-4">
          <li v-for="party in parties" :key="party.id" class="border p-4 rounded shadow-md">
            <h3 class="text-lg font-semibold">Party ID: {{ party.id }}</h3>
            <p>Created On: {{ formatDate(party.createdOn) }}</p>
            <p>Members: {{ party.partyMembers.length }}</p>
  
            <button @click="deleteParty(party.id)" class="bg-red-500 text-white px-3 py-1 mt-2 rounded">Delete Party</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import axios from "axios";
  import { useAuthStore } from "@/stores/authStore"; // Assuming auth token is stored here
  import {
    GET_PARTIES_BY_USER_ID_URL,
    CREATE_PARTY_URL,
    DELETE_PARTY_URL
  } from '@/constants/api';
  
  export default defineComponent({
    name: "PartyManager",
    setup() {
      const parties = ref<any[]>([]);
      const loading = ref(true);
      const authStore = useAuthStore(); // Assuming a store that holds the auth token
  
      const getUsersParties = async () => {
        loading.value = true;
        try {
          const response = await axios.get(GET_PARTIES_BY_USER_ID_URL, {
            params: { authToken: authStore.getAuthToken() },
          });
          parties.value = response.data;
        } catch (error) {
          console.error("Error fetching parties:", error);
        } finally {
          loading.value = false;
        }
      };
  
      const createParty = async () => {
        try {
          const response = await axios.post(CREATE_PARTY_URL, { authToken: authStore.getAuthToken() });
          if (response.data) {
            parties.value.push(response.data);
          }
        } catch (error) {
          console.error("Error creating party:", error);
        }
      };
  
      const deleteParty = async (partyId: string) => {
        try {
          await axios.delete(DELETE_PARTY_URL, { params: { partyId } });
          parties.value = parties.value.filter((p) => p.id !== partyId);
        } catch (error) {
          console.error("Error deleting party:", error);
        }
      };
  
      const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString();
      };
  
      onMounted(() => {
        getUsersParties();
      });
  
      return {
        parties,
        loading,
        createParty,
        deleteParty,
        formatDate,
      };
    },
  });
  </script>
  
  <style scoped>
  .party-manager {
    max-width: 600px;
    margin: auto;
  }
  </style>
  