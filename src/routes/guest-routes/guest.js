export const GuestRoutes = [
    {
        path: '/',
        component: () => import('../../pages/Main.vue')
    },
    {
        path: '/auth/registro',
        component: () => import('../../pages/auth/Register.vue')
    },
    {
        path: '/auth/login',
        component: () => import('../../pages/auth/Login.vue')
    },
]