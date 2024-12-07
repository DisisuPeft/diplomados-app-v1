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
// Las password las voy a manejar en un componente aparte, igual creo que el email
const form = ref({
  id: props.selected ? props.selected.id : null,
  nombre: props.selected ? props.selected.profile.nombre : "",
  apellidoP: props.selected ? props.selected.profile.apellidoP : "",
  apellidoM: props.selected ? props.selected.profile.apellidoM : "",
  edad: props.selected ? props.selected.profile.edad : null,
  fechaNacimiento: props.selected ? props.selected.profile.fechaNacimiento : "",
  genero: props.selected ? props.selected.profile.genero : null,
  nivEdu: props.selected ? props.selected.profile.nivEdu : null,
  telefono: props.selected ? props.selected.profile.telefono : "",
  email: props.selected ? props.selected.email : "",
  password: "",
  role: props.selected ? props.selected.roleID.map((role) => role.id) : [],
});
// console.log(form.value);
const show = ref(false);
const processing = ref(false);
const roles = ref([
  { id: 1, name: "Administrador" },
  { id: 2, name: "Docente" },
  { id: 3, name: "Estudiante" },
]);
let generos = ref([
  { id: 1, name: "Femenino" },
  { id: 2, name: "Masculino" },
  { id: 3, name: "No especificar" },
]);

const nivelesEducativos = [
  { id: 1, nombre: "Preescolar" },
  { id: 2, nombre: "Primaria" },
  { id: 3, nombre: "Secundaria" },
  { id: 4, nombre: "Preparatoria" },
  { id: 5, nombre: "Licenciatura" },
  { id: 6, nombre: "Maestría" },
  { id: 7, nombre: "Doctorado" },
];

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
  let type = props.selected ? "edit" : "create";
  for (let i in form.value) {
    formData.append(i, form.value[i]);
  }
  emit("form:user", [formData, type]);
};

const resetForm = () => {
  form.value = {
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    edad: 0,
    fechaNacimiento: "",
    genero: "",
    nivEdu: 0,
    telefono: "",
    email: "",
    password: "",
    role: [],
  };
};
// console.log(form.value);
console.log(props.selected);
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

    <!-- <div>
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
    </div> -->
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
      <InputLabel for="rol" value="Genero" />

      <select
        v-model="form.genero"
        class="w-full mt-1 block p-4 border border-gray-800"
      >
        <option value="">Seleccione una opción</option>
        <option v-for="genero in generos" :key="genero.name" :value="genero.id">
          {{ genero.name }}
        </option>
      </select>
      <!-- <v-select
        :items="generos"
        v-model="form.genero"
        item-title="name"
        item-value="id"
      >
      </v-select> -->
    </div>
    <div>
      <InputLabel for="nivel" value="Nivel educativo" />

      <v-select
        :items="nivelesEducativos"
        item-title="nombre"
        item-value="id"
        v-model="form.nivEdu"
        chips
      >
      </v-select>
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

    <div className="mt-4">
      <InputLabel for="type_user" value="Rol de usuario" />

      <!-- <select
        v-model="form.role"
        multiple
        class="border-2 w-full mt-1 block p-2 border-gray-300"
      >
        <option value="">Seleccione una opción</option>
        <option v-for="role in roles" :key="role.id" :value="role.id">
          {{ role.name }}
        </option>
      </select> -->
      <v-select
        multiple
        :items="roles"
        item-title="name"
        item-value="id"
        v-model="form.role"
        chips
      ></v-select>
    </div>
    <div className="flex items-center justify-end mt-4">
      <PrimaryButton className="ms-4" :disabled="processing">
        {{ props.selected ? "Editar" : "Crear" }}
      </PrimaryButton>
    </div>
  </form>
  <!-- <div class="flex justify-center">
    <p>In</p>
  </div> -->
  <Loader :visible="show"></Loader>
</template>
