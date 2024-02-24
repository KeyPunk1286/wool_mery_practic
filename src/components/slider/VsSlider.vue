<template>
  <div class="slider">
    <div
      class="slider-wrapper"
      :style="{ transform: `translateX(${currentSlideIndex * slideWidth}%)` }"
    >
      <div
        class="slide"
        v-for="slide in sliderInfoList"
        :key="slide.id"
        :style="{ width: slideWidth + '%' }"
      >
        <div class="img">
          <img :src="getImagePath(slide.img)" alt="Slide Image" />
        </div>
        <div class="info">
          <h4 class="name">{{ slide.name }}</h4>
          <img class="img-star" src="../../assets/img/star.png" />
          <p class="txt">{{ slide.info }}</p>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button @click="prevSlide"><left-arrow /></button>
      <button @click="nextSlide"><right-arrow /></button>
    </div>
  </div>
</template>

<script setup>
//==== import
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
//==== import store
import { useSliderInfoStore } from '@/stores/sliderInfo.js'
const sliderInfoStore = useSliderInfoStore()
const { sliderInfoList } = storeToRefs(sliderInfoStore)
//==== import components
import RightArrow from '@/assets/svg/RightArrow.vue'
import LeftArrow from '@/assets/svg/LeftArrow.vue'

const currentSlideIndex = ref(-1)
const slideWidth = ref(53.88)

// onMounted(() => {
//   slideWidth.value = 53.88
// })

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % sliderInfoList.value.length
}

const prevSlide = () => {
  if (currentSlideIndex.value === -1) {
    currentSlideIndex.value = sliderInfoList.value.length - 1
  } else {
    currentSlideIndex.value = currentSlideIndex.value - 1
  }
}

const getImagePath = (imgPath) => new URL(`../../assets/img/${imgPath}`, import.meta.url).href
</script>

<style lang="scss">
@import '../../assets/calc.scss';

.slider {
  position: relative;
  overflow: hidden;
}
.slider-wrapper {
  display: flex;
  justify-content: center;

  column-gap: clamp(0.625rem, 0.185rem + 2.2vw, 2.063rem);
  transition: transform 0.5s ease;
}
.slide {
  flex-shrink: 0;
  background-color: aliceblue;
  display: flex;
}
.img {
  flex: 0 0 rem(202);
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
