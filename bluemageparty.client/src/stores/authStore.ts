import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: !!localStorage.getItem('auth_token'), // Initial check from localStorage
    email: localStorage.getItem("auth_email") || "",
    selectedCharacter: JSON.parse(localStorage.getItem('selected_character') || 'null') // Load from localStorage if exists
  }),
  actions: {
    login(token: string) {
      localStorage.setItem('auth_token', token);  // Store token in localStorage
      this.isAuthenticated = true;  // Update the state
    },
    logout() {
      localStorage.removeItem('auth_token'); // Remove token from localStorage
      localStorage.removeItem('selected_character'); // Remove selected character from localStorage
      this.email = '';
      this.selectedCharacter = null; // Clear the selected character in state
      this.isAuthenticated = false;  // Update the state
    },
    getAuthToken() {
      return localStorage.getItem('auth_token')
    },
    setEmail(newEmail: string) {
      this.email = newEmail;
      localStorage.setItem("auth_email", this.email);
    },
    getEmail() {
      return this.email;
    },
    clearEmail() {
      localStorage.removeItem("auth_email"); // Clear from localStorage
      this.email = "";
    },
    setSelectedCharacter(character: Character) {
      this.selectedCharacter = character;
      localStorage.setItem('selected_character', JSON.stringify(character)); // Save selected character to localStorage
    },
    getSelectedCharacter() {
      return this.selectedCharacter;
    },
    clearSelectedCharacter() {
      this.selectedCharacter = null;
      localStorage.removeItem('selected_character'); // Remove selected character from localStorage
    }
  },
});
