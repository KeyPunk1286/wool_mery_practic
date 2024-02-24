import { defineStore } from 'pinia'
import { computed } from 'vue'
import sliderInfo from '@/assets/store/sliderInfo.json'

export const useSliderInfoStore = defineStore('sliderInfo', () => {
  const sliderInfoList = computed(() => sliderInfo)

  return {
    sliderInfoList
  }
})
