<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";
import type { ITodo } from "./contracts/todo";

const todoList = ref<ITodo[]>([]);

const addTodo = (todo: ITodo) => {
  todoList.value.push(todo);
  localStorage.setItem("Todos", JSON.stringify(todo));
};

const handeTodoStatus = (todo: ITodo) => {
  todo.isCompleted = !todo.isCompleted;
};

const handleDeleteTodo = (todo: ITodo) => {
  todo.isDeleted = true;

  todoList.value = todoList.value.filter((todo) => !todo.isDeleted);
};

watch(
  todoList,
  (newTodos) => {
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  },
  { deep: true },
);

onMounted(() => {
  const existingTodo = localStorage.getItem("Todos");
  return existingTodo ? (todoList.value = JSON.parse(existingTodo)) : [];
});
</script>

<template>
  <div class="w-full my-4">
    <!-- Header -->
    <Header @add-todo="addTodo" />
    <!-- Body -->
    <TodoList
      :todoList="todoList"
      @todo-status="handeTodoStatus"
      @delete-todo="handleDeleteTodo"
    />
  </div>
</template>

<style scoped></style>
