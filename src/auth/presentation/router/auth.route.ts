import type { RouteRecordRaw } from 'vue-router'

export const authRoute: RouteRecordRaw = {
    path: '/auth',
    component: () => import('@/auth/presentation/layout/AuthLayout.vue'),
    redirect: { name: 'login-user' },
    children: [
        {
            path: 'login',
            name: 'login-user',
            component: () => import('@/auth/presentation/views/LoginView.vue')
        }
    ]
}
