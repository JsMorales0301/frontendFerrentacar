import { authRoute } from '@/auth/presentation/router/auth.route'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'home',
            component: () => import('@/root/presentation/views/HomeView.vue')
        },
        {
            ...authRoute
        }
    ]
})

export default router
