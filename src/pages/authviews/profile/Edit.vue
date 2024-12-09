<script setup>
import { onMounted, ref } from "vue";
import AuthenticatedHeader from "../AuthenticatedHeader.vue";
import { useRoute, useRouter } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
import { useProfileStore } from "../../../store/profile/ProfileStore";
import { message, Toast } from "../../../alerts/alerts";
import ProfileEdit from "./partials/ProfileEdit.vue";
const route = useRoute();
const router = useRouter();
const profilestore = useProfileStore();
const profile = ref({});
// console.log(route.params);
onMounted(async () => {
  try {
    const res = await profilestore.getPerfil(parseInt(route.params.id));
    profile.value = res.profile;
    // console.log(profile.value);
  } catch (error) {
    // console.log(error);
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
      <ProfileEdit />
    </section>
  </AuthenticatedHeader>
</template>
