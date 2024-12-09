export const ProfileRoutes = [
    {
        path: '/university/:user/:id',
        component: () => import('../../../pages/authviews/profile/Edit.vue'),
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
]