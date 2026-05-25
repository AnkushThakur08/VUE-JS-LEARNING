<script setup lang="js">
import { ref } from 'vue';

const isDisabled = false;
const id = "heading"
const id2 = "heading2"
const myName = "Ankush Thakur"
const mylastName ="Thakur"
const h1ID = "heading"
const isButtonDisabled = true

const theme =ref("light")

const handleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark"
}

console.log("This is my name: ", theme);


</script>

<template>
  <div>

    <h1 :id="h1ID"> My name is {{ myName }}</h1>

    <h2 v-text="mylastName"></h2>

    <button :disabled="isButtonDisabled">Click me</button>

    <button :disabled="isDisabled">Click me</button>
    <div :id="id">This is Ankush Paragraph</div>

    <div :id="isDisabled ? id : id2">
      Dynamic Color change based on disabled
    </div>

    <button @click="handleTheme">
      {{ theme === "dark" ? 'Light Mode On' : 'Dark Mode On' }}
    </button>

    <div :class="theme === 'dark' ? 'dark-theme' : 'light-theme' ">This is a Theme Container</div>
  </div>
</template>


<style>
  #heading{
    color: red;
  }

  #heading2{
    color: green;
  }

  .dark-theme {
    background-color:black;
    color: white;
  }

  .light-theme{
    background-color: white;
    color: black;
  }
</style>