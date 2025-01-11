<template>
    <v-container class="pa-4">
      <v-row justify="center">
        <v-col cols="12" md="6" lg="4">
          <v-card class="elevation-2">
            <v-card-title class="text-h5 font-weight-bold d-flex justify-center">
              <v-icon icon="mdi-account-check" color="primary" class="mr-2"></v-icon>
              Claim Character
            </v-card-title>
  
            <v-card-text class="bg-surface-light pt-4">
              <div class="mb-4">
                
                You are verifying your ownership of <strong>{{ character.name }}</strong> with the following email: <strong>{{ email }}</strong>
              </div>
              
              <v-divider></v-divider>
  
              <div class="character-item">
                <v-avatar size="64" class="mr-3">
                <img
                    :src="character.avatar"
                    :alt="`${character.name} icon`"
                    class="character-avatar"
                />
                </v-avatar>
                <div class="character-details">
                  <div class="character-title">{{ character.title }}</div>
                  <div class="character-name text-subtitle-1 font-weight-medium">{{ character.name }}</div>
                  <div class="character-server d-flex align-center">
                    <v-icon icon="mdi-web" size="small" class="mr-1"></v-icon>
                    {{ character.server }}
                  </div>
                </div>
              </div>
  
              <div class="my-4">
                Please add the following code to your <a href="https://na.finalfantasyxiv.com/lodestone/my/setting/profile/" target="_blank" class="text-decoration-underline font-weight-bold">Lodestone profile</a>, then click Verify.
              </div>
  
              <v-card class="elevation-1 py-2 px-3 bg-light-grey">
                <pre id="verification-code" class="mb-0 text-mono">
                    {{ verificationCode }}
                </pre>
              </v-card>
  
              <v-row class="mt-4" justify="space-between">
                <v-btn @click="copyToClipboard" color="primary" outlined>
                  <v-icon left icon="mdi-content-copy"></v-icon>
                  Copy Code
                </v-btn>
                <v-btn @click="verify" color="primary">
                  <v-icon left icon="mdi-check"></v-icon>
                  Verify
                </v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      {{ verified }}
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import { useAuthStore } from "@/stores/authStore";
  import { useRouter } from "vue-router";
  import axios from "axios";
  import {
    GET_VERIFICATION_CODE_URL,
    VERIFY_CHARACTER_URL
  } from "@/constants/api";
  
  export default defineComponent({
    name: "VerifyCharacter",
    setup() {
      const router = useRouter();
      const authStore = useAuthStore();
      const email = ref(authStore.getEmail() || '');
      const verificationCode = ref('');
      const verified = ref(false);
  
      const character = ref({
        avatar: '',
        name: '',
        title: '',
        server: '',
        bio: ''
      });
  
      onMounted(() => {
        const selectedCharacter = authStore.getSelectedCharacter();
        if (selectedCharacter) {
          character.value = selectedCharacter;
        } else {
          router.push('/spellmanager');
        }
        getLoadstoneVerificationToken();
      });
  
      const copyToClipboard = () => {
        navigator.clipboard.writeText(
          verificationCode.value
        );
      };

      const verify = async () => {
        try {

            const response = await axios.post(VERIFY_CHARACTER_URL, {
                loadstoneVerificationCode: verificationCode.value,
                characterName: character.value.name,
                characterWorld: character.value.server
            });
            verified.value = response.data.verificationCode;
        } catch(error) {
            console.log('issue verifying: ' + error);
        }
      };
  
      const getLoadstoneVerificationToken = async () => {
        try {
            const params = {token: authStore.getAuthToken()}
            const response = await axios.get(GET_VERIFICATION_CODE_URL, { params });
            verificationCode.value = response.data.verificationCode;
        } catch(error) {
            console.log('issue getting verification code: ' + error);
        }
      };
  
      return {
        character,
        email,
        copyToClipboard,
        getLoadstoneVerificationToken,
        verificationCode,
        verified,
        verify
      };
    }
  });
  </script>
  
  <style scoped>
  .character-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  
  .character-title {
    font-size: 0.8rem;
    color: #888;
  }
  
  .character-server {
    font-size: 0.9rem;
    color: #666;
  }
  
  .bg-light-grey {
    background-color: #f8f9fa;
    border-radius: 4px;
  }
  
  .text-mono {
    font-family: monospace;
    white-space: pre-wrap;
  }

  .character-avatar {
  object-fit: contain;
  width: 100%;
  height: auto; /* Keeps the aspect ratio intact */
  border-radius: 50%;
}
  </style>
  