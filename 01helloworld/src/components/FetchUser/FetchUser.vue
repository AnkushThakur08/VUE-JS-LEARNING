<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";

const users = ref([]);

const fetchUser = async () => {
  const data = await axios.get(
    "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10"
  );
  console.log("data", data)
  users.value = data.data.data.data;
};

onMounted(() => {
  fetchUser();
  console.log("Mounted and fetchUser called:", users);
});

console.log("users", users);
</script>

<template>
  <div>
    <h1>This is my component</h1>
    <div v-if="users.length > 0">
      <div v-for="user in users" :key="user.id">
        {{ user.name.first }} {{ user.name.last }}
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>


