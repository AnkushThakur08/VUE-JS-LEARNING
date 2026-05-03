<script setup lang="ts">
import { computed, inject, type Ref } from "vue";
// import { themeStyle } from "./colorSchema";

// const props = defineProps<{
//   theme: "light" | "dark";
// }>();

const theme = inject<Ref<"light" | "dark">>("theme");

if(!theme) {
  throw new Error("Theme not provided");
}

const themeClass = computed(() => theme.value === "light" ? 'light-theme' : 'dark-theme');

</script>

<template>
  <div :class="themeClass">Header Component</div>
</template>

<style></style>
