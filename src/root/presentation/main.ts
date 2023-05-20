import '@/root/presentation/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/root/presentation/App.vue'
import router from '@/root/presentation/router/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
