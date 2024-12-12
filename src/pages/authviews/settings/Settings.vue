<script setup>
import { onMounted, ref } from "vue";
import AuthenticatedHeader from "../AuthenticatedHeader.vue";
import Categorys from "./partials/Categorys.vue";
import { useCategoryStore } from "../../../store/settings/categoryStore";
import { Toast } from "../../../alerts/alerts";

const categorystore = useCategoryStore();
const edit = ref(false);
const toggleCollapse = ref(false);
const getCategoryData = async () => {
  try {
    await categorystore.getCategorias();
  } catch (error) {
    console.log(error);
  }
};

const postCategory = async (e) => {
  // console.log(...e[0], e[1]);
  if (e[1] === "create") {
    try {
      await categorystore.saveCategorias(e);
      Toast("Categorias creadas", "success");
    } catch (error) {
      // console.log(error);
      Toast("Error al crear las categorias", "error");
    }
  } else if (e[1] === "edit") {
    try {
      await categorystore.updateCategorys(e[2], e[0]);
    } catch (error) {
      Toast("Error al editar las categorias", "error");
    }
  }
};

onMounted(() => {
  // categorias
  getCategoryData();
});
</script>

<template>
  <AuthenticatedHeader>
    <!-- Programas Educativos -->
    <div class="max-w-8xl flex flex-row p-2 bg-white rounded-md mb-4 md:w-full">
      <div
        class="flex items-center justify-start p-2 bg-white rounded-md mb-4 w-full"
      >
        <h1 class="font-bold text-2xl p-4">Preferencias</h1>
      </div>
      <div
        class="flex items-center justify-end p-4 bg-white rounded-md mb-4 w-full mr-10"
      >
        <!-- <v-btn
          icon="mdi-plus"
          color="blue"
          title="Crear nuevo programa educativo"
          @click="show = true"
        ></v-btn> -->
      </div>
    </div>
    <section class="max-w-8xl mx-auto bg-white rounded-lg">
      <Categorys
        :edit="edit"
        @form:category="postCategory"
        @edit:update="edit = $event"
      />
    </section>
  </AuthenticatedHeader>
</template>
