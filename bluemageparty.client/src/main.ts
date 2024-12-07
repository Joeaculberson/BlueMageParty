import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue';
import { router } from './helpers';

const vuetify = createVuetify({
    components,
    directives,
})

// setup fake backend
import { fakeBackend } from './helpers';
fakeBackend();

const app: ReturnType<typeof createApp> = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify).mount('#app');

