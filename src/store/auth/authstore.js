import { defineStore } from "pinia";
import { register, login, checkUser, logout, getUser, verfiyAuth } from "../../services/auth";

export const useAuthStore = defineStore('authentication', {
    state: () => ({
        isAuth: localStorage.getItem("auth") === "true",
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")):null,
        isLoading: false,
    }),
    getters: {
        getPerfil(state){
            return state.user 
        }
    },
    actions: {
        async registrarse(credentials) {
            try {
                const res = await register(credentials)
                return res
            } catch (error) {
                throw error      
            }
        },
        async login(credentials){
            try {
                const res = await login(credentials)
                await this.checkUsuario()
                if(res.status === 200 || 201){
                    return res.data
                }
            } catch (error) {
                // const e = error.response ? error.response.data : "Error al solicitar la información al servidor"
                throw error        
            }
        },
        async checkUsuario(){
            try {
                const response = await checkUser()
                this.isAuth = response.isauth
                localStorage.setItem("auth", this.isAuth)
            } catch (error) {
                throw error
            }
        },
        async getUsuario(){
            try {
                const response = await getUser()
                this.user = response.user
                localStorage.setItem("user", JSON.stringify(this.user))
            } catch (error) {
                throw error
            }
        },
        async cerrarsesion(){
            try {
                await logout()
                this.isAuth = false
                localStorage.clear()
            } catch (error) {
                throw error
            }
        }
    }
})