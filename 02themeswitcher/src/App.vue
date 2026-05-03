<script setup lang="ts">
import { computed, provide, ref } from "vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
// import { themeStyle } from "./components/colorSchema";

const theme = ref<"light" | "dark">("light");

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
};

const themeClass = computed(() => theme.value === "light" ? 'light-theme' : 'dark-theme');

provide("theme", theme);

</script>

<template>
  <!-- <div :style="themeStyle[theme]"> -->
  <div>
    <div :class="themeClass">
      <h1>Theme Switcher App</h1>
      <button @click="toggleTheme">
        {{ theme === "light" ? "Switch to Dark" : "Switch to Light" }}
      </button>
    </div>

    <!-- <Header :theme="theme" /> -->

    <!-- <Main :theme="theme" /> -->

    <Header />
    <Main  />

  </div>
</template>
