<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "./store/auth/authstore";
// import { api } from "./services/api";

const { checkUsuario, isAuth } = useAuthStore();
onMounted(() => {
  // api.interceptors.response.use(
  //   (response) => response,
  //   async (error) => {
  //     const auth = useAuthStore();
  //     if (error.response.status === 401) {
  //       try {
  //         // Intentar renovar el token
  //         await api.post("auth/refresh/");
  //         return api.request(error.config); // Reintentar la solicitud original
  //       } catch (refreshError) {
  //         // auth.cerrarsesion()
  //         await auth.cerrarsesion();
  //         localStorage.clear();
  //         console.error("No se pudo renovar el token:", refreshError);
  //       }
  //     }
  //     return Promise.reject(error);
  //   }
  // );
  // checkUsuario();
  // console.log(isAuth);
});
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
