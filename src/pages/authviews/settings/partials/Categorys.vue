<script setup>
import { computed, onMounted, ref, watch } from "vue";
import Modal from "../../../../components/Modal.vue";
import { Toast } from "../../../../alerts/alerts";
import { useCategoryStore } from "../../../../store/settings/categoryStore";
import { reset } from "../../../../js/reset";

const props = defineProps({
  edit: {
    type: Boolean,
  },
  modal: {
    type: Boolean,
  },
});
const store = useCategoryStore();
const toggleCollapse = ref(false);
// const modal = ref(false);
const headers = [
  { key: "name", title: "Nombre" },
  { key: "description", title: "Descripcion" },
  { key: "subcategory", title: "Subcategoria" },
  //{ key: "subcategory[0].especification", title: "Especificaciones" },
  //{ key: "actions", title: "Acciones" },
];
const categorys = computed(() => store.Categorys);
// const edit = ref(false);
const id = ref(null);
const form = ref({
  subcategory_id: null,
  nameCategory: "",
  description: "",
  namesubCategory: "",
  especification: [""],
});
const emit = defineEmits(["form:category", "edit:update", "modal:edit"]);

const editCategory = (category) => {
  emit("edit:update", true);
  category.name !== null || ""
    ? ((form.value.nameCategory = category.name),
      (form.value.description = category.description))
    : console.log("error");
  id.value = category.id;
  emit("modal:edit", true);
};
const editSubItemCategory = (category, subcategory) => {
  // console.log(subcategory);
  emit("edit:update", true);
  category.name !== null || ""
    ? ((form.value.nameCategory = category.name),
      (form.value.description = category.description),
      (form.value.namesubCategory = subcategory.name),
      (form.value.especification = subcategory.especification.map((esp) => [
        esp.name,
      ])),
      (form.value.subcategory_id = subcategory.id))
    : console.log("error");
  id.value = category.id;
  emit("modal:edit", true);
};
const deleteItem = (category) => {
  console.log(category);
};
const addIndex = () => {
  form.value.especification.length === 15
    ? Toast("No se pueden agregar mas especificaciones", "warning")
    : form.value.especification.push([""]);
};
const addsub = () => {
  form.value.namesubCategory.length === 15
    ? Toast("No se pueden agregar mas subcategorias", "warning")
    : form.value.namesubCategory.push([""]);
};
const submit = () => {
  const formData = new FormData();
  for (let data in form.value) {
    formData.append(data, form.value[data]);
  }
  props.edit
    ? emit("form:category", [formData, "edit", id.value])
    : emit("form:category", [formData, "create"]);
};
const close = () => {
  emit("modal:edit", false);
  emit("edit:update", false);
};
watch(
  () => props.edit,
  (newValue, oldValue) => {
    // console.log("New value:", newValue);
    // console.log("Old value:", oldValue);
    // console.log(props.edit);
    // This will help you see the transition clearly
    if (!newValue) {
      const data = reset(form.value);
      form.value = data;
    }
  }
);
// watch(edit, (value) => {
//   // console.log(value);
//   if (value) {
//     // console.log(modalValue);
//     // console.log(
//     //   Object.keys(form.value).forEach((value) => {
//     //     console.log(value, form.value[value]);
//     //   })
//     // );
//     console.log("Holi", value);
//   }
// });

