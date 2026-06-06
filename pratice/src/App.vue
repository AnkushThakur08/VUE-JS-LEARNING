<script setup lang="js">
import { ref } from 'vue';

const isDisabled = false;
const id = "heading"
const id2 = "heading2"
const myName = "Ankush Thakur"
const mylastName ="Thakur"
const h1ID = "heading"
const isButtonDisabled = true
const h1TagColor = "red"
const h2FontSize = "30px"
const isVisible = true

const theme =ref("light")

const handleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark"
}

console.log("This is my name: ", theme);


const names = ["Ankush", "Tanvi", "Rohit", "Yash"]

const fullNames = [
  {
    firstName: "Ankush",
    lastName: "Thakur"
  },
  {
    firstName: "Tanvi",
    lastName: "Sharma"
  },
  {
    firstName: "Rohit",
    lastName: "Kumar"
  },
  {
    firstName: "Yash",
    lastName: "Singh"
  }
]

const actor = [
  {
    name: "Shahrukh Khan",
    age: 57,
    movies: ["Dilwale Dulhaniya Le Jayenge", "My Name is Khan", "Chennai Express"]
  },
  {
    name: "Salman Khan",
    age: 56,
    movies: ["Bajrangi Bhaijaan", "Sultan", "Kick"]
  },
  {
    name: "Aamir Khan",
    age: 56,
    movies: ["Dangal", "3 Idiots", "PK"]
  },
  {
    name: "Hrithik Roshan",
    age: 48,
    movies: ["War", "Krrish", "Jodhaa Akbar"]
  }
]


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


    <h1 :style="{
      color: h1TagColor,
      fontSize: h2FontSize
    }">This is a Headin Tag</h1>
  </div>

  <div v-show="isVisible">Conditional Rendering Div</div>



  <div v-for="value in names" :key="value">
    {{ value }}
  </div>

  <div v-for="(value, index) in fullNames" :key="index">{{value.firstName + " " + value.lastName}}</div>


  <div v-for="(value, index) in actor" :key="index"> {{ value.name }}
    <ul>
      <li v-for="(movie, index) in value.movies" :key="index">{{ movie }}</li>
    </ul>
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