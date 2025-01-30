<template>
  <v-container class="party-manager">
    <v-row>
      <!-- Card with Party Name Input and Create Party Button -->
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5">Create a Party</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="partyName"
              label="Enter party name"
              maxlength="255"
              counter
              outlined
              dense
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              @click="createParty"
              :disabled="!partyName"
              color="blue"
              class="w-full"
            >
              Create Party
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Loading Spinner -->
      <v-col cols="12" v-if="loading">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>

      <!-- No Parties Found Message -->
      <v-col
        cols="12"
        v-else-if="parties.length === 0"
        class="text-center grey--text"
      >
        No parties found.
      </v-col>

      <!-- Party List -->
      <v-col cols="12" v-else>
        <v-list>
          <v-list-item-group v-for="party in parties" :key="party.id">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">{{ party.name }}</v-list-item-title>
                <v-list-item-subtitle>Created On: {{ formatDate(party.createdOn) }}</v-list-item-subtitle>
                <v-list-item-subtitle>Members: {{ party.partyMembers.length }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-icon
                @click="editParty(party.id)"
                color="warning"
                small
              >
                mdi-pencil
              </v-icon>
              <v-icon
                @click="deleteParty(party.id)"
                color="red"
                small
              >
                mdi-trash-can
              </v-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
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
    const authStore = useAuthStore();
    const characterStore = useCharacterStore();

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

    const editParty = async (partyId: string) => {
      try {
        router.push("/"+partyId)
      } catch (error) {
        console.error("Error editing party:", error);
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
      editParty,
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
