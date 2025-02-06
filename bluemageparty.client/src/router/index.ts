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
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/spellmanager',
    component: SpellManager,
  },
  {
    path: '/verify',
    component: Verify,
  },
  {
    path: '/ResendActivationEmail',
    component: ResendActivationEmail,
  },
  {
    path: '/ResetPasswordRequest',
    component: ResetPasswordRequest
  },
  {
    path: '/ResetPassword',
    component: ResetPassword
  },
  {
    path: '/character/Search',
    component: CharacterSearch
  },
  {
    path: '/character/Verify',
    component: VerifyCharacter
  },
  {
    path: '/character/:loadstoneCharacterId',
    component: CharacterDetails
  },
  {
    path: '/partymanager',
    component: PartyManager
  },
  {
    path: '/:partyId',
    component: PartyDetails
  },
  {
    path: '/admin',
    component: Admin
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;
  const isAdmin = authStore.getIsAdmin();

  // Redirect logged-in users away from login/register
  if (isAuthenticated && (to.path === '/login' || to.path === '/register')) {
    next('/spellmanager');
  } 
  // Restrict access to the admin route
  else if (to.path === '/admin' && !isAdmin) {
    next('/'); // Redirect non-admin users to home or another page
  } 
  else {
    next(); // Proceed normally
  }
});

export default router;
