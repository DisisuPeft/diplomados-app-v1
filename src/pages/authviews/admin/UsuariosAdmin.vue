<script setup>
import AuthenticatedHeader from "../AuthenticatedHeader.vue";
import TableUsuarios from "./tables/TableUsuarios.vue";
import { ref, onMounted } from "vue";
import { useUsuariosAdmin } from "../../../store/admin/usuariosadmin";
import Modal from "../../../components/Modal.vue";
import CloseButton from "../../../components/CloseButton.vue";
import UserForm from "./partials/UserForm.vue";

const store = useUsuariosAdmin();
const show = ref(false);
const elementSelected = ref({});
const selected = (row) => {
  show.value = true;
  elementSelected.value = row;
};

const submitUser = (e) => {
  console.log(e);
};
onMounted(async () => {
  try {
    await store.getUsersAdmin();
  } catch (error) {
    console.log(error);
    Toast(message(error), "error");
  }
});
</script>

<template>
  <AuthenticatedHeader>
    <TableUsuarios @row="selected" />
    <Modal :show="show">
      <!-- <section class="grid grid-rows-1">
        <div class="flex justify-start p-4">
          <CloseButton @click="show = !show">Cerrar</CloseButton>
        </div>
        <div class="w-[500px]">
          <div class="m-5">
            <UserForm></UserForm>
          </div>
        </div>
      </section> -->
      <section class="flex items-center justify-center">
        <div class="">
          <div class="flex justify-start">
            <CloseButton @click="show = false">Cerrar</CloseButton>
          </div>
          <div class="w-[500px] p-6">
            <UserForm :selected="elementSelected"></UserForm>
          </div>
        </div>
      </section>
    </Modal>
  </AuthenticatedHeader>
</template>
