import api from "./api";


export const getUsuariosAdmin = async () => {
    try {
        const response = await api.get('admin/usuarios/')
        if (response.status === 200 || 201){
            return response.data.users
        }
    } catch (error) {
        throw error        
    }
}

export const updateUsers = async (data) => {
    try {
        const response = await api.patch('admin/usuarios/editar/', data)
        if (response.status === 200 || 201) {
            return response.data
        }
    } catch (error) {
        throw error
    }
}