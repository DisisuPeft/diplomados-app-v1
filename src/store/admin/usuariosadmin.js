import { defineStore } from "pinia";
import { getUsuariosAdmin } from "../../services/adminservices";
import { Toast } from "../../alerts/alerts";

export const useUsuariosAdmin = defineStore('adminusuarios', {
    state: () => ({
        usuarios: [],
    }),
    getters: {
        getUsuariosAdmin(state){
            return state.usuarios
        }
    },
    actions: {
        async getUsersAdmin(){
            try {
                const res = await getUsuariosAdmin()
                this.usuarios = res
            } catch (error) {
                console.log(error)
                throw error
            }
        }
    }
})