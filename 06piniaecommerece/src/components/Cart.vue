<script setup lang="ts">
import { useCartStore } from "../stores/cart";

const shoppingCart = useCartStore();

</script>

<template>
  <div v-for="item in shoppingCart.cartItems" :key="item.product.id">
    <div
      class="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs"
    >
      <a href="#" class="flex justify-between items-center">
        <img
          class="rounded-base mb-6"
          alt="product image"
          :src="item.product.thumbnail"
          height="80"
          width="80"
        />

        <span
          class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm"
          >{{ item.product.rating }} outof 5</span
        >
      </a>
      <div>
        <div class="flex items-center space-x-3 mb-2">
          <a href="#">
            <h5 class="text-xl text-heading font-semibold tracking-tight">
              {{ item.product.title }} , {{ item.product.category }}
            </h5>
          </a>
        </div>
      </div>

      <div class="flex items-center justify-between mt-6">
        <span class="text-xl font-extrabold text-heading"
          >₹ {{ (item.product.price * 100).toFixed(2) }}</span
        >

        <div>
          <button
            class="border shadow-xl font-medium leading-5 rounded-base text-sm px-2 cursor-pointer"
            @click="shoppingCart.handleQuantityDecrease(item.product.id)"
          >
            -
          </button>
          {{ item.quantity }}
          <button
            class="border shadow-xl font-medium leading-5 rounded-base text-sm px-2 cursor-pointer"
            @click="shoppingCart.handleQuantityIncrease(item.product.id)"
          >
            +
          </button>
        </div>
        <button
          type="button"
          class="inline-flex items-center border shadow-xl font-medium leading-5 rounded-base text-sm px-3 py-2 cursor-pointer"
          @click="shoppingCart.handleRemoveItem(item.product.id)"
        >
          <svg
            class="w-4 h-4 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 7h12m-9 0V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-8 0h10m-1 0-1 12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1L7 7"
            />
          </svg>
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<style></style>
