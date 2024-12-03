<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "./store/auth/authstore";

const { checkUsuario, isAuth } = useAuthStore();

onMounted(() => {
  // checkUsuario();
  // console.log(isAuth);
});
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
