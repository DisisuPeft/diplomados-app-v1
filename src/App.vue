<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "./store/auth/authstore";

const { checkUsuario } = useAuthStore();

onMounted(() => {
  checkUsuario();
});
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
