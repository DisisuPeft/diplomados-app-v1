<script setup>
import { computed, onMounted } from "vue";
import { useAuthStore } from "../../store/auth/authstore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import LogoutButton from "../../components/LogoutButton.vue";
// import { useRouter } from "vue-router";

const router = useRouter();
const { getPerfil, getRole } = useAuthStore();
const showingNavigation = ref(false);
const showMenuDropdown = ref(false);

const user = computed(() => getPerfil);
const userRole = computed(() => getRole);
// console.log(userRole.value);
// const currentTab = ref("Dashboard")
// onMounted(async () => {
//   try {
//     await getUsuario();
//     // console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(getPerfil);
//   //   //   console.log(user);
//   //   const user = localStorage.getItem("user");
//   //   console.log(JSON.parse(user));
// });
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div
      :class="[
        showingNavigation
          ? 'hidden transition-transform transform -translate-x-full ease-in-out duration-300'
          : 'flex flex-col w-64 bg-white',
      ]"
    >
      <!-- Header con nombre de usuario -->
      <div class="flex items-center justify-center h-16 bg-sky-500">
        <span v-if="!showingNavigation" class="text-white font-bold uppercase">
          {{ user.profile?.nombre ?? "Sin nombre" }}
          {{ user.profile?.apellidoP ?? "Sin apellido" }}
        </span>
      </div>

      <!-- Menú de navegación -->
      <div class="flex flex-col flex-1 overflow-y-auto">
        <nav class="flex-1 px-2 py-4">
          <ul class="space-y-1.5">
            <!-- Perfil -->
            <li>
              <button
                class="flex items-center px-4 py-2 mt-2 rounded-full w-[230px] text-gray-700 hover:bg-sky-500 hover:text-white"
              >
                <!-- <Icon :path="mdiAccountSchool" :size="1.5" /> -->
                <p class="ml-2">Perfil</p>
              </button>
            </li>

            <!-- Calificaciones -->
            <li>
              <button
                class="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]"
              >
                <!-- <Icon :path="mdiSchool" :size="1.5" /> -->
                <p class="ml-2">Calificaciones</p>
              </button>
            </li>

            <!-- Calendario -->
            <li>
              <button
                class="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]"
              >
                <!-- <Icon :path="mdiCalendarMonth" :size="1.5" /> -->
                <p class="ml-2">Calendario</p>
              </button>
            </li>

            <!-- Preferencias -->
            <li>
              <button
                class="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]"
              >
                <!-- <Icon :path="mdiCog" :size="1.5" /> -->
                <p class="ml-2">Preferencias</p>
              </button>
            </li>

            <li v-if="userRole === 1">
              <button
                class="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]"
                @click="showMenuDropdown = !showMenuDropdown"
              >
                <p class="ml-2">Administrador</p>
              </button>

              <div
                :class="[
                  showMenuDropdown
                    ? 'flex justify-center'
                    : 'w-full overflow-hidden transition-[height] duration-300 hidden',
                ]"
              >
                <div class="hs-accordion-group ps-3 pt-2">
                  <ul>
                    <!-- Usuarios -->
                    <li class="hs-accordion" id="users-accordion-sub-1">
                      <button
                        @click="router.push('/admin/usuarios')"
                        class="flex items-center px-4 py-2 mt-2 rounded-full w-[230px] text-gray-700 hover:bg-sky-500 hover:text-white"
                      >
                        <p class="ml-2">Usuarios</p>
                      </button>
                    </li>

                    <!-- Configuración -->
                    <li>
                      <!-- <router-link
                          :to="{ name: 'admin.configuracion' }"
                          class="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-[230px]"
                        > -->

                      <p class="ml-2">Configuración</p>
                      <!-- </router-link> -->
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="flex flex-col flex-1 overflow-y-auto">
      <!-- Barra superior -->
      <div
        class="flex items-center justify-between h-16 bg-white border-b border-gray-200 shadow-lg"
      >
        <div class="flex items-center px-4">
          <button
            class="text-gray-500 focus:outline-none focus:text-gray-700"
            @click="showingNavigation = !showingNavigation"
          >
            <!-- <Icon :path="mdiMenu" :size="1.5" /> -->
          </button>
        </div>

        <!-- Botón de cerrar sesión -->
        <div class="flex items-center pr-10 p-[10px]">
          <LogoutButton />
        </div>
      </div>

      <!-- Contenido dinámico -->
      <div class="p-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
