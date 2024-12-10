<script setup>
import { roles, generos, nivelesEducativos } from "../../../../js/Arraydata";
import { computed, ref, onMounted } from "vue";
import { useProfileStore } from "../../../../store/profile/ProfileStore";
import { storeToRefs } from "pinia";

// const store = useProfileStore();
const props = defineProps({
  user: {},
});
const { Profile } = storeToRefs(useProfileStore());
// const user = computed(() => store.Profile);
const emit = defineEmits(["form:profile"]);
const form = ref({
  nombre: Profile ? Profile.value.nombre : "",
  apellidoP: Profile ? Profile.value.apellidoP : "",
  apellidoM: Profile ? Profile.value.apellidoM : "",
  edad: Profile ? Profile.value.edad : null,
  fechaNacimiento: Profile ? Profile.value.fechaNacimiento : "",
  genero: Profile ? Profile.value.genero : null,
  nivEdu: Profile ? Profile.value.nivEdu : null,
  telefono: Profile ? Profile.value.telefono : "",
  // email: user ? user?.email : "",
  // password: "",
  // role: props.user ? props.user?.roleID?.map((role) => role.id) : [],
});

const submit = () => {
  const formData = new FormData();
  for (let i in form.value) {
    formData.append(i, form.value[i]);
  }
  emit("form:profile", form.value);
};
// console.log(store.Profile);
onMounted(() => {
  // localStorage.getItem("user") ? user_profile.value =
  // console.log(Profile.value);
});
</script>

<template>
  <div class="bg-white p-10 rounded-lg shadow-lg">
    <div
      class="flex flex-col gap-5 items-center w-full max-md:max-w-full mb-10 justify-center"
    >
      <form @submit.prevent="submit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-[650px]">
          <div id="input" class="relative">
            <input
              type="text"
              id="floating_outlined"
              class="block w-full text-lg h-[50px] px-4 text-gray-900 bg-white rounded-[8px] border border-gray-700 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Nombre"
              v-model="form.nombre"
            />
            <label
              for="floating_outlined"
              class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Nombre
            </label>
          </div>

          <div id="input" class="relative">
            <input
              type="text"
              id="floating_outlined"
              class="block w-full text-lg h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Apellido Paterno"
              value=""
              v-model="form.apellidoP"
            />
            <label
              for="floating_outlined"
              class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Apellido Paterno
            </label>
          </div>

          <div id="input" class="relative">
            <input
              type="text"
              id="floating_outlined"
              class="block w-full text-lg h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Apellido Materno"
              value=""
              v-model="form.apellidoM"
            />
            <label
              for="floating_outlined"
              class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Apellido Materno
            </label>
          </div>

          <div id="input" class="relative">
            <input
              type="date"
              id="floating_outlined"
              class="block w-full text-lg h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Fecha de nacimiento"
              value=""
              v-model="form.fechaNacimiento"
            />
            <label
              for="floating_outlined"
              class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Fecha de nacimiento
            </label>
          </div>

          <div id="input" class="relative">
            <input
              type="text"
              id="floating_outlined"
              class="block w-full text-lg h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Edad"
              value=""
              v-model="form.edad"
            />
            <label
              for="floating_outlined"
              class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Edad
            </label>
          </div>

          <div id="input" class="relative">
            <!-- <input
            type="phone"
            id="floating_outlined"
            class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
            placeholder="Genero"
            value=""
          /> -->
            <select
              class="w-full mt-1 block p-4 border border-gray-800"
              v-model="form.genero"
            >
              <option value="">Seleccione una opción</option>
              <option
                v-for="genero in generos"
                :key="genero.name"
                :value="genero.id"
              >
                {{ genero.name }}
              </option>
            </select>
            <!-- <v-select
              :items="generos"
              item-title="name"
              item-value="id"
              v-model="form.genero"
            ></v-select> -->
            <label
              for="floating_outlined"
              class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Genero
            </label>
          </div>
          <div id="input" class="relative">
            <!-- <input
            type="phone"
            id="floating_outlined"
            class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
            placeholder="Genero"
            value=""
          /> -->
            <!-- <select class="w-full mt-1 block p-4 border border-gray-800">
              <option value="">Seleccione una opción</option>
              <option
                v-for="niv in nivelesEducativos"
                :key="niv.id"
                :value="niv.id"
              >
                {{ niv.nombre }}
              </option>
            </select> -->
            <v-select
              :items="nivelesEducativos"
              item-title="nombre"
              item-value="id"
              v-model="form.nivEdu"
            ></v-select>
            <label
              for="floating_outlined"
              class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Nivel educativo
            </label>
          </div>
          <div id="input" class="relative">
            <input
              type="phone"
              id="floating_outlined"
              class="block w-full text-lg h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Telefono"
              v-model="form.telefono"
            />
            <label
              for="floating_outlined"
              class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Telefono personal
            </label>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 border-sky-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
            type="submit"
          >
            <div class="flex gap-2 items-center font-bold text-lg">
              Guardar cambios
            </div>
          </button>
        </div>
      </form>
      <!-- <div class="flex justify-start">
          <h1 class="text-xl font-bold">Informacion de usuario</h1>
        </div>
        <div id="input" class="relative">
          <input
            type="phone"
            id="floating_outlined"
            class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
            placeholder="Telefono"
            value=""
          />
          <label
            for="floating_outlined"
            class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Telefono personal
          </label>
        </div> -->

      <!-- <div class="flex flex-col">
        <div class="flex justify-start mb-8">
          <h1 class="text-xl font-bold">Informacion de usuario</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div id="input" class="relative">
            <input
              type="email"
              id="floating_outlined"
              class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Email"
              value=""
            />
            <label
              for="floating_outlined"
              class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email
            </label>
          </div>
          <div id="input" class="relative">
            <input
              type="password"
              id="floating_outlined"
              class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Contraseña"
              value=""
            />
            <label
              for="floating_outlined"
              class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Contraseña
            </label>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
