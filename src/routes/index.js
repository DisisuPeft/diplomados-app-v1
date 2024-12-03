import { createRouter, createWebHistory } from "vue-router";
import { GuestRoutes } from "./guest-routes/guest";
import { useAuthStore } from "../store/auth/authstore";
import { AuthRoutes } from "./authenticated/authenticate";
// aqui importar tienda mas adelante

const routes = [
    ...GuestRoutes,
    ...AuthRoutes
] //aqui anadir las rutas mas adelante

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        const authStore = useAuthStore()
        const auth = authStore.isAuth
        if (auth){
            next();
        }else{
            next('/')
        }
    }else {
        next()
    }
})