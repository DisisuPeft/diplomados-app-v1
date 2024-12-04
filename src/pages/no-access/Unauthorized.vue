<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="flex justify-center h-screen bg-slate-700">
    <section class="flex items-center justify-center">
      <button @click="router.push('/dashboard')" class="text-4xl text-white">
        Acceso denegado. Regresar al inicio
      </button>
    </section>
  </div>
</template>
