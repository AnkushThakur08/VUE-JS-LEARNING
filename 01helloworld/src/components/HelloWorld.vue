<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import FetchUser from "./FetchUser/FetchUser.vue";

/* This is how we use State */
let count = ref(0);
let username = ref("");
let password = ref("");
const usersData = ref([]);
const isLoggedIn = false;

/* Functions */
const handleIncrement = (): number | undefined => {
  if (count.value < 20) {
    return count.value++;
  }
};

const handleDecrement = (): number | undefined => {
  if (count.value > 0) {
    return count.value--;
  }
};

const handleSubmit = (event: Event) => {
  event.preventDefault(); /* To prevent the page from reload when my form submits */
  console.log("check", username.value, password.value);
};

const loadUsers = async () => {
  const res = await axios.get(
    "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10"
  );
  usersData.value = res.data.data.data.data;
};

/* To run the function when page mountes */
onMounted(() => {
  loadUsers();
});

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    isActive: true,
    address: {
      street: "123 Main St",
      city: "Anytown",
      zip: "12345",
    },
    getFullName: function () {
      return this.name;
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    email: "janesmith@example.com",
    isActive: false,
    address: {
      street: "456 Oak St",
      city: "Othertown",
      zip: "67890",
    },
    getFullName: function () {
      return this.name;
    },
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 35,
    email: "alicej@example.com",
    isActive: true,
    address: {
      street: "789 Pine St",
      city: "Elsewhere",
      zip: "11223",
    },
    getFullName: function () {
      return this.name;
    },
  },
  {
    id: 4,
    name: "Bob Brown",
    age: 40,
    email: "bobbrown@example.com",
    isActive: true,
    address: {
      street: "101 Maple St",
      city: "Randomtown",
      zip: "44556",
    },
    getFullName: function () {
      return this.name;
    },
  },
  {
    id: 5,
    name: "Charlie Davis",
    age: 22,
    email: "charliedavis@example.com",
    isActive: false,
    address: {
      street: "202 Birch St",
      city: "Samplecity",
      zip: "78901",
    },
    getFullName: function () {
      return this.name;
    },
  },
];
</script>

<template>
  <div>
    <FetchUser />
    <!-- use of ref -->
    <h1>Value of Count : {{ count }}</h1>
    <button @click="handleIncrement">Increment Counter</button>
    <button @click="handleDecrement">Decrement Counter</button>
    <div v-if="isLoggedIn">This is IF Block</div>
    <!-- IF Block  -->

    <!-- V FOR LOOP -->
    <li v-for="user in dummyData" :key="user.id">
      {{ user.name }}
    </li>

    <form @submit="handleSubmit" action="post">
      <div>
        <label for="username">User Name</label>
        <input v-model="username" type="text" name="username" id="username" />
      </div>

      <div>
        <label for="password">Password</label>
        <input v-model="password" type="text" name="password" id="password" />
      </div>

      <button type="submit">Submit</button>
    </form>

    <h1>This is Dynamic list</h1>
    <div v-for="user in usersData" :key="user.id">
      {{ user.name.first }} {{ user.name.last }}
    </div>
  </div>
</template>
