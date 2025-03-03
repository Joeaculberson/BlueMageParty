import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import SpellManager from '../views/SpellManager.vue';
import Register from '../views/Register.vue';
import Verify from '../views/Verify.vue';
import ResendActivationEmail from '../views/ResendActivationEmail.vue';
import ResetPasswordRequest from '@/views/ResetPasswordRequest.vue';
import ResetPassword from '@/views/ResetPassword.vue';
import PartyManager from '@/views/party/Manager.vue';
import PartyDetails from '@/views/party/Details.vue';
import CharacterSearch from '../views/character/Search.vue';
import VerifyCharacter from '../views/character/Verify.vue';
import CharacterDetails from '../views/character/Details.vue';
import Admin from '../views/Admin.vue';

const routes = [
  {
    path: '/',
    component: Home,
    meta: { allowUnauthenticated: true }, // Home is accessible to unauthenticated users
  },
  {
    path: '/login',
    component: Login,
    meta: { allowUnauthenticated: true }, // Login is accessible to unauthenticated users
  },
  {
    path: '/register',
    component: Register,
    meta: { allowUnauthenticated: true }, // Register is accessible to unauthenticated users
  },
  {
    path: '/spellmanager',
    component: SpellManager,
  },
  {
    path: '/verify',
    component: Verify,
    meta: { allowUnauthenticated: true }, // Verify is accessible to unauthenticated users
  },
  {
    path: '/ResendActivationEmail',
    component: ResendActivationEmail,
    meta: { allowUnauthenticated: true }, // ResendActivationEmail is accessible to unauthenticated users
  },
  {
    path: '/ResetPasswordRequest',
    component: ResetPasswordRequest,
    meta: { allowUnauthenticated: true }, // ResetPasswordRequest is accessible to unauthenticated users
  },
  {
    path: '/ResetPassword',
    component: ResetPassword,
    meta: { allowUnauthenticated: true }, // ResetPassword is accessible to unauthenticated users
  },
  {
    path: '/character/Search',
    component: CharacterSearch,
  },
  {
    path: '/character/Verify',
    component: VerifyCharacter,
  },
  {
    path: '/character/:loadstoneCharacterId',
    component: CharacterDetails,
  },
  {
    path: '/partymanager',
    component: PartyManager,
  },
  {
    path: '/party/:partyId',
    component: PartyDetails,
    meta: { allowUnauthenticated: true }
  },
  {
    path: '/admin',
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

  console.log('isAuthenticated:', isAuthenticated, 'to.path:', to.path);

  // Allow access if the route matches a UUID pattern (e.g., "/712b0345-d04c-4d25-fd46-08dd47c1cd7b")
  const isUuidRoute = /^\/[0-9a-fA-F-]{36}$/.test(to.path);

  if (isAuthenticated && (to.path === '/login' || to.path === '/register')) {
    console.log('Redirecting authenticated user to /spellmanager');
    next('/spellmanager'); // Redirect logged-in users away from login/register
  } else if (to.path === '/admin' && !isAdmin) {
    console.log('Redirecting non-admin user to /');
    next('/'); // Restrict access to the admin route
  } else if (!isAuthenticated && !isUuidRoute && !to.meta.allowUnauthenticated) {
    console.log('Redirecting unauthenticated user to /login');
    next('/login'); // Redirect unauthenticated users unless the route is allowed
  } else {
    console.log('Allowing navigation to:', to.path);
    next(); // Proceed normally
  }
});

export default router;