import { defineStore } from "pinia";
import { getCategorys, patchCategorys, postCategorys } from "../../services/settings";

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categorys: []
    }),
    getters: {
        Categorys(state){
            return state.categorys
        }
    },
    actions: {
        async getCategorias(){
            try {
                const res = await getCategorys()
                this.categorys = res.data.categorys
            } catch (error) {
                throw error
            }
        },
        async saveCategorias(data){
            try {
                const res = await postCategorys(data)
                return res.data
            } catch (error) {
                throw error
            }
        },
        async updateCategorys(id, data){
            try {
                const res = await patchCategorys(id, data)
                return res.data
            } catch (error) {
                throw error
            }
        }
    }
})