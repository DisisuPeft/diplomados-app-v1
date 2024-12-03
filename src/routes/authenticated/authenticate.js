export const AuthRoutes = [
    {
        path: '/dashboard',
        component: () => import('../../pages/authviews/Dashboard.vue'),
        meta: {
            requiresAuth: true
        }
    },
    // {
    //     path: '/auth/registro',
    //     component: () => import('../../pages/auth/Register.vue')
    // },
    // {
    //     path: '/auth/login',
    //     component: () => import('../../pages/auth/Login.vue')
    // }
]