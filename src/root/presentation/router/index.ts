import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            component: () => import('@/root/presentation/views/HomeView.vue')
        }
    ]
})

export default router
