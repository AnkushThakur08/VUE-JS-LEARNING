<script setup lang="ts">
import { computed, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import type { ITodo } from "../contracts/Todo";

const todoArr = ref<ITodo[]>([]);
const selectedFilter = ref<"all" | "pending" | "completed">("all");
const todoText = ref<string>("");
const searchTodo = ref<string>("");

const handleAddTodo = () => {
  if (!todoText.value.trim()) return;
  todoArr.value.push({
    id: uuidv4(),
    todo: todoText.value ?? "",
    status: false,
  });
  todoText.value = "";
};

const handleTodoStatus = (todo: ITodo) => {
  todo.status = !todo.status;
};

const handleDeleteTodo = (id: string) => {
  todoArr.value = todoArr.value.filter((item) => item.id !== id);
};

const filteredTodo = computed(() => {
  if (selectedFilter.value == "pending") {
    return todoArr.value.filter((todo) => !todo.status);
  } else if (selectedFilter.value == "completed") {
    return todoArr.value.filter((todo) => todo.status);
  }

  if (searchTodo.value) {
    if (!searchTodo.value.trim()) return;
    return todoArr.value.filter((todo) => todo.todo.includes(searchTodo.value));
  }

  return todoArr.value;
});

const todoCount = computed(() => {
  return todoArr.value.filter((todo) => !todo.status).length;
});
</script>

<template>
  <div>
    <div>Todo Count : {{ todoCount }}</div>

    <div class="flex gap-5 justify-start">
      <input
        type="search"
        name="searc"
        id="search"
        v-model="searchTodo"
        class="border border-slate-200 rounded px-4 py-2"
        placeholder="Search"
      />
    </div>
    <div class="flex gap-5 justify-center">
      <input
        type="text"
        name="todoItem"
        id="todoItem"
        placeholder="Enter Todo Item"
        class="border border-slate-200 rounded px-4 py-2"
        v-model="todoText"
      />
      <button
        type="submit"
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800 cursor-pointer"
        @click="handleAddTodo"
      >
        Add Todo
      </button>

      <select id="filter" name="filter" v-model="selectedFilter">
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>

    <table
      class="table-fixed text-center w-full border border-gray-500 border-seperate border-spacing-5 mt-10 p-5"
    >
      <thead>
        <tr>
          <th class="border border-gray-500">Todo ID</th>
          <th class="border border-gray-500">Todo Title</th>
          <th class="border border-gray-500">Status</th>
          <th class="border border-gray-500">Mark as Done</th>
          <th class="border border-gray-500">Delete Todo</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="todo in filteredTodo" :key="todo.id" class="p-6">
          <td class="border border-gray-500">{{ todo.id }}</td>
          <td
            :class="
              todo.status
                ? 'border border-gray-500 line-through'
                : 'border border-gray-500'
            "
          >
            {{ todo.todo }}
          </td>
          <td
            :class="
              todo.status
                ? 'border border-gray-500 text-green-600 font-semibold'
                : 'border border-gray-500 text-yellow-600 font-semibold'
            "
          >
            {{ todo.status ? `Completed` : "Pending" }}
          </td>
          <td class="border border-gray-500">
            <button
              class="text-white py-0 px-2 rounded cursor-pointer mx-6"
              @click="handleTodoStatus(todo)"
            >
              {{ todo.status ? "❌" : "✅" }}
            </button>
          </td>
          <td>
            <button class="cursor-pointer" @click="handleDeleteTodo(todo.id)">
              🗑
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
