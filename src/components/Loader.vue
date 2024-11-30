<script setup>
import Modal from "./Modal.vue";
import { ref } from "vue";

defineProps({
  visible: Boolean,
});
</script>

<template>
  <Modal :show="visible" :transparent="true">
    <!-- <div class="flex justify-center p-[10px]">
      <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
        <circle
          class="pl__ring pl__ring--a"
          cx="120"
          cy="120"
          r="105"
          fill="none"
          stroke="#000"
          strokeWidth="20"
          strokeDasharray="0 660"
          strokeDashoffset="-330"
          strokeLinecap="round"
        ></circle>
        <circle
          class="pl__ring pl__ring--b"
          cx="120"
          cy="120"
          r="35"
          fill="none"
          stroke="#000"
          strokeWidth="20"
          strokeDasharray="0 220"
          strokeDashoffset="-110"
          strokeLinecap="round"
        ></circle>
        <circle
          class="pl__ring pl__ring--c"
          cx="85"
          cy="120"
          r="70"
          fill="none"
          stroke="#000"
          strokeWidth="20"
          strokeDasharray="0 440"
          strokeLinecap="round"
        ></circle>
        <circle
          class="pl__ring pl__ring--d"
          cx="155"
          cy="120"
          r="70"
          fill="none"
          stroke="#000"
          strokeWidth="20"
          strokeDasharray="0 440"
          strokeLinecap="round"
        ></circle>
      </svg>
    </div> -->
    <div class="flex justify-center items-center">
      <div
        class="w-20 h-20 border-8 border-t-blue-700 border-white rounded-full animate-spin"
      ></div>
    </div>
  </Modal>
</template>

<style>
/* .container {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  height: 96px;
  width: 96px;
  animation: rotate_3922 1.2s linear infinite;
  background-color: #9b59b6;
  background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
}

.container span {
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: #9b59b6;
  background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
}

.container span:nth-of-type(1) {
  filter: blur(5px);
}

.container span:nth-of-type(2) {
  filter: blur(10px);
}

.container span:nth-of-type(3) {
  filter: blur(25px);
}

.container span:nth-of-type(4) {
  filter: blur(50px);
}

.container::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: #fff;
  border: solid 5px #ffffff;
  border-radius: 50%;
}

@keyframes rotate_3922 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
} */
</style>
