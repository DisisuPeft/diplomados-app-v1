<script setup>
import { ref } from "vue";
import Loader from "../../../components/Loader.vue";

const form = ref({
  nombre: "",
  apellidoP: "",
  apellidoM: "",
  edad: null,
  fecha_nacimiento: "",
  sexo: "",
  nivel_educativo: "",
  telefono: "",
  email: "",
  password: "",
  password_confirmation: "",
  role: null,
});
const show = ref(true);
</script>

<template>
  <Loader :visible="show"></Loader>
</template>
