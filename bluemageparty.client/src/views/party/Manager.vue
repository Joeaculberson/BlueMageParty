<template>
  <v-container class="party-manager">
    <v-row>
      <!-- Card with Party Name Input and Create Party Button -->
      <v-col cols="12">
        <v-alert v-if="characterStore.getVerifiedCharacters().length == 0" type="info" dismissible border="start">
          Please select a character before creating a party.
        </v-alert>
        <v-card>
          <v-card-title class="text-h5">Create a Party</v-card-title>
          <v-card-text>
            <v-text-field v-model="partyName" label="Enter party name"
              :disabled="characterStore.getVerifiedCharacters().length == 0" maxlength="255" counter outlined
              dense></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="createParty" :disabled="!partyName" color="blue" class="w-full">
              Create Party
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Loading Spinner -->
      <v-col cols="12" v-if="loading">
        <v-card-text class="d-flex justify-center align-center" style="height: 100%;">
          Loading...
          <img src="@/assets/seifer-panic.gif" alt="Loading" />
        </v-card-text>
      </v-col>

      <!-- No Parties Found Message -->
      <v-col cols="12" v-else-if="hostedParties.length === 0 && guestOfParties.length === 0"
        class="text-center grey--text">
        No parties found.
      </v-col>

      <!-- Party List -->
      <v-col cols="12" v-else>
        Owned Parties
        <v-list>
          <v-list-item v-for="party in hostedParties" :key="party.id">
            <template v-slot:prepend>
              <v-list-item-title class="text-h6">{{ party.name }}</v-list-item-title>
              <v-list-item-subtitle>Created On: {{ formatDate(party.createdOn) }} | Members: {{
                party.partyMembers.length }}</v-list-item-subtitle>
            </template>
            <template v-slot:append>
              <v-icon @click="editParty(party.id)" color="warning" small>
                mdi-pencil
              </v-icon>
              <v-icon @click="deleteParty(party.id)" color="red" small>
                mdi-trash-can
              </v-icon>
            </template>
          </v-list-item>
        </v-list>
        <v-list v-if="guestOfParties.length > 0">
          Guest Parties
          <v-list-item v-for="party in guestOfParties" :key="party.id">
            <template v-slot:prepend>
              <v-list-item-title class="text-h6">{{ party.name }}</v-list-item-title>
              <v-list-item-subtitle>Created On: {{ formatDate(party.createdOn) }} | Members: {{
                party.partyMembers.length }}</v-list-item-subtitle>
            </template>
            <template v-slot:append>
              <v-icon @click="editParty(party.id)" color="warning" small>
                mdi-pencil
              </v-icon>
            </template>
          </v-list-item>
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
    const hostedParties = ref<any[]>([]);
    const guestOfParties = ref<any[]>([]);
    const loading = ref(true);
    const partyName = ref("");
    const authStore = useAuthStore();
    const characterStore = useCharacterStore();
    const message = ref("");

    const getUsersParties = async () => {
      loading.value = true;
      try {
        const response = await axios.get(GET_PARTIES_BY_USER_ID_URL, {
          params: { authToken: authStore.getAuthToken() }
        });

        hostedParties.value = response.data.hostedParties;
        guestOfParties.value = response.data.guestOfParties;
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
          hostedParties.value.push(response.data);
          partyName.value = ""; // Reset input after creation
          router.push('/party/' + response.data.id)
        }
      } catch (error) {
        console.error("Error creating party:", error);
      }
    };

    const editParty = async (partyId: string) => {
      try {
        router.push("/party/" + partyId)
      } catch (error) {
        console.error("Error editing party:", error);
      }
    };

    const deleteParty = async (partyId: string) => {
      try {
        await axios.delete(DELETE_PARTY_URL, { params: { partyId } });
        hostedParties.value = hostedParties.value.filter((p) => p.id !== partyId);
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
      hostedParties,
      guestOfParties,
      loading,
      partyName,
      createParty,
      editParty,
      deleteParty,
      formatDate,
      message,
      characterStore
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
