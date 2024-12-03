import { api } from "./api"

export const register = async (credentials) => {
    try {
        const res = await api.post('auth/register/', credentials)
        if(res.status === 200 || 201){
            return res.data
        }
    } catch (error) {
        const e = error.response ? error.response.data : "Error al solicitar la información al servidor"
        throw e        
    }
} 

export const login = async (credentials) => {
    // console.log("login")
    try {
        const res = await api.post('auth/login/', credentials)
        if(res.status === 200 || 201){
            return res.data
        }
    } catch (error) {
        // const e = error.response ? error.response.data : "Error al solicitar la información al servidor"
        throw error        
    }
} 

export const checkUser = async () => {
    // console.log("user check")
    try {
        const res = await api.get('check/user/')
        if (res.status === 201 || 200){
            return res.data
        }
    }catch (error){
        // const e = error.response ? error.response.data : "Error al solicitar la información al servidor"
        throw error
    }
}

export const getUser = async () => {
    try {
        const res = await api.get('auth/user/')
        if (res.status === 201 || 200){
            return res.data
        }
    }catch (error){
        // const e = error.response ? error.response.data : "Error al solicitar la información al servidor"
        throw error
    }
}

export const logout = async () => {
    try {
        const res = await api.post('logout/')
        if (res.status === 201 || 200){
            return res.data
        }
    }catch (error){
        const e = error.response ? error.response.data : "Error al solicitar la información al servidor"
        throw e
    }
}

export const verfiyAuth = async () => {
    try {
        const res = await api.get('auth/verify/')
        if (res.status === 201 || 200){
            return res.data
        }
    }catch (error){
        const e = error.response ? error.response.data : "Error al solicitar la información al servidor"
        throw e
    }
}