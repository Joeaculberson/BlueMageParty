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
import Parties from '@/views/Parties.vue';
import CharacterSearch from '../views/character/Search.vue';
import VerifyCharacter from '../views/character/Verify.vue';
import CharacterDetails from '../views/character/Details.vue';

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
    path: '/Parties',
    component: Parties
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
    path: '/:pathMatch(.*)*',
    redirect: '/spellmanager',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = useAuthStore().isAuthenticated;

  // If the user is logged in and tries to access login or register, redirect to dashboard
  if (isAuthenticated && (to.path === '/login' || to.path === '/register')) {
    next('/spellmanager'); // Redirect if logged in
  } else {
    next(); // Proceed to the requested route if not logged in or accessing other routes
  }
});

export default router;
