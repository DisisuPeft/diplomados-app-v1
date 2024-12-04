export const AdminRoutes = [
    {
        path: '/admin/usuarios',
        component: () => import('../../../pages/authviews/admin/UsuariosAdmin.vue'),
        meta: {
            requiresAuth: true,
            roles: [1]
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
    {
        path: '/unauthorized',
        component: () => import('../../../pages/no-access/Unauthorized.vue')
    },
]