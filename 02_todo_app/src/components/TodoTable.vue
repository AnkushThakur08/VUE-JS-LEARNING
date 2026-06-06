<script setup lang="ts">
import type { ITodo } from '../types';


const props = defineProps<{
  todoArray: ITodo[];
}>();

const emit = defineEmits<{
  (e: 'delete-todo', payload: string) : void
}>()

</script>

<template>
  <main>
    <!-- Table, ID, Todo Title, Status, Action (COMPLETED, UNDO, INPROGRESS, DELETE)  -->
    <table class="w-full border-collapse border border-gray-400">
      <thead class="bg-gray-800 text-white">
        <tr class="w-full">
          <th>ID</th>
          <th>Title</th>
          <th>Todo Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody class="w-full justify-center items-center text-center">
        <tr class="pb-3" v-for="value in props.todoArray" :key="value.id">
          <td>{{ value.id.slice(-4) }}</td>
          <td :class="value.todoStatus === 'DONE' ? 'line-through' : ''">
            {{ value.title }}
          </td>
          <td>{{ value.todoStatus }}</td>
          <td class="flex justify-center items-center gap-4">
            <select v-model="value.todoStatus" class="p-2 rounded-md border">
              <option disabled value="">Todo Status</option>
              <option value="DONE">DONE</option>
              <option value="INPROGRESS">INPROGRESS</option>
              <option value="PENDING">PENDING</option>
            </select>

            <button
              @click="emit('delete-todo', value.id)"
              class="bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer"
            >
              Delete Todo
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style></style>
