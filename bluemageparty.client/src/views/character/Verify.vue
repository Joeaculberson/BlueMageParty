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
  
              <v-text-field label="Verification Code" v-model="verificationCode" readonly outlined></v-text-field>
  
              <div>
                If the information above is correct, please add the code below to your <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://na.finalfantasyxiv.com/lodestone/my/setting/profile/">Lodestone
                  profile</a>, then click Verify.
              </div>
  
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
                <v-row class="d-flex justify-center align-center">
                  <v-col cols="12" class="text-center">
                    <img src="@/assets/seifer-panic.gif" width="128" alt="Loading" />
                  </v-col>
                  <v-col cols="12" class="text-center">
                    Loading...
                  </v-col>
                </v-row>
              </v-card-text>
              <v-alert v-if="message" :type="messageType" class="mt-4" dismissible>
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
  import { useCharacterStore } from "@/stores/characterStore";
  import { useRouter } from "vue-router";
  import apiClient from '@/apiClient';
  import { GET_VERIFICATION_CODE_URL, VERIFY_CHARACTER_URL } from "@/constants/api";
  
  interface VerificationCodeResponse {
    verificationCode: string;
  }
  
  interface VerifyCharacterResponse {
    verified: boolean;
    alreadyVerified: boolean;
    verifiedCharacter: any; // Adjust the type as needed
  }
  
  export default defineComponent({
    name: "VerifyCharacter",
    setup() {
      const router = useRouter();
      const authStore = useAuthStore();
      const characterStore = useCharacterStore();
      const email = ref(authStore.getEmail() || "");
      const verificationCode = ref("");
      const verified = ref(false);
      const character = ref({
        avatar: "",
        name: "",
        title: "",
        server: "",
        id: "",
        activeClassJobIcon: "",
        activeClassJobLevel: null,
        bio: "",
        freeCompany: "",
        gender: "",
        grandCompanyName: "",
        grandCompanyRank: "",
        guardianDeityIcon: "",
        guardianDeityName: "",
        nameday: "",
        portrait: "",
        pvpTeam: "",
        race: "",
        raceClanGender: "",
        townIcon: "",
        townName: "",
        tribe: "",
      });
  
      const messageType = ref<'success' | 'error' | 'info'>('info');
      const message = ref('');
      const isLoading = ref(false);
  
      onMounted(() => {
        const selectedCharacter = characterStore.getSelectedCharacter();
        if (selectedCharacter) {
          character.value = selectedCharacter;
          fetchVerificationCode();
        } else {
          router.push("/character/search");
        }
      });
  
      const fetchVerificationCode = async () => {
        try {
          const response = await apiClient.get<VerificationCodeResponse>(GET_VERIFICATION_CODE_URL, {
            params: { token: authStore.getAuthToken() },
          });
          verificationCode.value = response.data.verificationCode; // No more error
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
            const payload = {
              LoadstoneVerificationCode: verificationCode.value,
              AuthToken: authStore.getAuthToken(),
              Character: {
                FirstName: character.value.name.split(' ')[0],
                LastName: character.value.name.split(' ')[1],
                World: character.value.server,
                Title: character.value.title,
                Avatar: character.value.avatar,
                LoadstoneCharacterId: character.value.id,
                Server: character.value.server,
                ActiveClassJobIcon: character.value.activeClassJobIcon,
                ActiveClassJobLevel: character.value.activeClassJobLevel,
                Bio: character.value.bio,
                FreeCompany: character.value.freeCompany,
                Gender: character.value.gender,
                GrandCompanyName: character.value.grandCompanyName,
                GrandCompanyRank: character.value.grandCompanyRank,
                GuardianDeityIcon: character.value.guardianDeityIcon,
                GuardianDeityName: character.value.guardianDeityName,
                Nameday: character.value.nameday,
                Portrait: character.value.portrait,
                PvpTeam: character.value.pvpTeam,
                Race: character.value.race,
                RaceClanGender: character.value.raceClanGender,
                TownIcon: character.value.townIcon,
                TownName: character.value.townName,
                Tribe: character.value.tribe,
              },
            };
            const response = await apiClient.post<VerifyCharacterResponse>(VERIFY_CHARACTER_URL, payload);
  
            if (!response.data.verified) {
              message.value = "Character verification failed. Please confirm that the verification code is in the character's bio.";
              messageType.value = 'error';
              verified.value = false;
              isLoading.value = false;
              return;
            }
  
            if (response.data.alreadyVerified) {
              messageType.value = 'success';
              message.value = 'This character has already been verified!';
            } else if (response.data.verified) {
              characterStore.addVerifiedCharacter(response.data.verifiedCharacter);
              messageType.value = 'success';
              message.value = 'Character verification successful!';
            }
  
            verified.value = true;
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
        isLoading,
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