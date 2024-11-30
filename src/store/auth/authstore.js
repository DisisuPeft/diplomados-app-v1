import { defineStore } from "pinia";
import { register, login, checkUser, logout, getUser, verfiyAuth } from "../../services/auth";

export const useAuthStore = defineStore('authentication', {
    state: () => ({
        isAuth: false,
        user: null,
        isLoading: false,
    }),
    getters: {

    },
    actions: {
        async registrarse(credentials) {
            try {
                const res = await register(credentials)
                return res
            } catch (error) {
                return error       
            }
        },
        async login(credentials){
            try {
                const res = await api.post('auth/login/', credentials)
                if(res.status === 200 || 201){
                    return res.data
                }
            } catch (error) {
                const e = error.response ? error.response.data : "Error al solicitar la información al servidor"
                throw e        
            }
        },
        async checkUsuario(){
            try {
                const response = await checkUser()
                return response
            } catch (error) {
                return error
            }
        }
    }
})