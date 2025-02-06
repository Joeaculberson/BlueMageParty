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
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';
import {
  SAVE_SPELLS_BULK_URL,
  GET_TARO_BOKOKINGWAY_MISSING_SPELLS_URL,
} from '@/constants/api';

export default {
    setup() {
        const authStore = useAuthStore();
        const drawer = ref(false);
        const router = useRouter();
        const alertType = ref('');
        const adminMessage = ref('')

        // Fetch and save spells in bulk from external API
        const fetchAndSaveSpells = async (): Promise<void> => {
            try {
                // Fetch the spell data from the external API
                const response = await axios.get(
                    GET_TARO_BOKOKINGWAY_MISSING_SPELLS_URL
                );

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
                        const parts = source.text.split('/').map((part: string) =>
                            part.trim()
                        );
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