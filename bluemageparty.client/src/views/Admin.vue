<template>
    <v-container>
        <v-alert v-if="adminMessage" :type="alertType" dismissible>
            {{ adminMessage }}
        </v-alert>

        <v-btn @click="fetchAndSaveSpells" color="primary">
            Fetch and Save New Spells
        </v-btn>
    </v-container>
</template>

<script lang="ts">
import { ref } from 'vue';
import apiClient from '@/apiClient';
import { useAuthStore } from '@/stores/authStore';
import {
    SAVE_SPELLS_BULK_URL,
    GET_TARO_BOKOKINGWAY_MISSING_SPELLS_URL,
} from '@/constants/api';

interface Spell {
    order: number;
    name: string;
    description: string;
    tooltip: string;
    rank: string;
    patch: string;
    icon: string;
    type: { name: string };
    aspect: { name: string };
    sources: { text: string }[];
}

// Define the expected structure of the bulk save response
interface BulkResponse {
    message: string;
}

export default {
    setup() {
        const authStore = useAuthStore();
        const drawer = ref(false);
        const router = useRouter();

        const alertType = ref<'success' | 'error' | 'info'>('info');
        const adminMessage = ref('')

        // Fetch and save spells in bulk from external API
        const fetchAndSaveSpells = async (): Promise<void> => {
            try {
                // Fetch the spell data from the external API
                const response = await apiClient.get<Spell[]>(GET_TARO_BOKOKINGWAY_MISSING_SPELLS_URL);

                const spellsToSave = response.data.map((spell) => ({
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
                    sources: spell.sources.map((source) => {
                        const parts = source.text.split('/').map((part) => part.trim());
                        return {
                            enemy: parts.length > 1 ? parts[0] : '',
                            location: parts.length > 1 ? parts[1] : parts[0],
                        };
                    }),
                }));

                // Send the spells data in bulk to the server
                const bulkResponse = await apiClient.post<BulkResponse>(SAVE_SPELLS_BULK_URL, spellsToSave, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                alertType.value = 'success';
                adminMessage.value = bulkResponse.data.message;
            } catch (error) {
                alertType.value = 'error';
                adminMessage.value = 'Failed to fetch or save spells.';
                console.error('Error response:', error.response?.data || error.message);
            }
        };

        return {
            fetchAndSaveSpells,
            adminMessage,
            alertType
        };
    },
};
</script>