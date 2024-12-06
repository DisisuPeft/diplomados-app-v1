<script setup>
import { useRouter } from "vue-router";
import Modal from "../../components/Modal.vue";
import { ref } from "vue";

const show = ref(false);
const menu = ref(null);
const showingNavigationDropdown = ref(false);
const router = useRouter();

// const navigateMenu = () => {
//   // console.log(router);
//   router.push("/"); // Simplemente navega.
// };

// console.log(menu)
</script>

<template>
  <!-- flex flex-col h-auto -->
  <div class="flex flex-col h-auto">
    <header>
      <nav class="w-full bg-white shadow-lg py-2 dark:bg-body-dark z-20 fixed">
        <div class="container mx-auto flex justify-start items-center">
          <div class="flex-shrink-0 ml-2 ma-4">
            <div class="text-center text-gray-800 mt-1">
              <div>
                <button @click="router.push('/')">
                  <img
                    src="/src/assets/img/logobgwhite.png"
                    alt="logo"
                    style="width: 80px; height: 90px"
                  />
                </button>
              </div>
            </div>
          </div>
          <!-- {/* nombre escuela, habria que ver una forma de diseñarlo y ver que venga con el logo, no full copia*/} -->
          <div class="flex justify-center mr-10">
            <div class="fill-current text-gray-800 mt-1">
              <!-- {/* <img class="rounded-md" src={logo} alt="logo"/> */} -->
              <p class="text-[30px]">
                Academia Nexus
                <!-- {/*"Academia Nexus" – Sugiere una conexión entre diferentes áreas de conocimiento.*/} -->
              </p>
            </div>
          </div>
          <!-- {/* Menu para pantallas grandes */} -->
          <div class="hidden md:flex flex-grow justify-start ml-16 mt-2">
            <ul class="flex space-x-8">
              <li>
                <a
                  class="text-white hover:text-blue-400 transition duration-300 text-md lg:text-lg"
                  href="#"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  class="text-white hover:text-blue-400 transition duration-300 text-md lg:text-lg"
                  href="#"
                >
                  Cursos
                </a>
              </li>
            </ul>
          </div>
          <!-- {/* Menu para pantallas pequeñas */} -->
          <!-- <div class="-me-2 flex items-center sm:hidden">
              <button
                @Click="showingNavigationDropdown = !showingNavigationDropdown"
                class="inline-flex items-center ml-5 justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    :class="!showingNavigationDropdown ? 'inline-flex' : 'hidden'"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    :class="
                      showingNavigationDropdown ? 'inline-flex' : 'hidden'
                    "
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div> -->
          <!-- <div
              :class="showingNavigationDropdown ? 'block' : 'hidden' +
                ' absolute top-full right-0 w-[200px] bg-white sm:hidden shadow-lg'"
              ref="menu"
            >
              <div class="pt-2 pb-3 space-y-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                >
                  Inicio
                </a>
              </div>

              <div class="pt-4 pb-1 border-t border-gray-200">
                <div class="mt-3 space-y-1">
                  <button class="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                    Cursos
                  </button>
                  {/* <button
                    class="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                    onClick={openModal}
                  >
                    Iniciar sesión
                  </button> */}
                </div>
              </div>
            </div> -->
          <div class="hidden md:flex lg:justify-center mr-10 mt-[10px]">
            <button
              @click="router.push('/auth/login')"
              class="rounded-md flex items-center p-4"
            >
              <p class="text-md lg:text-lg">Iniciar sesión</p>
            </button>
            <button
              @click="router.push('/auth/registro')"
              class="rounded-md flex items-center p-4 bg-blue-600"
            >
              <p class="text-white text-md lg:text-lg">Crear cuenta</p>
            </button>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
