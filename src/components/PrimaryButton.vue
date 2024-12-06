<script setup>
defineProps({
  className: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
});
</script>

<template>
  <button class="bg-sky-500 px-4 py-4 rounded-md text-white hover:bg-sky-700">
    <slot></slot>
  </button>
</template>

<style scoped></style>
