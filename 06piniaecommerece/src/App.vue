<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import Products from "./components/Products.vue";
import Cart from "./components/Cart.vue";
import { useToast } from "vue-toast-notification";
import { useCartStore } from "./stores/cart";

const products = ref();
const toast = useToast();

const shoppingCart = useCartStore()


const fetchProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  if (res?.status === 200) {
    products.value = res?.data?.products;
  } else {
    toast.error("Unable to Fetch the products");
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div>
    <!-- Header -->
    <div class="grid grid-cols-[6.5fr_3.5fr] text-center auto-cols-auto gap-4 mx-4">
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <div>
        <h1>Added Items: {{ shoppingCart.getTotalProductCount }}</h1>
        <h1>Total Amount ₹ {{ shoppingCart.getTotalProductPrice}}</h1>

        </div>
    </div>

    <!-- Body -->

    <div class="grid grid-cols-[6.5fr_3.5fr] text-center gap-4 my-6 mx-4">
        <Products :products="products" />
      <div class="border">
        <Cart />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
