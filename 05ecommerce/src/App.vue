<script setup lang="ts">
import { onMounted, ref } from "vue";
import Cart from "./components/Cart.vue";
import CartItem from "./components/CartItem.vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";
import type { IProduct } from "./contracts/Product";

const cartItems = ref<IProduct[]>([]);
const toast = useToast();

const fetchProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  console.log("res", res);
  if (res?.status === 200) {
    cartItems.value = res?.data?.products;
  } else {
    toast.error("Unable to Fetch the products");
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="w-full text-center text-3xl font-bold py-5">
    <h1>E Commerce</h1>
  </div>

  <div class="flex justify-between">
    <div class="w-full flex-2 grid grid-cols-3 gap-8 my-4 mx-4 pt-6 px-4">
      <!-- CartItem Section -->
      <CartItem :products="cartItems" />
    </div>
    <div class="border w-full flex-1">
      <!-- Cart Section -->
      <Cart />
    </div>
  </div>
</template>

<style scoped></style>
