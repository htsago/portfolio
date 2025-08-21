import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import Particles from "@tsparticles/vue3";
import { loadSlim } from "tsparticles-slim";

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(Particles, {
  init: async engine => {
    await loadSlim(engine);
  },
});

app.mount('#app')
