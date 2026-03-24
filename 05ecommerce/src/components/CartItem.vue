<script setup lang="ts">
import { watch } from "vue";
import type { ICart, IProduct } from "../contracts/Product";
import Product from "./Product.vue";

const props = defineProps<{
  products: IProduct[];
  cartItems: ICart[]
}>();

const emit = defineEmits<{
  (e: 'add-item', payload: IProduct) : void;
}>()

watch(
  () => props.products,
  (products) => {
    console.log("CHECK", products);
  },
  {
    immediate: true,
  },
);

</script>

<template>
  <div v-for="product in products" :key="product.id" class="grid gap-4 bg-sky-300">
    <Product :product="product" @add-item="emit('add-item', product)" />
  </div>
</template>

<style></style>
