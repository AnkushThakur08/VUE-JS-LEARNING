<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";
import type { ITodo } from "./contracts/todo";

const todoList = ref<ITodo[]>([]);
const filterStatus = ref<"all" | "pending" | "complete">("all");

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

const handleFilter = (status: 'all' | 'pending' | 'complete') => {
  console.log("value", status)
  filterStatus.value = status
}

const filteredTodo = computed(() => {
  if(filterStatus.value === 'pending'){
    return todoList.value.filter((todo) => !todo.isCompleted)
  } else if (filterStatus.value === 'complete') {
    return todoList.value.filter((todo) => todo.isCompleted)
  } else {
    return todoList.value
  }
})

const totalTodoCount = computed(() => {
  return filteredTodo.value.filter((todo) => !todo.isDeleted).length;
});

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

console.log("filterStatus", filterStatus);
</script>

<template>
  <div class="w-full my-4">
    <!-- Header -->
    <Header
      @add-todo="addTodo"
      @handle-filter="handleFilter"
    />

    <!-- Body -->
    <div class="mx-6 py-2 text-lg font-bold">
      <h1>Total : {{ totalTodoCount }}</h1>
    </div>
    <TodoList
      :todoList="filteredTodo"
      @todo-status="handeTodoStatus"
      @delete-todo="handleDeleteTodo"
    />
  </div>
</template>

<style scoped></style>
