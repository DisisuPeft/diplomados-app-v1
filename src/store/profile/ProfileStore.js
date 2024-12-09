import { defineStore } from "pinia";
import { Toast } from "../../alerts/alerts";
import { getPerfil } from "../../services/profile";
import { tr } from "vuetify/locale";
export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: []
    }),
    getters:{},
    actions:{
        async getPerfil(id){
            try {
                const res = await getPerfil(id)
                return res
            }catch(error){
                // console.log(error)
                throw error
            }
        }
    }
}) 