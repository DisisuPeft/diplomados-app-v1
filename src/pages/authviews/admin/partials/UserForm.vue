<script setup>
import { ref, watch } from "vue";
// import Loader from "../../../components/Loader.vue";
// import TextInput from "../../../components/TextInput.vue";
// import InputLabel from "../../../components/InputLabel.vue";
// import PrimaryButton from "../../../components/PrimaryButton.vue";
import Loader from "../../../../components/Loader.vue";
import TextInput from "../../../../components/TextInput.vue";
import InputLabel from "../../../../components/InputLabel.vue";
import PrimaryButton from "../../../../components/PrimaryButton.vue";
import NumberInput from "../../../../components/NumberInput.vue";

const props = defineProps({
  reset: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Object,
  },
});

const form = ref({
  nombre: props.selected ? props.selected.profile.nombre : "",
  apellidoP: "",
  apellidoM: "",
  edad: null,
  fechaNacimiento: "",
  genero: "",
  nivEdu: "",
  telefono: "",
  email: "",
  password: "",
  password_confirmation: "",
  role: null,
});
const show = ref(false);
const processing = ref(false);
const roles = ref([
  { id: 1, name: "Administrador" },
  { id: 2, name: "Docente" },
  { id: 3, name: "Estudiante" },
]);
const generos = ref([
  { id: 1, name: "Femenino" },
  { id: 2, name: "Masculino" },
  { id: 3, name: "Prefiero no especificar" },
]);

watch(
  () => props.reset,
  (newValue) => {
    if (newValue) {
      resetForm();
    }
  }
);

const emit = defineEmits(["form:user"]);

const submit = () => {
  let formData = new FormData();
  for (let i in form.value) {
    formData.append(i, form.value[i]);
  }
  emit("form:user", formData);
};

const resetForm = () => {
  form.value = {
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    edad: null,
    fechaNacimiento: "",
    genero: "",
    nivelEdu: "",
    telefono: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: null,
  };
};
// console.log(props.selected);
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <InputLabel for="name" value="Nombre" />

      <TextInput
        id="name"
        name="name"
        v-model="form.nombre"
        class="mt-1 block w-full"
        autoComplete="nombre"
        required
      />
    </div>
    <div>
      <InputLabel for="apellido" value="Primer apellido" />

      <TextInput
        id="apellido"
        name="p_apellido"
        v-model="form.apellidoP"
        class="mt-1 block w-full"
        autoComplete="apellidoP"
        required
      />
    </div>
    <div>
      <InputLabel for="apellidoM" value="Segundo apellido" />

      <TextInput
        id="apellidoM"
        name="m_apellido"
        v-model="form.apellidoM"
        class="mt-1 block w-full"
        autoComplete="apellidoM"
      />
    </div>
    <div>
      <InputLabel for="edad" value="Edad" />

      <TextInput
        id="edad"
        name="edad"
        v-model="form.edad"
        class="mt-1 block w-full"
        autoComplete="edad"
        type="number"
      />
    </div>
    <div>
      <InputLabel for="fecha_nacimiento" value="Fecha de nacimiento" />

      <TextInput
        id="fecha_nacimiento"
        name="fecha_nacimiento"
        v-model="form.fechaNacimiento"
        class="mt-1 block w-full"
        autoComplete="fecha_nacimiento"
        type="date"
      />
    </div>
    <div className="mt-4">
      <InputLabel for="rol" value="Rol de usuario" />

      <select
        v-model="form.genero"
        class="border-2 w-full mt-1 block p-2 border-gray-300"
      >
        <option value="">Seleccione una opción</option>
        <option v-for="genero in generos" :key="genero.name">
          {{ genero.name }}
        </option>
      </select>
    </div>
    <div>
      <InputLabel for="nivel" value="Nivel educativo" />

      <TextInput
        id="nivel"
        name="nivel"
        v-model="form.nivEdu"
        class="mt-1 block w-full"
        autoComplete="nivel"
      />
    </div>
    <div>
      <InputLabel for="telefono" value="Telefono" />

      <TextInput
        id="telefono"
        name="telefono"
        v-model="form.telefono"
        class="mt-1 block w-full"
        autoComplete="telefono"
      />
    </div>
    <div>
      <InputLabel for="email" value="Email" />

      <TextInput
        id="email"
        type="email"
        name="email"
        v-model="form.email"
        class="mt-1 block w-full"
        autoComplee="username"
        required
      />
    </div>

    <div>
      <InputLabel for="password" value="Contraseña" />

      <TextInput
        id="password"
        type="password"
        name="password"
        v-model="form.password"
        class="mt-1 block w-full"
        autoComplete="new-password"
        required
      />
    </div>

    <div>
      <InputLabel for="password_confirmation" value="Confirmar contraseña" />

      <TextInput
        id="password_confirmation"
        type="password"
        name="password_confirmation"
        v-model="form.password_confirmation"
        class="mt-1 block w-full"
        autoComplete="new-password"
        required
      />
    </div>

    <div className="mt-4">
      <InputLabel for="type_user" value="Rol de usuario" />

      <select
        v-model="form.role"
        class="border-2 w-full mt-1 block p-2 border-gray-300"
      >
        <option value="">Seleccione una opción</option>
        <option v-for="role in roles" :key="role.id">{{ role.name }}</option>
      </select>
    </div>
    <div className="flex items-center justify-end mt-4">
      <PrimaryButton className="ms-4" :disabled="processing">
        Registrar
      </PrimaryButton>
    </div>
  </form>
  <Loader :visible="show"></Loader>
</template>
