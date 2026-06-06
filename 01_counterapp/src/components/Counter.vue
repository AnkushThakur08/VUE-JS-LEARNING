<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const handleIncrement = () => {
  console.log("we are here");
  count.value = count.value++;
};

const handleDecrement = () => {
  count.value = count.value - 1;
};

const handleReset = () => {
  count.value = 0;
};
</script>

<template>
  <h1>This is a Counter Application</h1>

  {{ count }}

  <div class="funcBtn">
    <button @click="handleIncrement">Increment Counter</button>

    <button @click="handleDecrement">Decrement Counter</button>

    <button @click="handleReset">Reset Counter</button>
  </div>
</template>

<style>

.funcBtn{
    gap:20px;
    display: flex;
    justify-content: center;
    gap: 20px;
}

</style>
