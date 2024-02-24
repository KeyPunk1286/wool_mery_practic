<template>
  <div class="slider" ref="slider">
    <div
      class="slider-wrapper"
      ref="sliderWrapper"
      :style="{ transform: `translateX(${-currentSlideIndex * (slideWidth + gap)}px)` }"
    >
      <div
        class="slide"
        v-for="(slide, index) in slides"
        :key="index"
        :style="{ width: slideWidth + 'px', marginRight: gap + 'px' }"
      >
        <img :src="slide.image" alt="Slide Image" style="width: 100%; height: auto" />
      </div>
    </div>
    <button @click="prevSlide">Previous</button>
    <button @click="nextSlide">Next</button>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    const slides = ref([
      { image: 'slide1.jpg' },
      { image: 'slide2.jpg' },
      { image: 'slide3.jpg' }
      // Add more slides as needed
    ])

    const currentSlideIndex = ref(0)
    const slider = ref(null)
    const sliderWrapper = ref(null)
    const slideWidth = ref(737) // Змінений розмір слайдів
    const gap = 20 // Величина відступу між слайдами

    const updateSlideWidth = () => {
      slideWidth.value = Math.min(sliderWrapper.value.offsetWidth - gap, 737)
    }

    onMounted(() => {
      updateSlideWidth()
      window.addEventListener('resize', updateSlideWidth)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateSlideWidth)
    })

    const nextSlide = () => {
      currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length
    }

    const prevSlide = () => {
      currentSlideIndex.value =
        (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length
    }

    return {
      slides,
      currentSlideIndex,
      slider,
      sliderWrapper,
      slideWidth,
      gap,
      nextSlide,
      prevSlide
    }
  }
}
</script>

<style>
.slider {
  position: relative;
  overflow: hidden;
}
.slider-wrapper {
  display: flex;
  transition: transform 0.5s ease;
}
.slide {
  flex-shrink: 0;
}
</style>
