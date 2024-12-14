import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Register from '../views/Register.vue';
import Verify from '../views/Verify.vue';
import ResendActivationEmail from '../views/ResendActivationEmail.vue';
import ResetPasswordRequest from '@/views/ResetPasswordRequest.vue';

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
    path: '/dashboard',
    component: Dashboard,
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
    next('/dashboard'); // Redirect to dashboard if logged in
  } else {
    next(); // Proceed to the requested route if not logged in or accessing other routes
  }
});

export default router;
