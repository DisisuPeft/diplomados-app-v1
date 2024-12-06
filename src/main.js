import { createApp } from 'vue'
import { pinia } from './store'
import { vuetify } from './plugins/vuetify'
import { router } from './routes'
import './style.css'
import App from './App.vue'
// import { setupInterceptors } from './services/api'

const app = createApp(App)

app.use(router).use(pinia).use(vuetify)

app.mount('#app')
