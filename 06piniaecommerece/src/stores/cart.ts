import { defineStore } from "pinia";
import type { ICart, IProduct } from "../contracts/Product";

export const useCartStore = defineStore("shoppingCart", {
  state: () => ({
    cartItems: [] as ICart[],
  }),
  getters: {
    getTotalProductCount(state) {
      return state.cartItems.reduce((count, item) => count + item.quantity, 0);
    },
    getTotalProductPrice(state) {
     return state.cartItems.reduce(
        (totalAmount, item) =>
          totalAmount + item.product.price * 100 * item.quantity,
        0,
      );
    },
  },
  actions: {
    handleAddItem(product: IProduct) {
      const isExisting = this.cartItems.find(
        (item) => item.product.id === product.id,
      );
      if (isExisting) {
        isExisting.quantity++;
      } else {
        this.cartItems.push({
          product,
          quantity: 1,
        });
      }
    },

    handleRemoveItem(id: number) {
      this.cartItems = this.cartItems.filter((item) => item.product.id != id);
    },

    handleQuantityIncrease(id: number) {
      const isExisting = this.cartItems.find((item) => item.product.id === id);

      if (isExisting) {
        isExisting.quantity++;
      }
    },

    handleQuantityDecrease(id: number) {
      const isExisting = this.cartItems.find((item) => item.product.id === id);

      if (isExisting!.quantity > 1) {
        isExisting!.quantity--;
      } else this.handleRemoveItem(id);
    },
  },
});
