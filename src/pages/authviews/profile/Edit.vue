<script setup>
import { computed, onMounted, ref } from "vue";
import AuthenticatedHeader from "../AuthenticatedHeader.vue";
import { useRoute, useRouter } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
import { useProfileStore } from "../../../store/profile/ProfileStore";
import { message, Toast } from "../../../alerts/alerts";
import ProfileEdit from "./partials/ProfileEdit.vue";

const route = useRoute();
const router = useRouter();
const profilestore = useProfileStore();

const update_profile = async (e) => {
  try {
    await profilestore.updatePerfil(profilestore.Profile.user, e);
    Toast("Usuario editado con exito", "success");
    setTimeout(() => {
      router.go(0);
    }, 1000);
  } catch (error) {
    Toast(
      "Ocurrio un error al intentar actualizar el usuario. Notifique en el apartado de soporte"
    );
  }
};
// console.log(route.params);
onMounted(async () => {
  // const isReloaded =
  //   performance.getEntriesByType("navigation")[0].type === "reload";
  // console.log(isReloaded);
  // console.log(profilestore.Profile.user);
  try {
    await profilestore.getPerfil(parseInt(route.params.id));
    // console.log("se ejecuta try");
    // console.log(profilestore.Profile);
  } catch (error) {
    // console.log("se ejecuta catch");
    if (error.status === 404) {
      router.push("/dashboard");
      Toast(
        "El usuario no existe, informa en el apartado de soporte",
        "warning"
      );
    }
  }
});
</script>
<template>
  <AuthenticatedHeader>
    <div
      class="flex items-center justify-start p-2 bg-white rounded-md mb-4 w-full"
    >
      <h1 class="font-bold text-2xl p-4">Perfil</h1>
    </div>
    <section class="max-w-[700px] mx-auto bg-white rounded-md shadow-2xl">
      <ProfileEdit
        :user="profilestore.Profile"
        @form:profile="update_profile"
      />
    </section>
  </AuthenticatedHeader>
</template>
