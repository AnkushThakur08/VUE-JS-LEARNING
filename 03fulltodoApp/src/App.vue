<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import type { ITodo } from "./contracts/Todo";
import { useToast } from "vue-toast-notification";

const todoText = ref<string>("");
const todoDescription = ref<string>("");
const todos = ref<ITodo[]>([]);
const toast = useToast();

const handleAddTodo = async () => {
  if (!todoText.value.trim() && !todoDescription.value.trim()) return;
  try {
    const payload: Pick<ITodo, "title" | "description"> = {
      title: todoText.value,
      description: todoDescription.value,
    };

    const res = await axios.post(
      "https://api.freeapi.app/api/v1/todos/",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res?.data?.success) {
      refreshTodo();
      todoText.value = "";
      todoDescription.value = "";
      toast.success("Todo Created Successfully", {
        position: "top-right",
      });
    }
  } catch (error: any) {
    console.log("error", error);
    toast.error(error?.message ?? error?.errors?.todoId ?? "Error in creating Todo");
  }
};

const getAllTodo = async () => {
  const response = await axios.get("https://api.freeapi.app/api/v1/todos");
  todos.value = response?.data?.data ?? [];
};

const handleDeleteTodo = async (id: string) => {
  try {
    const res = await axios.delete(
      `https://api.freeapi.app/api/v1/todos/${id}`
    );
    console.log("res", res);
    if (res?.data?.success) {
      toast.success("Todo Deleted Successfully", {
        position: "top-right",
      });
      refreshTodo();
    }
  } catch (error: any) {
    console.log("error", error);
    toast.error(error?.message ?? error?.errors?.todoId ?? "Error in creating Todo");
  }
};

const handleTodoStatus = async (todoId: string) => {
  try {
    const res = await axios.patch(
      `https://api.freeapi.app/api/v1/todos/toggle/status/${todoId}`
    );
    if(res?.data?.success){
      refreshTodo()
    }
  } catch (error: any) {
    toast.error(error?.message ?? error?.errors?.todoId ?? "Error in creating Todo");

  }
};

const refreshTodo = async () => {
  await getAllTodo();
};

onMounted(() => {
  getAllTodo();
});
</script>

<template>
  <div class="flex flex-col mb-4">
    <!-- Header -->
    <div class="flex w-full justify-center items-center gap-6 my-6">
      <div class="flex gap-4">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter a Todo"
          class="border px-2 py-2 rounded-lg"
          v-model="todoText"
        />

        <input
          type="text"
          name="description"
          id="description"
          placeholder="Enter Todo Description"
          class="border px-2 py-2 rounded-lg"
          v-model="todoDescription"
        />
      </div>
      <button
        type="button"
        :disabled="!todoDescription.trim() && !todoText.trim()"
        class="border px-4 py-2 rounded-lg text-white"
        :class="
          !todoDescription.trim() && !todoText.trim()
            ? `bg-gray-400 cursor-not-allowed`
            : 'bg-blue-600 cursor-pointer'
        "
        @click="handleAddTodo()"
      >
        Add Todo
      </button>
    </div>

    <!-- Body -->
    <div class="border rounded-sm mx-6">
      <table class="table-auto w-full text-left">
        <thead class="bg-gray-300 text-lg font-medium border-b">
          <tr>
            <th class="px-3 py-2">ID</th>
            <th class="px-3 py-2">Title</th>
            <th class="px-3 py-2">Description</th>
            <th class="px-3 py-2">Status</th>
            <th class="px-3 py-2">Delete Todo</th>
          </tr>
        </thead>
        <tbody class="">
          <tr v-for="todoItem in todos" :key="todoItem._id" class="border-b">
            <td class="px-3 py-2">{{ todoItem._id }}</td>
            <td class="px-3 py-2">{{ todoItem.title }}</td>
            <td class="px-3 py-2">{{ todoItem.description }}</td>
            <td
              class="px-3 py-2"
              :class="todoItem?.isComplete ? `text-green-800` : `text-red-500`"
            >
              <button
                type="button"
                class="border px-4 py-2 rounded-lg text-white cursor-pointer"
                :class="todoItem.isComplete ? 'bg-green-500' : 'bg-yellow-500'"
                @click="handleTodoStatus(todoItem._id)"
              >
                {{ todoItem.isComplete ? "Completed" : "Pending" }}
              </button>
            </td>
            <td class="px-3 py-2">
              <button
                type="button"
                class="border px-4 py-2 rounded-lg bg-red-600 text-white cursor-pointer"
                @click="handleDeleteTodo(todoItem._id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
</style>
