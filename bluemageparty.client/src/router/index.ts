import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SpellManager from "../views/SpellManager.vue";
import Register from "../views/Register.vue";
import Verify from "../views/Verify.vue";
import ResendActivationEmail from "../views/ResendActivationEmail.vue";
import ResetPasswordRequest from "@/views/ResetPasswordRequest.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import PartyManager from "@/views/party/Manager.vue";
import PartyDetails from "@/views/party/Details.vue";
import CharacterSearch from "../views/character/Search.vue";
import VerifyCharacter from "../views/character/Verify.vue";
import CharacterDetails from "../views/character/Details.vue";
import Admin from "../views/Admin.vue";
import DiscordCallback from '@/views/DiscordCallback.vue';

const routes = [
  {
    path: "/",
    component: Home,
    meta: { allowUnauthenticated: true }, // Home is accessible to unauthenticated users
  },
  {
    path: '/auth/discord/callback',
    component: DiscordCallback,
  },
  {
    path: "/login",
    component: Login,
    meta: { allowUnauthenticated: true }, // Login is accessible to unauthenticated users
  },
  {
    path: "/register",
    component: Register,
    meta: { allowUnauthenticated: true }, // Register is accessible to unauthenticated users
  },
  {
    path: "/spellmanager",
    component: SpellManager,
  },
  {
    path: "/verify",
    component: Verify,
    meta: { allowUnauthenticated: true }, // Verify is accessible to unauthenticated users
  },
  {
    path: "/ResendActivationEmail",
    component: ResendActivationEmail,
    meta: { allowUnauthenticated: true }, // ResendActivationEmail is accessible to unauthenticated users
  },
  {
    path: "/ResetPasswordRequest",
    component: ResetPasswordRequest,
    meta: { allowUnauthenticated: true }, // ResetPasswordRequest is accessible to unauthenticated users
  },
  {
    path: "/ResetPassword",
    component: ResetPassword,
    meta: { allowUnauthenticated: true }, // ResetPassword is accessible to unauthenticated users
  },
  {
    path: "/character/Search",
    component: CharacterSearch,
  },
  {
    path: "/character/Verify",
    component: VerifyCharacter,
  },
  {
    path: "/character/:loadstoneCharacterId",
    component: CharacterDetails,
  },
  {
    path: "/partymanager",
    component: PartyManager,
  },
  {
    path: "/party/:partyId",
    component: PartyDetails,
    meta: { allowUnauthenticated: true },
  },
  {
    path: "/admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;
  const isAdmin = authStore.getIsAdmin();

  // Allow access if the route matches a UUID pattern (e.g., "/712b0345-d04c-4d25-fd46-08dd47c1cd7b")
  const isUuidRoute = /^\/[0-9a-fA-F-]{36}$/.test(to.path);

  // Store the original URL only for /party/:partyId routes when the user is not authenticated
  if (
    !isAuthenticated && // User is not authenticated
    to.path.startsWith("/party/") // Only for /party/:partyId routes
  ) {
    console.log("Storing redirect URL:", to.fullPath); // Debug log
    localStorage.setItem("redirectUrl", to.fullPath); // Store the full URL (including query params)
  }

  // Redirect logic
  if (isAuthenticated && (to.path === "/login" || to.path === "/register")) {
    next("/character/search"); // Redirect logged-in users away from login/register
  } else if (to.path === "/admin" && !isAdmin) {
    next("/character/search"); // Restrict access to the admin route
  } else if (
    !isAuthenticated &&
    !isUuidRoute &&
    !to.meta.allowUnauthenticated &&
    !to.path.startsWith("/party/") &&
    to.path !== '/auth/discord/callback'
  ) {
    next("/login"); // Redirect unauthenticated users unless the route is allowed
  } else {
    next(); // Proceed normally
  }
});

export default router;
