import '@/root/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/root/App.vue'
import router from '@/root/router/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
