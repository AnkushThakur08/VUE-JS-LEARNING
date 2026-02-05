<script setup lang="ts">
import { watch } from "vue";
import type { IProduct } from "../contracts/Product";
import Product from "./Product.vue";

const props = defineProps<{
  products: IProduct[];
}>();

watch(
  () => props.products,
  (products) => {
    console.log("CHECK", products);
  },
  {
    immediate: true,
  },
);

console.log(props.products, "CHECK");
</script>

<template>
  <div v-for="product in products" :key="product.id" class="grid gap-4 bg-sky-300">
    <Product :product="product" />
  </div>
</template>

<style></style>
