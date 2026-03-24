<script setup lang="ts">
import type { IProduct } from "../contracts/Product";
import ProductCard from "./ProductCard.vue";

const props = defineProps<{
  products: IProduct[];
}>();
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>
<style></style>
