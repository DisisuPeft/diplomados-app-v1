import axios from "axios"
import { useAuthStore } from "../store/auth/authstore";
import { Toast } from "../alerts/alerts";
import { useRouter, useRoute } from "vue-router";

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    const router = useRouter()
    // if (error.response) {
      // Específicamente para código 401 con tokens en cookies
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        try {
          await api.post('auth/refresh/', {}, {
            withCredentials: true
          })
          return api(originalRequest)
        } catch (error) {
          // await axios.post('logout/', {}, {
          //   withCredentials: true
          // })
          Toast("La sesion expiro, sera redirigo para iniciar nuevamente sesion", "warning")
          localStorage.clear()
          setTimeout(() => {
            window.location.href = '/'
            router.replace('/')
          }, 4000)
          
        }
      } else {
        // Toast('Ha ocurrido un error. Por favor, intente nuevamente.', 'error');
      }
    // }
    return Promise.reject(error);
  }
);

export default api
// api.interceptors.response.use(
//     response => response,
//     async error => {
//       // const auth = useAuthStore()
//       if (error.response.status === 401) {
//         try {
//           // Intentar renovar el token
//           await api.post('auth/refresh/');
//           return api.request(error.config); // Reintentar la solicitud original
//         } catch (refreshError) {
//           // auth.cerrarsesion()
//           localStorage.clear()
//           console.error('No se pudo renovar el token:', refreshError);
//         }
//       }
//       return Promise.reject(error);
//     }
//   );
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       if (error.response.status === 401) {
//         // Redirect to login page
//         localStorage.clear()
//         router.push('/')
//       } else {
//         // Show a generic error message
//         Toast('An error occurred. Please try again later.', 'error')
//       }
//     }
//     return Promise.reject(error)
//   },
// );
  