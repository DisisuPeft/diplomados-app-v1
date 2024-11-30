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
    try {
        const res = await api.post('auth/login/', credentials)
        if(res.status === 200 || 201){
            return res.data
        }
    } catch (error) {
        const e = error.response ? error.response.data : "Error al solicitar la información al servidor"
        throw e        
    }
} 



export const checkUser = async () => {
    try {
        const res = await api.get('check/user/')
        if (res.status === 201 || 200){
            return res.data
        }
    }catch (error){
        const e = error.response ? error.response.data : "Error al solicitar la información al servidor"
        throw e
    }
}

export const getUser = async () => {
    try {
        const res = await api.get('auth/user/')
        if (res.status === 201 || 200){
            return res.data
        }
    }catch (error){
        const e = error.response ? error.response.data : "Error al solicitar la información al servidor"
        throw e
    }
}

export const logout = async () => {
    try {
        const res = await api.get('logout/')
        if (res.status === 201 || 200){
            this.isAuth = false
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