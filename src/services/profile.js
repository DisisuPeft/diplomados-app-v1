import api from "./api";

export const getPerfil = async (id) =>{
    try {
        const response = await api.get('users/myprofile/', {
            params: {
                id: id
            }
        })
        if(response.status === 200 || 201){
            return response.data
        }
    } catch (error) {
        // const e = error.response ? error.response.data : "Ocurrio un error en el servicio del cliente, informe en el apartado de soporte."     
        throw error
    }
}