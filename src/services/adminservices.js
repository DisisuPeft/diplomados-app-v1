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