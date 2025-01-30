<template>
    <v-app>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-card title="Party Manager">
              <v-form v-model="isValid">
                <v-card-text>
                  <!-- Party Name Input -->
                  <v-text-field
                    v-model="partyName"
                    label="Enter party name"
                    maxlength="255"
                    counter
                    outlined
                    dense
                    :rules="[partyNameRule]"
                    required
                  ></v-text-field>
                </v-card-text>
  
                <v-card-actions class="justify-space-between">
                  <v-btn
                    @click="createParty"
                    :disabled="!partyName"
                    color="primary"
                    class="w-full"
                  >
                    Create Party
                  </v-btn>
                </v-card-actions>
              </v-form>
  
              <!-- Loading or No Parties Found Message -->
              <v-card-text v-if="loading">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-card-text>
  
              <v-card-text
                v-else-if="parties.length === 0"
                class="text-center grey--text"
              >
                No parties found.
              </v-card-text>
  
              <!-- Party List -->
              <v-card-text v-else>
                <v-list>
                  <v-list-item-group v-for="party in parties" :key="party.id">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="text-h6">Party Name: {{ party.name }}</v-list-item-title>
                        <v-list-item-subtitle>Created On: {{ formatDate(party.createdOn) }}</v-list-item-subtitle>
                        <v-list-item-subtitle>Members: {{ party.partyMembers.length }}</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-btn @click="editParty(party.id)" color="yellow" outlined>
                        Edit Party
                      </v-btn>
                      <v-btn @click="deleteParty(party.id)" color="red" outlined>
                        Delete Party
                      </v-btn>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import axios from "axios";
  import { useRouter } from "vue-router";
  import { useAuthStore } from "@/stores/authStore";
  import { useCharacterStore } from "@/stores/characterStore";
  import {
    GET_PARTIES_BY_USER_ID_URL,
    CREATE_PARTY_URL,
    DELETE_PARTY_URL
  } from '@/constants/api';
  
  export default defineComponent({
    name: "PartyManager",
    setup() {
      const router = useRouter();
      const parties = ref<any[]>([]);
      const loading = ref(true);
      const partyName = ref("");
      const isValid = ref(false);
      const authStore = useAuthStore();
      const characterStore = useCharacterStore();
  
      const partyNameRule = [(v: string) => !!v || "Party name is required"];
  
      const getUsersParties = async () => {
        loading.value = true;
        try {
          const response = await axios.get(GET_PARTIES_BY_USER_ID_URL, {
            params: { authToken: authStore.getAuthToken() }
          });
          parties.value = response.data;
        } catch (error) {
          console.error("Error fetching parties:", error);
        } finally {
          loading.value = false;
        }
      };
  
      const createParty = async () => {
        if (!partyName.value) return;
        try {
          const response = await axios.post(CREATE_PARTY_URL, {
            authToken: authStore.getAuthToken(),
            characterId: characterStore.getVerifiedCharacters()[0].id,
            partyName: partyName.value
          });
  
          if (response.data) {
            parties.value.push(response.data);
            partyName.value = ""; // Reset input after creation
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
        partyName,
        createParty,
        deleteParty,
        formatDate,
        isValid,
        partyNameRule,
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
  