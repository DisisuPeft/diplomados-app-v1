import api from "./api";

export const getCategorys = async () => {
    try {
        const response = await api.get('courses/categorys/')
        if (response.status === 200 || 201){
            return response
        }
    } catch (error) {
        throw error
    }
}


export const postCategorys = async (data) => {
    try {
        const response = await api.post('courses/category/create/', data)
        if (response.status === 200 || 201){
            return response
        }
    } catch (error) {
        throw error        
    }
}

export const patchCategorys = async (id, data) => {
    try {
        const response = await api.patch("courses/category/update/", data, {
            params: {
                category_id: id
            }
        })
        if(response.status === 200 || 201){
            return response
        }
    } catch (error) {
        throw error
    }
}