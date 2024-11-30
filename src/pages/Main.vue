<script setup>
import Header from "./partials/Header.vue";
import { useAuthStore } from "../store/auth/authstore";
</script>

<template>
  <Header></Header>
  <main class="pt-[110px]">
    <div className="flex h-auto">
      <section className="w-1/2 flex justify-center">
        <div className="flex flex-col">
          <div className="w-full bg-[#050038] h-1/2">
            <div className="flex justify-center m-[50px]">
              <h2
                className="p-[100px] absolute transform text-white text-[50px] font-serif"
              >
                Formación especializada para un futuro brillante
              </h2>
            </div>
          </div>
          <div className="bg-white h-1/2 flex justify-center">
            <div className="flex items-center justify-center">
              <p className="font-sans p-[150px] text-[20px] mt-2">
                En nuestra universidad, nos especializamos en ofrecer diplomados
                diseñados para impulsar tu educación y abrir nuevas
                oportunidades en el mundo laboral.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-1/2">
        <div className="rounded-xl text-center w-full">
          <div className="relative w-full h-[840px] overflow-hidden">
            <!-- <Image src="/img/profesionales2.jpeg" alt="Imagen del menu"
            width={900} height={500} style={{ objectFit: "cover", width: "100%", height: "100%" }}
            /> -->
            <img
              src="/src/assets/img/profesionales2.jpeg"
              alt="imagenpersonas"
              style="object-fit: cover; width: 100%; height: 100%"
            />
          </div>
        </div>
      </section>

      <!-- <div className="w-1/2 flex justify-center"> -->
      <!-- <Image src="/img/mainimage.png" alt="Imagen del menu" width={900}
        height={200} style={{ objectFit: "cover", width: "100%", height: "50%" }}
        /> -->
      <!-- </div> -->
    </div>
  </main>
  <!-- <Footer></Footer> -->
</template>
