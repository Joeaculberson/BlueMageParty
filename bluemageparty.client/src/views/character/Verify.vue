<template>
    <v-container class="pa-4">
        <v-row justify="center">
            <v-col cols="12" md="8" lg="6">
                <v-card class="elevation-2">
                    <v-card-title>
                        Claim Character
                    </v-card-title>

                    <v-card-text>
                        <div class="mb-4">
                            <p>
                                You are verifying your ownership of <strong>{{ character.name }}</strong> with the
                                following email:
                                <strong>{{ email }}</strong>.
                            </p>
                        </div>

                        <v-divider></v-divider>
                        <div class="character-item">
                            <div class="character-icon">
                                <img :src="character.avatar" :alt="`${character.name} icon`" />
                            </div>
                            <div class="character-details">
                                <span class="character-title">{{ character.title }}</span>
                                <span class="character-name">{{ character.name }}</span>
                                <span class="character-server">
                                    <v-icon icon="mdi-web" size="small"></v-icon>
                                    {{ character.server }}
                                </span>
                            </div>
                        </div>


                        <v-text-field label="Verification Code" v-model="verificationCode" readonly
                            outlined></v-text-field>

                        <v-card-actions class="justify-space-between">
                            <v-btn @click="copyToClipboard" color="primary" outlined>
                                <v-icon left icon="mdi-content-copy"></v-icon>
                                Copy Code
                            </v-btn>
                            <v-btn @click="verify" color="primary">
                                Verify
                            </v-btn>
                        </v-card-actions>

                        <v-card-text v-if="isLoading">
                            <v-progress-circular indeterminate color="primary"></v-progress-circular>
                        </v-card-text>
                        <v-alert v-if="verified" :type="messageType" class="mt-4" dismissible>
                            {{ message }}
                        </v-alert>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import axios from "axios";
import { GET_VERIFICATION_CODE_URL, VERIFY_CHARACTER_URL } from "@/constants/api";

export default defineComponent({
    name: "VerifyCharacter",
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();
        const email = ref(authStore.getEmail() || "");
        const verificationCode = ref("");
        const verified = ref(false);
        const character = ref({
            avatar: "",
            name: "",
            title: "",
            server: "",
        });
        const messageType = ref('info');
        const message = ref('');
        const isLoading = ref(false);

        onMounted(() => {
            const selectedCharacter = authStore.getSelectedCharacter();
            if (selectedCharacter) {
                character.value = selectedCharacter;
                fetchVerificationCode();
            } else {
                router.push("/spellmanager");
            }
        });

        const fetchVerificationCode = async () => {
            try {
                const response = await axios.get(GET_VERIFICATION_CODE_URL, {
                    params: { token: authStore.getAuthToken() },
                });
                verificationCode.value = response.data.verificationCode;
            } catch (error) {
                console.error("Error fetching verification code:", error);
            }
        };

        const copyToClipboard = () => {
            navigator.clipboard.writeText(verificationCode.value);
        };

        const verify = async () => {
            if (!isLoading.value) {
                isLoading.value = true;
                try {
                    const response = await axios.post(VERIFY_CHARACTER_URL, {
                        loadstoneVerificationCode: verificationCode.value,
                        characterName: character.value.name,
                        characterWorld: character.value.server,
                        characterTitle: character.value.title,
                        characterAvatar: character.value.avatar,
                        authToken: authStore.getAuthToken()
                    });
                    
                    if (!response.data.verified) {
                        message.value = "Character verification failed. Please confirm that the verification code is in the character's bio.";
                        messageType.value = 'error';
                        return;
                    }

                    if(response.data.alreadyVerified) {
                        messageType.value = 'success';
                        message.value = 'This character has already been verified!'
                    }
                    else if(response.data.verified) {
                        messageType.value = 'success';
                        message.value = 'Character verification successful!'
                    }
                    authStore.setVerifiedCharacter(response.data.verifiedCharacter);
                    verified.value = true;
                    console.log(response);
                } catch (error) {
                    message.value = "Character verification failed. Please confirm that the verification code is in the character's bio.";
                    messageType.value = 'error';
                    console.error("Error verifying character:", error);
                }
                isLoading.value = false;
            }

        };

        return {
            email,
            character,
            verificationCode,
            verified,
            copyToClipboard,
            verify,
            messageType,
            message,
            isLoading
        };
    },
});
</script>

<style scoped>
.d-flex {
    display: flex;
    align-items: center;
}

.mb-4 {
    margin-bottom: 1rem;
}

.justify-space-between {
    justify-content: space-between;
}

.avatar-image {
    object-fit: contain;
    width: 100%;
    height: 100%;
}

.character-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.2s;
}

.character-item:hover {
    background-color: #f0f0f0;
}


.character-icon img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
}

.character-details {
    display: flex;
    flex-direction: column;
}

.character-name {
    font-weight: bold;
    font-size: 0.9rem;
}

.character-server {
    font-size: 0.8rem;
    color: #666;
}

.character-title {
    font-size: 0.7rem;
    color: #666;
}
</style>