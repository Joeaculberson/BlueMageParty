// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';  // Import Pinia

// Import Vuetify and Vuetify components
import { createVuetify } from 'vuetify';
import 'vuetify/styles';  // Import Vuetify's styles
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Create the app and use Vuetify
const app = createApp(App);

// Vuetify instance
const vuetify = createVuetify({
    components,
    directives
});

app.use(createPinia());

createApp(App).use(router).use(vuetify).mount('#app');
