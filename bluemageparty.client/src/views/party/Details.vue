<template>
    <div class="party-details">
        <h2 class="text-2xl font-bold mb-4">Party Details</h2>
        <div v-if="loading" class="text-gray-600">
            <v-card-text v-if="isLoading">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-card-text>
        </div>
        <div v-else>
            <ul class="space-y-4">
                <li v-for="member in party.partyMembers" :key="member.id" class="border p-4 rounded shadow-md">
                    <h3 class="text-lg font-semibold">Member ID: {{ member.id }}</h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore"; // Assuming auth token is stored here
import {
    GET_PARTY_URL
} from '@/constants/api';

export default defineComponent({
    name: "PartyDetails",
    setup() {
        const router = useRouter();
        const route = useRoute();
        const party = ref({});
        const loading = ref(false);
        const authStore = useAuthStore(); // Assuming a store that holds the auth token

        const getPartyDetails = async () => {
            loading.value = true;
            try {
                const response = await axios.get(GET_PARTY_URL, {
                    params: { partyId: route.params.partyId }
                });

                if (response.data) {
                    Object.assign(party, response.data); // Updates party data
                } else {
                    console.log("Error fetching party data.");
                }
            } catch (error) {
                console.error("Error fetching party data:", error);
            }
            loading.value = false;
        };

        const formatDate = (dateString: string) => {
            return new Date(dateString).toLocaleDateString();
        };

        onMounted(() => {
            getPartyDetails();
        });

        return {
            party,
            loading,
            formatDate,
        };
    },
});
</script>