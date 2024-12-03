<script setup>
import AuthenticatedHeader from "./AuthenticatedHeader.vue";
import { useAuthStore } from "../../store/auth/authstore";
import { onMounted } from "vue";
import { Toast } from "../../alerts/alerts";

const { getUsuario } = useAuthStore();

onMounted(async () => {
  try {
    await getUsuario();
    // console.log(res);
    // Toast()
  } catch (error) {
    Toast("Error al obtener al usuario", "error");
  }
  //   //   console.log(user);
  //   const user = localStorage.getItem("user");
  //   console.log(JSON.parse(user));
});
</script>
<template>
  <AuthenticatedHeader>
    <div>Hola</div>
  </AuthenticatedHeader>
</template>
