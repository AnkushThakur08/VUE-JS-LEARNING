<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Cart from "./components/Cart.vue";
import CartItem from "./components/CartItem.vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";
import type { ICart, IProduct } from "./contracts/Product";

const products = ref<IProduct[]>([]);
const toast = useToast();
const cartItems = ref<ICart[]>([]);

const fetchProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  console.log("res", res);
  if (res?.status === 200) {
    products.value = res?.data?.products;
  } else {
    toast.error("Unable to Fetch the products");
  }
};

const handleAddItem = (item: IProduct) => {
  if (!item) {
    return toast.error("Unable to add the item in the cart");
  }

  const existingItem = cartItems.value.find(
    (cartItem) => cartItem.product.id === item.id,
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.value.push({
      product: item,
      quantity: 1,
    });
  }
};

const handleDeleteItem = (item: IProduct) => {
  cartItems.value = cartItems.value.filter(
    (cartItem) => cartItem.product.id !== item.id,
  );
};

const increaseQuantity = (productId: number) => {
  console.log("check", productId)
  const item = cartItems.value.find(
    (cartItem) => cartItem.product.id === productId,
  );
  if (item) item.quantity += 1;
};

const decreaseQuantity = (productId: number) => {
  const item = cartItems.value.find(
    (cartItem) => cartItem.product.id === productId,
  );
  if (!item) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    cartItems.value = cartItems.value.filter(
      (cartItem) => cartItem.product.id !== productId,
    );
  }
};

onMounted(() => {
  fetchProducts();
});

const cartItemsCount = computed(() => {
  return cartItems.value.reduce((count, item) => count + item.quantity, 0 );
});

const cartItemTotal = computed(() =>

  cartItems.value.reduce((total, item) => total + (item.product.price * 100) * item.quantity,  0),
);
</script>

<template>
  <div class="w-full text-center text-3xl font-bold py-5">
    <div class="flex text-center w-full justify-around">
      <h1>E Commerce</h1>

      <div class="flex justify-end flex-col">
        CartItems: {{ cartItemsCount }}

        <h1>Total Amount:{{ cartItemTotal }}</h1>
      </div>
    </div>
  </div>

  <div class="flex justify-between">
    <div class="w-full flex-2 grid grid-cols-3 gap-8 my-4 mx-4 pt-6 px-4">
      <!-- CartItem Section -->
      <CartItem
        :products="products"
        @add-item="handleAddItem"
        :cartItems="cartItems"
      />
    </div>
    <div class="border w-full flex-1">
      <!-- Cart Section -->
      <Cart
        :cartItems="cartItems"
        @delete-item="handleDeleteItem"
        @increase="increaseQuantity"
        @decrease="decreaseQuantity"
      />
    </div>
  </div>
</template>

<style scoped></style>
