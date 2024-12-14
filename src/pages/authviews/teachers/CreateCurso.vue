<script setup>
import Modal from "../../../components/Modal.vue";
import { useCategoryStore } from "../../../store/settings/categoryStore";
import { computed, onMounted, ref, watch } from "vue";

const categorystore = useCategoryStore();
const props = defineProps({
  visible: {
    type: Boolean,
  },
});
const categorys = computed(() => categorystore.Categorys);
const subcategorys = ref([]);
const especifications = ref([]);
const hidden1 = ref(false);
const hidden2 = ref(false);
const emit = defineEmits(["modal:update"]);
const form = ref({
  name: "",
  description: "",
  category: null,
  start_date: "",
  end_date: "",
  hour_start: "",
  hour_end: "",
  duration: null,
  price: null,
  max_capacity: null,
  subcategory: null,
  specification: null,
  teacher: null,
  status: null,
  tutor: null,
});
watch(
  () => form.value.subcategory,
  (newValue, oldValue) => {
    form.value.specification = null;

    if (newValue) {
      let filter = subcategorys.value.filter((c) => c.id === newValue);

      if (filter.length > 0) {
        especifications.value = filter[0].especification;
        hidden2.value = true;
      } else {
        especifications.value = [];
        hidden2.value = false;
      }
    } else {
      especifications.value = [];
      hidden2.value = false;
    }
  }
);
watch(
  () => form.value.category,
  (newValue) => {
    form.value.subcategory = null;

    if (newValue) {
      let filter = categorys.value.filter((c) => c.id === newValue);

      if (filter.length > 0) {
        subcategorys.value = filter[0].subcategory;
        hidden1.value = true;
      } else {
        subcategorys.value = [];
        hidden1.value = false;
      }
    } else {
      subcategorys.value = [];
      hidden1.value = false;
    }
  }
);
onMounted(() => {
  // console.log(categorys);
});
</script>

<template>
  <Modal :show="visible">
    <!-- <div class="absolute inset-0 flex items-center justify-center p-6">
      <div
        class="w-full max-w-[900px] bg-white rounded-lg flex flex-col shadow-md"
      > -->
    <div class="p-5">
      <div
        class="px-6 py-4 border-b border-gray-200 flex items-center justify-between"
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
              v-model="form.name"
            />
          </div>
          <div class="flex flex-col mb-7">
            <label class="font-bold text-sm mb-2">Descripcion</label>
            <textarea
              v-model="form.description"
              class="block mt-2 border border-gray-300 rounded-md px-3 py-3 min-h-[100px] max-w-full transition ease-in-out focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-25"
            ></textarea>
            <p class="text-sm mt-2 text-gray-500">
              Una breve descripcion del programa educativo
            </p>
          </div>
          <div class="flex flex-col mb-7">
            <label class="font-bold text-sm mb-2">Categoria</label>
            <v-select
              :items="categorys"
              item-value="id"
              item-title="name"
              v-model="form.category"
            >
            </v-select>
          </div>
          <div :class="['flex', 'flex-col', 'mb-7', !hidden1 ? 'hidden' : '']">
            <label class="font-bold text-sm mb-2">Subcategoria</label>
            <v-select
              :items="subcategorys"
              item-value="id"
              item-title="name"
              v-model="form.subcategory"
            >
            </v-select>
          </div>
          <div :class="['flex flex-col mb-7 ', !hidden2 ? 'hidden' : '']">
            <label class="font-bold text-sm mb-2">Subcategoria</label>
            <v-select
              :items="especifications"
              item-value="id"
              item-title="name"
              v-model="form.specification"
            >
            </v-select>
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
    </div>
    <!-- </div>
    </div> -->
  </Modal>
</template>

<style></style>
