import { defineStore } from 'pinia';
import axios from 'axios';

export const useCharacterStore = defineStore('character', {
  state: () => ({
    verifiedCharacters: JSON.parse(localStorage.getItem('verified_characters') || '[]'),
    selectedCharacter: JSON.parse(localStorage.getItem('selected_character') || 'null'),
  }),
  actions: {
    async fetchVerifiedCharactersFromDB() {
      try {
        const authToken = localStorage.getItem('auth_token');
        const response = await axios.get('/api/characters', {
          params : { userId : authToken },
        });
        const characters = response.data;

        this.setVerifiedCharacters(characters);
      } catch (error) {
        console.error('Failed to fetch verified characters:', error);
      }
    },
    syncVerifiedCharacters() {
      const lastSync = parseInt(localStorage.getItem('last_verified_sync') || '0', 10);
      const now = Date.now();
      const oneHour = 60 * 60 * 1000; // 1 hour

      if (now - lastSync > oneHour) {
        this.fetchVerifiedCharactersFromDB();
        localStorage.setItem('last_verified_sync', now.toString());
      }
    },
    setVerifiedCharacters(characters: Character[]) {
      this.verifiedCharacters = characters;
      localStorage.setItem('verified_characters', JSON.stringify(characters));
    },
    addVerifiedCharacter(character: Character) {
      this.verifiedCharacters.unshift(character);
      localStorage.setItem('verified_characters', JSON.stringify(this.verifiedCharacters));
    },
    setAsActiveCharacter(character) {
      const index = this.verifiedCharacters.indexOf(character);  // Find the index of the character
      if (index !== -1) {
        this.verifiedCharacters.splice(index, 1);  // Remove the character from its current position
        this.verifiedCharacters.unshift(character);  // Add the character to the beginning of the array
      }
      this.verifiedCharacters = [...this.verifiedCharacters]
      localStorage.setItem('verified_characters', JSON.stringify(this.verifiedCharacters));
    },
    clearVerifiedCharacters() {
      this.verifiedCharacters = [];
      localStorage.removeItem('verified_characters');
    },
    getVerifiedCharacters() {
      return this.verifiedCharacters;
    },
    setSelectedCharacter(character: Character) {
      this.selectedCharacter = character;
      localStorage.setItem('selected_character', JSON.stringify(character));
    },
    getSelectedCharacter() {
      return this.selectedCharacter;
    },
    clearSelectedCharacter() {
      this.selectedCharacter = null;
      localStorage.removeItem('selected_character');
    }
  },
});
