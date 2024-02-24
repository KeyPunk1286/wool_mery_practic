<template>
  <carousel-part class="carousel" v-slot="{ currentSlide }">
    <slade-part v-for="slide in carouselSlides" :key="slide.id">
      <div v-show="currentSlide === slide.id" class="carousel__slide">
        <div class="carousel__img">
          <img :src="getImagePath(slide.img)" />
        </div>
        <div class="carousel__info">
          <h3 class="info__title"><span>The meri wool</span></h3>
          <h2 class="info__new-collection">New collection</h2>
          <h3 class="info__allow"><span>Allow yourself more</span></h3>
          <h3 class="info__catalog">Already in the catalog</h3>
          <div class="info__button"><button>View more</button></div>
        </div>
      </div>
    </slade-part>
  </carousel-part>
</template>

<script setup>
//==== import
import { ref } from 'vue'
//==== import component
import CarouselPart from '@/components/carousel/CarouselPart.vue'
import SladePart from '@/components/carousel/SladePart.vue'
import UiButtonBig from '@/components/ui/UiButtonBig.vue'
//==== deta
const carouselSlides = ref([
  { id: 1, img: 'welcome_background.png' },
  { id: 2, img: 'welcome_background.png' },
  { id: 3, img: 'welcome_background.png' }
])

const getImagePath = (imgPath) => new URL(`../../assets/img/${imgPath}`, import.meta.url).href
</script>

<style lang="scss" scoped>
@import '../../assets/calc.scss';

.carousel {
  position: relative;
  height: 45.94rem;
  max-width: 100%;

  &__slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__img {
    width: 100%;
    height: 100%;
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: rem(154);
  }
}
.info {
  &__title {
    padding-left: clamp(3.438rem, -7.614rem + 55.26vw, 39.563rem);
    font-family: var(--second-family);
    font-weight: 400;
    font-size: rem(24);
    opacity: 0.5;
    margin-bottom: rem(27);
    span {
      position: relative;
    }
    span::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: -159px;
      width: rem(149);
      height: rem(2);
      background: linear-gradient(to left, #3c4739, rgba(255, 0, 0, 0)); /* Градієнт */
    }
    span::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 175px;
      width: rem(350);
      height: rem(2);
      background: linear-gradient(to right, #3c4739, rgba(255, 0, 0, 0)); /* Градієнт */
    }
    @media (max-width: rem(924)) {
      span::before,
      span::after {
        display: none;
      }
    }
  }

  &__new-collection {
    font-family: var(--font-family);
    font-weight: 700;
    color: var(--color-white);
    // font-size: clamp(3.5rem, 1.459rem + 10.2vw, 6rem);
    font-size: clamp(3.125rem, 2.245rem + 4.4vw, 6rem);
    padding-left: clamp(0.938rem, -8.871rem + 49.04vw, 33rem);
    padding-right: rem(15);
    margin-bottom: rem(50);
  }

  &__allow {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: rem(24);
    opacity: 0.5;
    margin-bottom: rem(70);
    padding-left: clamp(5rem, -9.723rem + 73.61vw, 53.125rem);
    span {
      position: relative;
    }
    span::before {
      content: '';
      position: absolute;
      top: 0;
      left: -303px;
      width: rem(293);
      height: rem(2);
      background: linear-gradient(to left, #3c4739, rgba(255, 0, 0, 0)); /* Градієнт */
    }
    span::after {
      content: '';
      position: absolute;
      top: 0;
      right: -159px;
      width: rem(149);
      height: rem(2);
      background: linear-gradient(to right, #3c4739, rgba(255, 0, 0, 0)); /* Градієнт */
    }
    @media (max-width: rem(924)) {
      span::before,
      span::after {
        display: none;
      }
    }
  }

  &__catalog {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: clamp(2rem, 1.694rem + 1.53vw, 3rem);
    margin-bottom: rem(48);
    padding-left: clamp(1.938rem, -11.945rem + 59.23vw, 38.625rem);
    padding-right: rem(15);
  }

  &__button {
    padding-left: clamp(0.938rem, -14.627rem + 77.82vw, 51.813rem);
    padding-right: clamp(0.938rem, -4.282rem + 26.1vw, 18rem);
    button {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: rem(18);
      color: var(--color-white);
      background: var(--color-green-bg);
      border-radius: rem(10);
      padding: rem(16) rem(48) rem(16) rem(42);
      width: 100%;
    }
  }
}

//=================================

//   &__button {
//     padding-left: clamp(0rem, -6.841rem + 34.2vw, 18.813rem);
//     button {
//       font-family: var(--font-family);
//       font-weight: 700;
//       font-size: rem(18);
//       color: var(--color-white);
//       border-radius: 10px;
//       background: var(--color-green-bg);
//       padding: rem(16) rem(48) rem(16) rem(42);
//     }
//   }
// }
</style>
