<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide"></slot>

    <!-- navigation -->
    <!-- <div class="navigation"></div> -->
    <div class="toggle-left">
      <button @click="prevSlide"><left-arrow /></button>
    </div>
    <div class="toggle-right">
      <button @click="nextSlide"><right-arrow /></button>
    </div>

    <!-- pagination -->
    <!-- <div class="pagination">
      <span
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
        @click="goToSlide(index)"
      >
      </span>
    </div> -->
  </div>
</template>

<script setup>
//==== import
import { ref, onMounted } from 'vue'
//=== import component
import RightArrow from '@/assets/svg/RightArrow.vue'
import LeftArrow from '@/assets/svg/LeftArrow.vue'
//==== data
const currentSlide = ref(1)
const getSlideCount = ref(null)
const autoPlayEnabled = ref(false)
const timeOutDuration = ref(5000)
//==== methods
const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1
    return
  }
  currentSlide.value += 1
}
const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = 1
    return
  }
  currentSlide.value -= 1
}
const goToSlide = (index) => {
  currentSlide.value = index + 1
}
const autoPlay = () => {
  setInterval(() => {
    nextSlide()
  }, timeOutDuration.value)
}
if (autoPlayEnabled.value) {
  autoPlay()
}
//==== hooks
onMounted(() => {
  getSlideCount.value = document.querySelectorAll('.slide').length
  console.log(getSlideCount.value)
})
</script>

<style lang="scss" scoped>
@import '../../assets/calc.scss';
.toggle-right {
  position: absolute;
  top: 21.16rem;
  right: rem(24);
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  background: #fff;
  opacity: 0.5;
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: rem(689)) {
    width: 2.3rem;
    height: 2.3rem;
    top: rem(650);
  }
}
.toggle-left {
  position: absolute;
  top: 21.16rem;
  left: rem(24);
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  background: #fff;
  opacity: 0.5;
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: rem(689)) {
    width: 2.3rem;
    height: 2.3rem;
    top: rem(650);
  }
}
// .navigation {
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   padding: 0 1rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
.toggle-page {
  display: flex;
  flex: 1;
}
// .left {
//   button {
//     border-radius: 50%;
//     width: 3.5rem;
//     height: 3.5rem;
//     background: #fff;
//     // background: #ffffff7d;
//     opacity: 0.5;
//   }
// }
// .right {
//   justify-content: end;
//   button {
//     border-radius: 50%;
//     width: 3.5rem;
//     height: 3.5rem;
//     background: #fff;
//     // background: #ffffff7d;
//     opacity: 0.5;
//   }
// }
.pagination {
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  span {
    cursor: pointer;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: #fff;
  }
}
.active {
  background-color: #3c4739;
}
</style>
