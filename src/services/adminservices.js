import api from "./api";


export const createUsers = async (data) => {
    try {
        const response = await api.post('admin/usuarios/crear/', data)
        if (response.status === 200 || 201){
            return response.data
        }
    } catch (error) {
        const errorResponse = error.response ? error.response.data : 'Error en el servicio del cliente, notificar al area de soporte' 
        throw errorResponse
    }
}

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