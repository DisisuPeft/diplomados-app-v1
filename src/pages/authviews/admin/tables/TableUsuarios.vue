<script setup>
import { message, Toast } from "../../../../alerts/alerts";
import { useUsuariosAdmin } from "../../../../store/admin/usuariosadmin";
import { computed, onMounted } from "vue";

const store = useUsuariosAdmin();

const users = computed(() => store.getUsuariosAdmin);
// console.log(users);
const emit = defineEmits(["row"]);
const selectRow = (row) => {
  emit("row", row);
};
</script>

<template>
  <section
    class="flex items-center justify-center max-w-[90%] bg-white shadow-xl rounded-md"
  >
    <!-- <div class="flex justify-center"> -->
    <table class="border-collapse border border-slate-500">
      <thead>
        <tr>
          <th class="border border-slate-600 p-4">Nombre</th>
          <th class="border border-slate-600 p-4">Apellido Paterno</th>
          <th class="border border-slate-600 p-4">Apellido Materno</th>
          <th class="border border-slate-600 p-4">Edada</th>
          <th class="border border-slate-600 p-4">Fecha de nacimiento</th>
          <th class="border border-slate-600 p-4">Genero</th>
          <th class="border border-slate-600 p-4">Nivel educativo</th>
          <th class="border border-slate-600 p-4">Telefono</th>
          <th class="border border-slate-600 p-4">Email</th>
          <th class="border border-slate-600 p-4">Rol</th>
        </tr>
      </thead>
      <tbody class="">
        <tr
          v-for="user in users"
          :key="user.id"
          :class="['hover:bg-gray-300']"
          @click="selectRow(user)"
        >
          <td class="border border-slate-700 p-4">
            {{ user.profile?.nombre ?? "N/A" }}
          </td>
          <td class="border border-slate-700 p-4">
            {{ user.profile?.apellidoP ?? "N/A" }}
          </td>
          <td class="border border-slate-700 p-4">
            {{ user.profile?.apellidoM ?? "N/A" }}
          </td>
          <td class="border border-slate-700 p-4">
            {{ user.profile?.edad ?? "N/A" }}
          </td>
          <td class="border border-slate-700 p-4">
            {{ user.profile?.fechaNacimiento ?? "N/A" }}
          </td>
          <td class="border border-slate-700 p-4">
            {{ user.profile?.genero ?? "N/A" }}
          </td>
          <td class="border border-slate-700 p-4">
            {{ user.profile?.nivEdu ?? "N/A" }}
          </td>
          <td class="border border-slate-700 p-4">
            {{ user.profile?.telefono ?? "N/A" }}
          </td>
          <td class="border border-slate-700 p-4">
            {{ user.email ?? "N/A" }}
          </td>
          <td class="border border-slate-700 p-4">
            <div v-for="role in user.roleID" :key="role.id">
              {{ role.name }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- </div> -->
  </section>
</template>
