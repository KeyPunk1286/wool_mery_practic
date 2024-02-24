import { defineStore } from 'pinia'
import { computed } from 'vue'
import popular from '@/assets/store/popular.json'

export const usePopularProductsStore = defineStore('popularProducts', () => {
  const productList = computed(() => popular)

  return {
    productList
  }
})
