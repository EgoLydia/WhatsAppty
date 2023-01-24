import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'

import vue3GoogleLogin from 'vue3-google-login'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
    clientId: '504889361390-gsl7d4kqiauvhmkq9p35614fq0821it9.apps.googleusercontent.com'
});

app.mount('#app')
