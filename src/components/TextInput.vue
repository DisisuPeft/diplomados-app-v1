<script setup>
import { onMounted, ref } from "vue";

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

defineEmits(["update:modelValue"]);

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute("autofocus")) {
    input.value.focus();
  }
});

defineExpose({ focus: () => input.value.focus() });
// border-gray-300 focus:border-sky-500 focus:ring-indigo-500 rounded-md shadow-sm
//border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm border border-4
</script>

<template>
  <input
    class="bg-white border boder-2 border-gray-300 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 transition ease-in-out duration-150 w-full"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="input"
  />
</template>

<style scoped></style>
