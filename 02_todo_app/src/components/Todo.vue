<script setup lang="ts">
import { computed, ref } from "vue";
import type { ITodo } from "../types";

import TodoForm from "./Todoform.vue";
import TodoTable from "./TodoTable.vue";

let todoArray = ref<ITodo[]>([]);

const handleAddTodo = (payload: ITodo) => {
  todoArray.value.push(payload);
  console.log("here", todoArray.value)
};

const countTotalTodos = computed(() => {
  return todoArray.value.length;
});

const completedTodoCount = computed(() => {
  return todoArray.value.filter((todo) => todo.todoStatus === "DONE").length;
});

const handleDeleteTodo = (id: string) => {
  todoArray.value = todoArray.value.filter((todo) => todo.id != id);
};
</script>

<template>
  <div class="bg-blue-200 h-screen">
    <TodoForm
      @add-todo="handleAddTodo"
      :countTotalTodos="countTotalTodos"
      :completedTodoCount="completedTodoCount"
    />

    <TodoTable
      :todoArray="todoArray"
      @delete-todo="handleDeleteTodo"
    />

    
  </div>
</template>

<style></style>
