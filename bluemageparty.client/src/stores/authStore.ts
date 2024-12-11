import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: !!localStorage.getItem('auth_token'), // Initial check from localStorage
  }),
  actions: {
    login(token: string) {
      localStorage.setItem('auth_token', token);  // Store token in localStorage
      this.isAuthenticated = true;  // Update the state
    },
    logout() {
      localStorage.removeItem('auth_token');  // Remove token from localStorage
      this.isAuthenticated = false;  // Update the state
    },
  },
});
