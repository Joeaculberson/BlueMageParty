import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: !!localStorage.getItem('auth_token'), // Initial check from localStorage
    email: ''
  }),
  actions: {
    login(token: string) {
      localStorage.setItem('auth_token', token);  // Store token in localStorage
      this.isAuthenticated = true;  // Update the state
    },
    logout() {
      localStorage.removeItem('auth_token'); // Remove token from localStorage
      this.email = '';
      this.isAuthenticated = false;  // Update the state
    },
    getAuthToken() {
      return localStorage.getItem('auth_token')
    },
    setEmail(newEmail: string) {
      this.email = newEmail;
    },
    getEmail() {
      return this.email;
    },
    clearEmail() {
      this.email = '';
    }
  },
});
