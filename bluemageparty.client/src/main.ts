// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Vuetify and Vuetify components
import { createVuetify } from 'vuetify';
import 'vuetify/styles';  // Import Vuetify's styles

// Create the app and use Vuetify
const app = createApp(App);

// Vuetify instance
const vuetify = createVuetify();

// Use Vuetify and the router
app.use(vuetify);
app.use(router);

app.mount('#app');
