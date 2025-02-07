import { defineStore } from "pinia";
import { useCharacterStore } from "./characterStore";
import axios from "axios";
import { GET_USER_URL } from "@/constants/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: !!localStorage.getItem("auth_token"),
    email: localStorage.getItem("auth_email") || "",
    isAdmin: localStorage.getItem("is_admin") === "true",
    userId: localStorage.getItem("user_id") || undefined
  }),
  actions: {
    login(token: string) {
      localStorage.setItem("auth_token", token);
      this.isAuthenticated = true;

      const characterStore = useCharacterStore();
      characterStore.syncVerifiedCharacters(); // Sync characters on login
    },
    logout() {
      localStorage.removeItem("auth_token");

      const characterStore = useCharacterStore();
      characterStore.clearVerifiedCharacters(); // Clear characters on logout
      characterStore.clearSelectedCharacter(); // Clear selected character on logout

      this.email = "";
      this.isAuthenticated = false;
      this.isAdmin = false;
      this.userId = '';
    },
    getAuthToken() {
      return localStorage.getItem("auth_token");
    },
    getUserId() {
      return localStorage.getItem('user_id');
    },
    setUserId(id: string) {
      this.userId = id;
      localStorage.setItem('user_id', this.userId);
    },
    setEmail(newEmail: string) {
      this.email = newEmail;
      localStorage.setItem("auth_email", this.email);
    },
    getEmail() {
      return this.email;
    },
    clearEmail() {
      localStorage.removeItem("auth_email");
      this.email = "";
    },
    getIsAdmin() {
      return localStorage.getItem("is_admin") === "true";
    },
    setIsAdmin(isAdmin: boolean) {
      localStorage.setItem("is_admin", isAdmin ? "true" : "false");
    },
  },
});
