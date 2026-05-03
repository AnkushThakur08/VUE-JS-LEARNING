<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toast-notification";

const counter = ref<number>(0);
const toast = useToast();

const incrementCounter = () => {
  console.log("we are here");
  if (counter.value >= 10) {
    return toast.error("Max value reached");
  }
  return counter.value++;
};

const decrementCounter = () => {
  if (counter.value <= 1) {
    return toast.error("Minimum value reached");
  }
  return counter.value--;
};
</script>

<template>
  <h1>Counter App</h1>
  <button type="button" @click="incrementCounter()" :disabled="counter >= 10">Increment Counter</button>
  <button type="button" @click="decrementCounter()" :disabled="counter <= 1">Decrement Counter</button>

  {{ counter }}
</template>

<style></style>
