<template>
  <div class="slider" ref="slider">
    <div
      class="slider-wrapper"
      ref="sliderWrapper"
      :style="{ transform: `translateX(${-currentSlideIndex * slideWidth}px)` }"
    >
      <div
        class="slide"
        v-for="(slide, index) in slides"
        :key="index"
        :style="{ width: slideWidth + 'px' }"
      >
        <img :src="slide.image" alt="Slide Image" />
      </div>
    </div>
    <button @click="prevSlide">Previous</button>
    <button @click="nextSlide">Next</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

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
    const slideWidth = ref(0)

    onMounted(() => {
      slideWidth.value = sliderWrapper.value.offsetWidth
    })

    const nextSlide = () => {
      currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length
    }

    const prevSlide = () => {
      currentSlideIndex.value =
        (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length
    }

    return { slides, currentSlideIndex, slider, sliderWrapper, slideWidth, nextSlide, prevSlide }
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
