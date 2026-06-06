<script setup lang="ts">
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import type { ITodo } from "../types";

let todoTitle = ref<string>();

const props = defineProps<{
  countTotalTodos: number;
  completedTodoCount: number;
}>();

const emit = defineEmits<{
  (e: "add-todo", payload: ITodo): void;
}>();

const handleTodo = () => {
  if (!todoTitle.value?.trim()) return;
  const payload: ITodo = {
    id: uuidv4(),
    title: todoTitle.value,
    todoStatus: "PENDING",
    isDeleted: false,
  };

  todoTitle.value = "";

  emit("add-todo", payload);

};
console.log(props.completedTodoCount,"sds")
</script>

<template>
  <header class="flex justify-center items-center gap-4 py-4">
    <input
      type="text"
      name="todo"
      placeholder="Enter Todo Value"
      v-model="todoTitle"
      class="p-2 rounded-md border"
    />

    <button
      @click="handleTodo()"
      class="cursor-pointer bg-green-500 py-2 px-4 rounded-md text-white"
    >
      Add Todo
    </button>

    <p>Total Todos: {{ props.countTotalTodos }}</p>

    <p>Completed Todos: {{ props.completedTodoCount }}</p>
  </header>
</template>

<style></style>
