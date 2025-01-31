<template>
    <div class="party-details">
        <div v-if="!loading">
            <SpellComparison :party="party" />
        </div>
        <div v-else class="text-gray-600">
            <v-card-text>
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-card-text>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import SpellComparison from "@/components/SpellComparison.vue";
import { GET_PARTY_DETAILS_URL } from '@/constants/api';

export default defineComponent({
    name: "PartyDetails",
    components: {
        SpellComparison
    },
    setup() {
        const route = useRoute();
        const party = ref({});
        const loading = ref(true);
        const authStore = useAuthStore();

        const getPartyDetails = async () => {
            loading.value = true;
            try {
                const response = await axios.get(GET_PARTY_DETAILS_URL, {
                    params: { partyId: route.params.partyId }
                });

                if (response.data) {
                    party.value = response.data; // Directly assign the response data
                } else {
                    console.log("Error fetching party data.");
                }
            } catch (error) {
                console.error("Error fetching party data:", error);
            }
            loading.value = false;
        };

        onMounted(() => {
            getPartyDetails();
        });

        return {
            party,
            loading,
            route
        };
    },
});
</script>
<style>
.character-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 8px;
}
</style>