onMounted(() => {});
</script>
<template>
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
            <span>Planes Educativos</span>
          </div>
        </template>
        <template v-else>
          <div class="flex items-center">
            <i class="mdi mdi-mdi mdi-chevron-down mr-2 text-4xl"></i>
            <span>Planes Educativos</span>
          </div>
        </template>
      </button>
    </div>
    <div v-if="toggleCollapse" class="px-6 py-4 border-t">
      <div class="flex flex-row justify-between">
        <div class="flex justify-start ml-5">
          <h3 class="text-lg font-medium">Categorias académicas</h3>
        </div>
        <div class="flex items-center justify-end mr-10">
          <v-btn
            class="mb-2"
            color="primary"
            icon="mdi-plus"
            dark
            @click="emit('modal:edit', true)"
          ></v-btn>
        </div>
      </div>
      <div class="flex justify-center">
        <!-- :sort-by="[{ key: 'calories', order: 'asc' }]" -->
        <v-data-table
          :headers="headers"
          :items="categorys"
          items-per-page-text="elementos por pagina"
          last-page-label="Todos"
        >
          <template v-slot:top>
            <Modal :show="props.modal">
              <div class="flex items-center justify-end p-2">
                <v-btn icon="mdi-close" @click="close" elevation="0"></v-btn>
              </div>
              <form @submit.prevent="submit">
                <v-container>
                  <v-row class="d-flex m-6">
                    <v-col cols="12" md="12" sm="6">
                      <v-text-field
                        variant="underlined"
                        v-model="form.nameCategory"
                        label="Nombre de la categoria"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" sm="6">
                      <v-textarea
                        variant="underlined"
                        v-model="form.description"
                        label="Descripcion de la categoria"
                      ></v-textarea>
                    </v-col>
                    <div>
                      <p
                        class="text-2xl font-bold underline underline-offset-1 ml-2"
                      >
                        Subcategoria
                      </p>
                    </div>
                    <!-- <div
                      class="border-b-4 border-gray-700 h-[10px] w-full"
                    ></div> -->
                    <v-col cols="12" md="12" sm="6">
                      <v-text-field
                        ref="input"
                        variant="underlined"
                        v-model="form.namesubCategory"
                        label="Subcategoria"
                      ></v-text-field>
                    </v-col>
                    <!-- <div
                      class="border-b-4 border-gray-700 h-[10px] w-full"
                    ></div> -->
                    <div>
                      <p
                        class="text-2xl font-bold underline underline-offset-1 ml-2"
                      >
                        Especificaciones
                      </p>
                    </div>
                    <v-col
                      v-for="(row, index) in form.especification"
                      :key="index"
                      cols="12"
                      md="12"
                      sm="6"
                    >
                      <v-text-field
                        v-model="form.especification[index]"
                        label="Especificacion"
                        dense
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5" sm="6">
                      <v-btn
                        class="mb-2"
                        color="primary"
                        icon="mdi-pencil-plus-outline"
                        dark
                        @click="addIndex"
                      >
                      </v-btn>
                    </v-col>
                  </v-row>
                  <div class="flex justify-end">
                    <v-btn color="#62C1E5" class="text-white" type="submit"
                      >Guardar</v-btn
                    >
                  </div>
                </v-container>
              </form>
            </Modal>
          </template>
          <template v-slot:no-data>
            <p>VACIO</p>
          </template>
          <template v-slot:item="{ item }">
            <tr class="border-gray-400 border-b-4">
              <td>
                <!-- <v-chip
                  selected-class="bg-sky-500 text-white"
                  @click="editedItemCategory(item.name, item.description)"
                > -->
                {{ item.name }}
                <!-- </v-chip> -->
              </td>
              <td>{{ item.description }}</td>
              <td class="">
                <!-- <div class="" v-for="c in item.subcategory" :key="c.id">
                  {{ c.name }}
                </div> -->
                <!-- <v-chip-group
                  selected-class="bg-sky-500 text-white"
                  class=""
                  column
                > -->
                <!-- <v-chip

                > -->
                <div v-for="i in item.subcategory">
                  <!-- <div>{{ i.name }}</div> -->
                  <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-1 w-[250px]"> -->
                  <div class="flex items-center justify-between p-2">
                    <div class="w-[80%]">◉ {{ i.name }}</div>
                    <div class="w-[20%]">
                      <v-icon
                        class="me-2 text-2xl"
                        size="small"
                        @click="editSubItemCategory(item, i)"
                      >
                        mdi-pencil
                      </v-icon>
                    </div>
                  </div>
                  <!-- </div> -->
                </div>
                <!-- </v-chip> -->
                <!-- </v-chip-group> -->
              </td>
              <td>
                <!-- <div
                  v-for="a in item.subcategory[0].especification"
                  :key="a.id"
                >
                  ◉ {{ a.name }}
                </div> -->
                <!-- <v-chip-group selected-class="text-primary" column>
                  <v-chip
                    v-for="a in item.subcategory[0].especification"
                    :key="a"
                  >
                    {{ a.name }}
                  </v-chip>
                </v-chip-group> -->
              </td>
              <td>
                <v-icon
                  class="me-2 text-4xl"
                  size="small"
                  @click="editCategory(item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon size="small" @click="deleteItem(item)" class="text-4xl">
                  mdi-delete
                </v-icon>
              </td>
              <!-- <td>{{ item.iron }}</td> -->
            </tr>
          </template>
          <!-- <template v-slot:item.actions="{ item }">
            <v-icon
              class="me-2 text-4xl"
              size="small"
              @click="editedItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon size="small" @click="deleteItem(item)" class="text-4xl">
              mdi-delete
            </v-icon>
          </template> -->
          <!-- <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template> -->
        </v-data-table>
      </div>
    </div>
  </div>
</template>
