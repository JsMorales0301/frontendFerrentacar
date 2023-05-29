import type { RouteRecordRaw } from 'vue-router'

export const userRoute: RouteRecordRaw = {
    path: '/user',
    name: 'user',
    redirect: 'user-info',
    component: () => import('@/user/layout/UserLayout.vue'),
    children: [
        {
            path: 'info',
            name: 'user-info',
            component: () => import('@/user/views/ProfileUser.vue')
        }
    ]
}
