import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// pacotes essenciais
import PrimeVue from 'primevue/config'
// css
import './assets/themes/dataon-dark/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(PrimeVue, { riple: true })
app.use(router)
app.mount('#app')
