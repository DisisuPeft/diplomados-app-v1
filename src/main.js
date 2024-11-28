import { createApp } from 'vue'
import { pinia } from './store'
import { router } from './routes'
import './style.css'
import App from './App.vue'

createApp(App).use(router).use(pinia).mount('#app')
