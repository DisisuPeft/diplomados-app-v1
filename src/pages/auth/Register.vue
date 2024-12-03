<script setup>
import { useRouter } from "vue-router";
import RegisterForm from "./partials/RegisterForm.vue";
import { useAuthStore } from "../../store/auth/authstore";
import { message, Toast } from "../../alerts/alerts";
import { ref } from "vue";
import Loader from "../../components/Loader.vue";

const router = useRouter();
const { registrarse } = useAuthStore();
const resetForm = ref(false);
const setVisible = ref(false);

const registro = async (e) => {
  setVisible.value = true;
  try {
    const response = await registrarse(e);
    // console.log(response);
    Toast(message(response), "success");
    resetForm.value = true;
    router.push("/");
  } catch (error) {
    Toast(message(error), "error");
  } finally {
    setVisible.value = false;
  }
};
</script>

<template>
  <div class="md:flex h-screen">
    <div class="w-1/2">
      <div class="rounded-lg text-center w-full">
        <div class="relative w-full h-[945px] overflow-hidden mb-2">
          <img
            src="/src/assets/img/people-dressed.jpeg"
            alt="Imagen del slogan"
            style="object-fit: cover; width: 100%; height: 100%"
          />
          <h2
            class="bg-[#050038] p-2 absolute bottom-[100px] left-1/2 transform -translate-x-1/2 text-white text-[30px] font-bold"
          >
            La excelencia comienza con una decisión
          </h2>
        </div>
      </div>
    </div>
    <div class="w-1/2 flex items-center justify-center">
      <div class="bg-white rounded-md shadow-2xl w-[500px]">
        <div class="m-2">
          <button @click="router.push('/')">
            <img
              src="/src/assets/img/logobgwhite.png"
              alt="logo"
              style="width: 80px; height: 90px"
            />
          </button>
        </div>
        <h1 class="text-2xl mb-5 m-5">Crear cuenta</h1>
        <div class="m-5">
          <RegisterForm @form:registro="registro" :reset="resetForm" />
        </div>
      </div>
    </div>
  </div>
  <Loader :visible="setVisible" />
</template>
