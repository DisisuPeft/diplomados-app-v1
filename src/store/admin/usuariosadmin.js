import { defineStore } from "pinia";
import { createUsers, getUsuariosAdmin, updateUsers } from "../../services/adminservices";
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
        async crearUser(data){
            try {
                const res = await createUsers(data);
                return res
            } catch (error) {
                throw error
            }
        },
        async getUsersAdmin(){
            try {
                const res = await getUsuariosAdmin()
                this.usuarios = res
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async UpdateUsers(data){
            try {
                const res = await updateUsers(data)
                return res
            } catch (error) {
                throw error
            }
        }
    }
})