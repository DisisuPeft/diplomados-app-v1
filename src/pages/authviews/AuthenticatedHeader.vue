<script setup>
import { computed, onMounted } from "vue";
import { useAuthStore } from "../../store/auth/authstore";
import { ref, watch, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";
import LogoutButton from "../../components/LogoutButton.vue";
import { onBeforeRouteUpdate } from "vue-router";
// import { useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const { getPerfil, getRole } = useAuthStore();
const showingNavigation = ref(true);
const showMenuDropdown = ref(false);
const switch_icon = ref("mdi mdi-chevron-down mr-2");
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
watch(showMenuDropdown, (value) => {
  if (value) {
    // console.log(value);
    switch_icon.value = "mdi mdi-chevron-up mr-2";
  } else {
    // console.log(value);
    return (switch_icon.value = "mdi mdi-chevron-down mr-2");
  }
});
// onBeforeRouteUpdate((to, from) => {
//   console.log("Cambio de ruta detectado:");
//   console.log("Ruta anterior:", from.path);
//   console.log("Ruta nueva:", to.path);
// });
// console.log(route);
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <!-- <div
      :class="[
        showingNavigation
          ? 'hidden transition-transform transform -translate-x-full ease-in-out duration-300'
          : 'flex flex-col w-[180px] bg-white',
      ]"
    > -->
    <div
      :class="[
        showingNavigation
          ? 'w-[70px] transition-transform transform ease-in-out duration-300 shadow-xl'
          : 'flex flex-col w-[200px] bg-white shadow-xl',
      ]"
    >
      <!-- Header con nombre de usuario -->
      <div class="flex items-center ml-2 h-[62px] shadow-xl">
        <!-- <span
          v-if="!showingNavigation"
          class="text-white font-bold uppercase text-center"
        >
          {{ user.profile?.nombre ?? "Sin nombre" }}
          {{ user.profile?.apellidoP ?? "Sin apellido" }}
        </span> -->
        <div class="flex items-center px-4">
          <!-- class="text-gray-500 focus:outline-none focus:text-gray-700" -->
          <!-- <v-btn
            icon="mdi-menu"
            @click="showingNavigation = !showingNavigation"
          > -->
          <!-- <Icon :path="mdiMenu" :size="1.5" /> -->
          <!-- </v-btn> -->
          <v-btn
            density="compact"
            elevation="0"
            icon="mdi-menu"
            @click="showingNavigation = !showingNavigation"
          ></v-btn>
        </div>
      </div>

      <!-- Menú de navegación -->
      <div class="flex flex-col flex-1 overflow-y-auto">
        <nav class="flex-1 px-2 py-4">
          <ul class="space-y-1.5">
            <li>
              <!-- <template v-if="showingNavigation"> -->
              <button
                :class="[
                  'p-16-semibold flex size-full p-[10px] group font-semibold rounded-full bg-cover hover:bg-sky-100 hover:shadow-inner',
                  $route.path ===
                  `/university/${
                    user.profile?.nombre + user.profile?.apellidoP
                  }/${user.id}`
                    ? 'bg-gradient-to-r from-sky-400 to-sky-600 text-white'
                    : 'text-gray-700',
                ]"
                @click="
                  router.push(
                    `/university/${
                      user.profile?.nombre + user.profile?.apellidoP
                    }/${user.id}`
                  )
                "
                title="Perfil"
              >
                <template v-if="showingNavigation">
                  <div class="">
                    <i class="mdi mdi-account text-4xl text-center"></i>
                  </div>
                </template>
                <template v-else-if="!showingNavigation">
                  <i class="mdi mdi-account"></i>
                  <p class="ml-2">Perfil</p>
                </template>
              </button>
              <!-- </template> -->
            </li>
            <!-- <li>
              <button
                class="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-full"
              >
                <p class="ml-2">Calificaciones</p>
              </button>
            </li>
            <li>
              <button
                class="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-sky-500 hover:text-white rounded-full w-full"
              >
                <p class="ml-2">Calendario</p>
              </button>
            </li> -->
            <!-- account-school -->
            <li v-if="userRole === 1 || 2">
              <button
                :class="[
                  'p-16-semibold flex size-full p-[10px] group font-semibold rounded-full bg-cover hover:bg-sky-100 hover:shadow-inner',
                  $route.path === '/teacher'
                    ? 'bg-gradient-to-r from-sky-400 to-sky-600 text-white'
                    : 'text-gray-700',
                ]"
                title="Gestión Académica"
                @click="router.push('/teacher')"
              >
                <template v-if="showingNavigation">
                  <div class="">
                    <i class="mdi mdi-account-school text-4xl text-start"></i>
                  </div>
                  <!-- <p class="ml-2">Calificaciones</p> -->
                </template>
                <template v-else-if="!showingNavigation">
                  <i class="mdi mdi-account-school"></i>
                  <p class="ml-2">Gestión Académica</p>
                </template>
              </button>
            </li>
            <li>
              <button
                :class="[
                  'p-16-semibold flex size-full p-[10px] group font-semibold rounded-full bg-cover hover:bg-sky-100 hover:shadow-inner',
                  $route.path === '/preference'
                    ? 'bg-gradient-to-r from-sky-400 to-sky-600 text-white'
                    : 'text-gray-700',
                ]"
                @click="router.push('/preference')"
                title="Preferencias"
              >
                <template v-if="showingNavigation">
                  <div class="">
                    <i class="mdi mdi-cog text-4xl text-center"></i>
                  </div>
                  <!-- <p class="ml-2">Calificaciones</p> -->
                </template>
                <template v-else-if="!showingNavigation">
                  <i class="mdi mdi-cog"></i>
                  <p class="ml-2">Preferencias</p>
                </template>
              </button>
            </li>

            <li v-if="userRole === 1">
              <button
                :class="[
                  'p-16-semibold flex size-full p-[9px] group font-semibold rounded-full bg-cover hover:bg-sky-100 hover:shadow-inner',
                  showMenuDropdown
                    ? 'bg-gradient-to-r from-sky-400 to-sky-600 text-white'
                    : 'text-gray-700',
                ]"
                @click="showMenuDropdown = !showMenuDropdown"
                title="Administrador"
              >
                <template v-if="showingNavigation">
                  <div class="">
                    <i class="mdi mdi-account-cog text-4xl"></i>
                    <!-- <img
                      src="../../assets/user.png"
                      class="h-[20px] w-[20px]"
                      alt="user"
                    /> -->
                  </div>
                  <!-- <p class="ml-2">Calificaciones</p> -->
                </template>
                <template v-else-if="!showingNavigation">
                  <div class="flex items-center">
                    <i :class="switch_icon"></i>
                    <span>Administrador</span>
                  </div>
                </template>
              </button>

              <div
                :class="[
                  showMenuDropdown
                    ? 'flex flex-col w-full bg-gray-300 rounded-lg mt-2'
                    : 'w-[200px] overflow-hidden transition-[height] duration-300 hidden',
                ]"
              >
                <!-- text-gray-700 hover:bg-sky-500 hover: -->
                <div class="pt-2">
                  <ul>
                    <li class="" id="">
                      <button
                        title="Usuarios"
                        @click="router.push('/admin/usuarios')"
                        :class="[
                          'p-16-semibold flex size-full p-[15px] group font-semibold rounded-full bg-cover hover:bg-sky-100 hover:shadow-inner',
                          $route.path === '/admin/usuarios'
                            ? 'bg-gradient-to-r from-sky-400 to-sky-600 text-white'
                            : 'text-gray-700',
                        ]"
                      >
                        <template v-if="showingNavigation">
                          <i class="mdi mdi-account-group text-2xl"></i>
                          <!-- <p class="ml-2">Usuarios</p> -->
                        </template>
                        <template v-else-if="!showingNavigation">
                          <i class="mdi mdi-account-group text-xl"></i>
                          <p class="ml-2">Usuarios</p>
                        </template>
                      </button>
                    </li>

                    <li class="hs-accordion" id="">
                      <button
                        @click="router.push('#')"
                        class="p-16-semibold flex size-full p-[15px] group font-semibold rounded-full bg-cover hover:bg-sky-100 hover:shadow-inner focus:bg-gradient-to-r from-sky-400 to-sky-600 focus:text-white text-gray-700 transition-all ease-linear"
                      >
                        <template v-if="showingNavigation">
                          <i class="mdi mdi-cog text-2xl"></i>
                          <!-- <p class="ml-2">Usuarios</p> -->
                        </template>
                        <template v-else-if="!showingNavigation">
                          <i class="mdi mdi-cog text-xl"></i>
                          <p class="ml-2">Configuración</p>
                        </template>
                        <!-- <p class="ml-2">Configuración</p> -->
                      </button>
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
        <!-- <div class="flex items-center px-4"> -->
        <!-- class="text-gray-500 focus:outline-none focus:text-gray-700" -->
        <!-- <v-btn
            icon="mdi-menu"
            @click="showingNavigation = !showingNavigation"
          > -->
        <!-- <Icon :path="mdiMenu" :size="1.5" /> -->
        <!-- </v-btn> -->
        <!-- <v-btn
            density="compact"
            elevation="0"
            icon="mdi-menu"
            @click="showingNavigation = !showingNavigation"
          ></v-btn>
        </div> -->
        <div class="hidden md:flex flex-grow justify-start ml-10">
          <ul class="flex space-x-8">
            <li>
              <router-link
                class="text-black hover:decoration-blue-500 transition duration-300 text-lg"
                :to="'/dashboard'"
              >
                Inicio
              </router-link>
            </li>
            <li v-if="userRole === 1 || 2 || 3">
              <router-link
                class="text-black hover:decoration-blue-500 transition duration-300 text-lg"
                :to="'/courses'"
              >
                Cursos
              </router-link>
            </li>
          </ul>
        </div>
        <div class="flex items-center pr-10 p-[10px]">
          <span class="text-gray-700 font-bold uppercase text-center">
            {{ user.profile?.nombre ?? "Sin nombre" }}
            {{ user.profile?.apellidoP ?? "Sin apellido" }}
          </span>
        </div>
        <!-- Botón de cerrar sesión -->
        <div class="flex items-center pr-10 p-[10px]">
          <LogoutButton>Logout</LogoutButton>
        </div>
      </div>

      <!-- Contenido dinámico -->
      <div class="p-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
