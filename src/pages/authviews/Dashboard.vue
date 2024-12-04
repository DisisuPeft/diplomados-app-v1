<script setup>
import AuthenticatedHeader from "./AuthenticatedHeader.vue";
import { useAuthStore } from "../../store/auth/authstore";
import { onMounted } from "vue";
import { Toast } from "../../alerts/alerts";

// const { getUsuario } = useAuthStore();

onMounted(async () => {
  // try {
  //   await getUsuario();
  //   // console.log(res);
  //   // Toast()
  // } catch (error) {
  //   Toast("Error al obtener al usuario", "error");
  // }
  //   //   console.log(user);
  //   const user = localStorage.getItem("user");
  //   console.log(JSON.parse(user));
});
</script>
<template>
  <AuthenticatedHeader>
    <section class="rounded-lg bg-slate-200 max-w-[700] p-5">dashboard</section>
  </AuthenticatedHeader>
</template>
