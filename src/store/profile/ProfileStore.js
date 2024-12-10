import { defineStore } from "pinia";
import { Toast } from "../../alerts/alerts";
import { editProfile, getPerfil } from "../../services/profile";
import { tr } from "vuetify/locale";
export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : {}
    }),
    getters:{
        Profile(state){
            return state.profile
        }
    },
    actions:{
        async getPerfil(id){
            try {
                const res = await getPerfil(id)
                localStorage.setItem("profile", JSON.stringify(res.profile));
            }catch(error){
                // console.log(error)
                throw error
            }
        },
        async updatePerfil(id, data){
            localStorage.removeItem("profile")
            try {
                const res = await editProfile(id, data)
                // console.log(res)
                localStorage.setItem("profile", JSON.stringify(res.data.newprofile))
            } catch (error) {
                throw error
            }
        }
    }
}) 