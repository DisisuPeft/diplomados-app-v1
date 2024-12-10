<script setup>
import Modal from "../../../components/Modal.vue";

const props = defineProps({
  visible: {
    type: Boolean,
  },
});

const emit = defineEmits(["modal:update"]);
</script>

<template>
  <Modal :show="visible">
    <!-- <div class="absolute inset-0 flex items-center justify-center p-6">
      <div
        class="w-full max-w-[900px] bg-white rounded-lg flex flex-col shadow-md"
      > -->
    <div
      class="px-6 py-4 border-b border-gray-200 flex items-center justify-between p-10"
    >
      <span class="font-bold text-xl">Nuevo programa educativo</span>
      <div>
        <v-btn
          icon="mdi-close"
          elevation="0"
          @click="emit('modal:update', false)"
        ></v-btn>
      </div>
    </div>
    <div class="p-4">
      <div class="flex flex-col">
        <div class="flex flex-col mb-7">
          <label class="font-bold text-sm mb-2">Nombre</label>
          <input
            type="text"
            class="block mt-2 border border-gray-300 rounded-md px-3 py-3 transition ease-in-out focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-25"
          />
        </div>
        <div class="flex flex-col mb-7">
          <label class="font-bold text-sm mb-2">Descripcion</label>
          <textarea
            class="block mt-2 border border-gray-300 rounded-md px-3 py-3 min-h-[100px] max-w-full transition ease-in-out focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-25"
          ></textarea>
          <p class="text-sm mt-2 text-gray-500">
            Una breve descripcion del programa educativo
          </p>
        </div>
        <div class="flex flex-col mb-7">
          <label class="font-bold text-sm mb-2">Categoria</label>
          <select
            type="text"
            class="block mt-2 border border-gray-300 rounded-md px-3 py-3 transition ease-in-out focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-25"
          ></select>
        </div>
      </div>
    </div>
    <div class="px-6 pb-6">
      <button
        class="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition ease-in-out"
      >
        Crear programa
      </button>
    </div>
    <!-- </div>
    </div> -->
  </Modal>
</template>

<style></style>
