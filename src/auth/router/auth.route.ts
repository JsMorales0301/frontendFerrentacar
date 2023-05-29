import type { RouteRecordRaw } from 'vue-router'

export const authRoute: RouteRecordRaw = {
    path: '/auth',
    component: () => import('@/auth/layout/AuthLayout.vue'),
    redirect: { name: 'login-user' },
    children: [
        {
            path: 'login',
            name: 'login-user',
            component: () => import('@/auth/views/LoginView.vue')
        },
        {
            path: 'register',
            name: 'register-user',
            component: () => import('@/auth/views/RegisterView.vue')
        },
        {
            path: 'forgot/password',
            name: 'forgot-password',
            component: () => import('@/auth/views/ForgotPassword.vue')
        }
    ]
}
