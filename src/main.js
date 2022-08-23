import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';     //theme
import 'primevue/resources/primevue.min.css';               //core css
import 'primeicons/primeicons.css';    
import 'bootstrap/dist/css/bootstrap.css'                       //icons

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(PrimeVue)
app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'  
