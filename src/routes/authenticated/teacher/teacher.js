export const TeacherRoutes = [
    {
        path: '/teacher',
        component: () => import('../../../pages/authviews/teachers/TeachersPage.vue'),
        meta: {
            requiresAuth: true,
            roles: [1,2]
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