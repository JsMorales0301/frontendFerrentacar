import { authRoute } from '@/auth/router/auth.route'
import { userRoute } from '@/user/router/user.route'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'home',
            component: () => import('@/root/views/HomeView.vue')
        },
        {
            ...authRoute
        },
        {
            ...userRoute
        }
    ]
})

export default router
