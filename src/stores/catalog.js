import { defineStore } from 'pinia'
import { computed } from 'vue'
import catalog from '@/assets/store/catalog.json'

export const useCatalogStore = defineStore('catalog', () => {
  const catalogList = computed(() => catalog)

  return { catalogList }
})
