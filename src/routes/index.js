import { createRouter, createWebHistory } from "vue-router";
import { GuestRoutes } from "./guest-routes/guest";
import { useAuthStore } from "../store/auth/authstore";
import { AuthRoutes } from "./authenticated/authenticate";
import { AdminRoutes } from "./authenticated/Admin/adminRoutes";
import { ProfileRoutes } from "./authenticated/profile/Profile";
import { TeacherRoutes } from "./authenticated/teacher/teacher";
import { CoursesRoutes } from "./authenticated/courses/courses";
import { SettingsRoutes } from "./authenticated/settings/settings";
// aqui importar tienda mas adelante

const routes = [
    ...GuestRoutes,
    ...AuthRoutes,
    ...AdminRoutes,
    ...ProfileRoutes,
    ...TeacherRoutes,
    ...CoursesRoutes,
    ...SettingsRoutes
] //aqui anadir las rutas mas adelante

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiresAuth){            
        if (!authStore.isAuth){
            return next('/')
        }
        if(to.meta.roles){
            // console.log(authStore)
            const userRole = authStore.getRole
            if(!to.meta.roles.includes(userRole)){
                return next('/unauthorized')
            }
        }
        return next()
    }else {
        next()
    }
})