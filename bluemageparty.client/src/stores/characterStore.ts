import { defineStore } from "pinia";
import axios from "axios";
import { GET_CHARACTERS_URL, SET_DEFAULT_CHARACTER_URL, REMOVE_CHARACTER_URL } from "@/constants/api";

export const useCharacterStore = defineStore("character", {
  state: () => ({
    verifiedCharacters: JSON.parse(
      localStorage.getItem("verified_characters") || "[]"
    ),
    selectedCharacter: JSON.parse(
      localStorage.getItem("selected_character") || "null"
    ),
  }),
  actions: {
    async fetchVerifiedCharactersFromDB() {
      try {
        const authToken = localStorage.getItem("auth_token");
        const response = await axios.get(GET_CHARACTERS_URL, {
          params: { authToken: authToken },
        });
        const characters = response.data;
        this.verifiedCharacters = characters;
        this.setVerifiedCharacters();
      } catch (error) {
        console.error("Failed to fetch verified characters:", error);
      }
    },
    async setAsDefault(character) {
      try {
        const response = await axios.post(SET_DEFAULT_CHARACTER_URL, {
          characterId: character.id,
        });
        return response;
      } catch (error) {
        console.error("Failed to fetch verified characters:", error);
      }
    },
    async removeCharacterFromDB(character) {
      try {
        // Use the character ID in the URL path
        const response = await axios.delete(`${REMOVE_CHARACTER_URL}/${character.id}`);
        console.log("Character removed from database");
      } catch (error) {
        console.error("Failed to remove character from database:", error);
      }
    },
    syncVerifiedCharacters() {
      this.fetchVerifiedCharactersFromDB();
    },
    setVerifiedCharacters() {
      this.verifiedCharacters = [
          this.verifiedCharacters[0], // Keep the 0th element as is
          ...this.verifiedCharacters.slice(1).sort((a, b) => a.firstName.localeCompare(b.firstName))
      ];
      localStorage.setItem("verified_characters", JSON.stringify(this.verifiedCharacters));
    },    
    addVerifiedCharacter(character: Character) {
      this.verifiedCharacters.unshift(character);
      this.setVerifiedCharacters()
    },
    setAsActiveCharacter(character) {
      character.default = true;
      const index = this.verifiedCharacters.indexOf(character); // Find the index of the character
      if (index !== -1) {
        this.verifiedCharacters.splice(index, 1); // Remove the character from its current position
        this.verifiedCharacters.unshift(character); // Add the character to the beginning of the array
      }
      this.verifiedCharacters = [...this.verifiedCharacters];

      this.setAsDefault(character);
      this.setVerifiedCharacters();
      localStorage.setItem("verified_characters", JSON.stringify(this.verifiedCharacters));
    },
    removeVerifiedCharacter(character) {
      const index = this.verifiedCharacters.findIndex(
        (verifiedCharacter) => verifiedCharacter.id === character.id
      );
      if (index !== -1) {
        this.verifiedCharacters.splice(index, 1); // Remove the character from the list
        this.removeCharacterFromDB(character);
        this.setVerifiedCharacters(); // Update local storage
      }
    },
    clearVerifiedCharacters() {
      this.verifiedCharacters = [];
      localStorage.removeItem("verified_characters");
    },
    getVerifiedCharacters() {
      return this.verifiedCharacters;
    },
    setSelectedCharacter(character: Character) {
      this.selectedCharacter = character;
      localStorage.setItem("selected_character", JSON.stringify(character));
    },
    getSelectedCharacter() {
      return this.selectedCharacter;
    },
    clearSelectedCharacter() {
      this.selectedCharacter = null;
      localStorage.removeItem("selected_character");
    },
  },
});
