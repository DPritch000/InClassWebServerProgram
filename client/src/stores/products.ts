import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Product } from '../types';

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([]);

  return {
    products,
  };
});
