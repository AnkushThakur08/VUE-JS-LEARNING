<script setup lang="ts">
import type { ITodo } from '../contracts/todo';

const props = defineProps<{
  todoList: ITodo[];
}>();

const emit = defineEmits<{
  (e: 'todo-status', payload: ITodo ) : void
  (e: 'delete-todo', payload: ITodo) : void
}>()
</script>


<template>
    <div class="border rounded-sm mx-6">
      <table class="table-auto w-full text-left">
        <thead class="bg-gray-300 text-lg font-medium border-b">
          <tr>
            <th class="px-3 py-2">ID</th>
            <th class="px-3 py-2">Title</th>
            <th class="px-3 py-2">Status</th>
            <th class="px-3 py-2">Delete Todo</th>
          </tr>
        </thead>
        <tbody class="">
          <tr v-for="todoItem in props.todoList" :key="todoItem.id" class="border-b">
            <td class="px-3 py-2">{{ todoItem.id }}</td>
            <td class="px-3 py-2">{{ todoItem.title }}</td>
            <td
              class="px-3 py-2"
              :class="todoItem?.isCompleted ? `text-green-800` : `text-red-500`"
            >
              <button
                type="button"
                class="border px-4 py-2 rounded-lg text-white cursor-pointer"
                :class="todoItem.isCompleted ? 'bg-green-500' : 'bg-yellow-500'"
                @click="() => emit('todo-status', todoItem)"
              >
                {{ todoItem.isCompleted ? "Completed" : "Pending" }}
              </button>
            </td>
            <td class="px-3 py-2">
              <button
                type="button"
                class="border px-4 py-2 rounded-lg bg-red-600 text-white cursor-pointer"
                @click="() => emit('delete-todo', todoItem)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

</template>



<style></style>