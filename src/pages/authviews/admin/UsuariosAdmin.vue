<script setup>
import AuthenticatedHeader from "../AuthenticatedHeader.vue";
import TableUsuarios from "./tables/TableUsuarios.vue";
import { ref, onMounted } from "vue";
import { useUsuariosAdmin } from "../../../store/admin/usuariosadmin";
import Modal from "../../../components/Modal.vue";
import CloseButton from "../../../components/CloseButton.vue";
import UserForm from "./partials/UserForm.vue";
import PrimaryButton from "../../../components/PrimaryButton.vue";
import SecondaryButton from "../../../components/SecondaryButton.vue";
import { message, Toast } from "../../../alerts/alerts";

const store = useUsuariosAdmin();
const show = ref(false);
const elementSelected = ref({});
const reset = ref(false);
const selected = (row) => {
  show.value = true;
  elementSelected.value = row;
};

const close = () => {
  elementSelected.value = {};
  show.value = false;
};

const submitUser = async (e) => {
  if (e[1] === "create") {
    try {
      const res = await store.crearUser(e[0]);
      Toast("Usuario creado con exito", "success");
      reset.value = true;
      store.getUsersAdmin();
      show.value = false;
    } catch (error) {
      Toast(message(error), "error");
    }
  } else if (e[1] === "edit") {
    try {
      const res = await store.UpdateUsers(e[0]);
      // console.log(res);
      Toast(message(res), "success");
      reset.value = true;
      store.getUsersAdmin();
      show.value = false;
    } catch (error) {
      Toast(message(error.response.data.error), "error");
    }
  }
};
onMounted(async () => {
  try {
    await store.getUsersAdmin();
  } catch (error) {
    // console.log(error);
    Toast(message(error), "error");
  }
});
</script>

<template>
  <AuthenticatedHeader>
    <div class="flex items-center justify-center">
      <TableUsuarios @row="selected" />
    </div>
    <div class="flex justify-end p-4 mr-[100px]">
      <!-- <SecondaryButton
        title="Crear usuario"
        @click="show = true"
      ></SecondaryButton> -->
      <button @click="show = true">Crear</button>
    </div>
    <!-- MODAL -->
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
          <div class="flex justify-start p-2">
            <CloseButton @click="close">Cerrar</CloseButton>
          </div>
          <div class="w-[600px] p-6">
            <UserForm
              :selected="elementSelected"
              @form:user="submitUser"
              :reset="reset"
            ></UserForm>
          </div>
        </div>
      </section>
    </Modal>
  </AuthenticatedHeader>
</template>
