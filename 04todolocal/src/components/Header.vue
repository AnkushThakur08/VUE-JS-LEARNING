<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
import type { ITodo } from "../contracts/todo";

const todoTitle = ref<string>("");
const toast = useToast();

const emit = defineEmits<{
  (e: "add-todo", payload: ITodo): void;
}>();

const handleAddTodo = () => {
  try {
    if (!todoTitle.value.trim()) {
      return toast.error("Please Enter Todo Item", {
        position: "top-right",
      });
    }
    const payload: ITodo = {
      id: uuidv4(),
      title: todoTitle.value,
      isCompleted: false,
      todoStatus: "pending",
      isDeleted: false,
    };

    emit("add-todo", payload);
    toast.success("Todo Created Successfully");
    todoTitle.value = "";
  } catch (error: any) {
    console.log("error", error);
    toast.error(error);
  }
};
</script>

<template>
  <div class="flex gap-4 justify-center items-center mb-6">
    <input
      type="text"
      name="todoTitle"
      id="todoTitle"
      placeholder="Enter a Todo"
      class="border px-4 py-2 rounded-lg"
      v-model="todoTitle"
    />

    <button
      type="button"
      class="px-6 py-3 bg-blue-500 rounded-lg text-white cursor-pointer"
      @click="handleAddTodo"
    >
      Add Todo
    </button>
  </div>
</template>

<style></style>
