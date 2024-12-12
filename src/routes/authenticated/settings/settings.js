export const SettingsRoutes = [
    {
        path: '/preference',
        component: () => import('../../../pages/authviews/settings/Settings.vue'),
        meta: {
            requiresAuth: true,
            roles: [1,2,3]
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
    // {
    //     path: '/unauthorized',
    //     component: () => import('../../../pages/no-access/Unauthorized.vue')
    // },
]