<script setup>
import { ref, watch } from "vue";
import Loader from "../../../components/Loader.vue";
import TextInput from "../../../components/TextInput.vue";
import InputLabel from "../../../components/InputLabel.vue";
import PrimaryButton from "../../../components/PrimaryButton.vue";

const props = defineProps({
  reset: {
    type: Boolean,
    default: false,
  },
});

const form = ref({
  nombre: "",
  apellidoP: "",
  apellidoM: "",
  edad: null,
  fecha_nacimiento: "",
  sexo: "",
  nivel_educativo: "",
  telefono: "",
  email: "",
  password: "",
  password_confirmation: "",
  role: null,
});
const show = ref(false);
const processing = ref(false);

watch(
  () => props.reset,
  (newValue) => {
    if (newValue) {
      resetForm();
    }
  }
);

const emit = defineEmits(["form:login"]);

const submit = () => {
  let formData = new FormData();
  for (let i in form.value) {
    formData.append(i, form.value[i]);
  }
  emit("form:login", formData);
};

const resetForm = () => {
  form.value = {
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    edad: null,
    fecha_nacimiento: "",
    sexo: "",
    nivel_educativo: "",
    telefono: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: null,
  };
};
</script>

<template>
  <form @submit.prevent="submit">
    <!-- <div>
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
    </div> -->

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
    <!-- {/* quitarrr!!!! */}
      {/* <div className="mt-4">
        <InputLabel htmlFor="type_user" value="Rol de usuario"/> -->

    <!-- <select id="my_type_user" className="w-full mt-1 block" value={form.role || ""} onChange={(e) => handleFormChange("role", parseInt(e.target.value, 10))}>
          <option value="">Seleccione una opción</option>
          {roles.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select> -->
    <!-- </div> */} -->
    <div className="flex items-center justify-end mt-4">
      <PrimaryButton className="ms-4" :disabled="processing">
        Ingresar
      </PrimaryButton>
    </div>
  </form>
  <Loader :visible="show"></Loader>
</template>
