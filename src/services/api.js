import axios from "axios"
import { useAuthStore } from "../store/auth/authstore";
export const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true
});

api.interceptors.response.use(
    response => response,
    async error => {
      const auth = useAuthStore()
      if (error.response.status === 401) {
        try {
          // Intentar renovar el token
          await api.post('auth/refresh/');
          return api.request(error.config); // Reintentar la solicitud original
        } catch (refreshError) {
          // auth.cerrarsesion()
          localStorage.clear()
          console.error('No se pudo renovar el token:', refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
  