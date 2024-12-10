<script setup>
import AuthenticatedHeader from "../AuthenticatedHeader.vue";
import CreateCurso from "./CreateCurso.vue";
import { onMounted, ref } from "vue";

const show = ref(false);
const toggleCollapse = ref(false);
const isOpen = ref(false);

const open = () => {
  toggleCollapse.value = !toggleCollapse.value;
  isOpen.value = true;
};
onMounted(() => {});
</script>

<template>
  <AuthenticatedHeader>
    <!-- Programas Educativos -->
    <div class="max-w-8xl flex flex-row p-2 bg-white rounded-md mb-4 md:w-full">
      <div
        class="flex items-center justify-start p-2 bg-white rounded-md mb-4 w-full"
      >
        <h1 class="font-bold text-2xl p-4">Gestión Académica</h1>
      </div>
      <div
        class="flex items-center justify-end p-4 bg-white rounded-md mb-4 w-full mr-10"
      >
        <v-btn
          icon="mdi-plus"
          color="blue"
          title="Crear nuevo programa educativo"
          @click="show = true"
        ></v-btn>
      </div>
    </div>
    <section class="max-w-8xl mx-auto bg-white rounded-lg">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="flex items-center justify-between px-6 py-4 cursor-pointer">
          <button
            :class="[
              'p-16-semibold flex size-full p-[9px] group font-semibold rounded-full bg-cover hover:bg-sky-100 hover:shadow-inner',
            ]"
            title="Administrador"
            @click="toggleCollapse = !toggleCollapse"
          >
            <template v-if="toggleCollapse">
              <div class="flex items-center">
                <i class="mdi mdi-mdi mdi-chevron-up mr-2 text-4xl"></i>
                <span>Planes academicos</span>
              </div>
            </template>
            <template v-else>
              <div class="flex items-center">
                <i class="mdi mdi-mdi mdi-chevron-down mr-2 text-4xl"></i>
                <span>Planes academicos</span>
              </div>
            </template>
          </button>
        </div>
        <div v-if="toggleCollapse" class="px-6 py-4 border-t">
          <h3 class="text-lg font-medium">Card Title</h3>
          <p>
            En esta parte pondre un tabla con los cursos existentes y filtros
            necesarios. Asi como una columna con operaciones, ver, eliminar
          </p>
        </div>
      </div>
    </section>
    <CreateCurso :visible="show" @modal:update="show = $event"></CreateCurso>
  </AuthenticatedHeader>
</template>
