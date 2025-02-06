import { defineStore } from 'pinia';
import { useCharacterStore } from './characterStore';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: !!localStorage.getItem('auth_token'),
    email: localStorage.getItem('auth_email') || '',
    isAdmin: localStorage.getItem('is_admin') === 'true'
  }),
  actions: {
    login(token: string) {
      localStorage.setItem('auth_token', token);
      this.isAuthenticated = true;

      const characterStore = useCharacterStore();
      characterStore.syncVerifiedCharacters(); // Sync characters on login
    },
    logout() {
      localStorage.removeItem('auth_token');
      
      const characterStore = useCharacterStore();
      characterStore.clearVerifiedCharacters(); // Clear characters on logout
      characterStore.clearSelectedCharacter(); // Clear selected character on logout

      this.email = '';
      this.isAuthenticated = false;
      this.isAdmin = false;
    },
    setEmail(newEmail: string) {
      this.email = newEmail;
      localStorage.setItem('auth_email', this.email);
    },
    getEmail() {
      return this.email;
    },
    clearEmail() {
      localStorage.removeItem('auth_email');
      this.email = '';
    },
    getIsAdmin() {
      return localStorage.getItem('is_admin') === 'true';
    },
    setIsAdmin(isAdmin: boolean) {

      localStorage.setItem('is_admin', isAdmin ? 'true' : 'false');
    }
  },
});
