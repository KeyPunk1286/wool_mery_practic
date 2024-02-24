<template>
  <div class="popular">
    <div class="popular__container">
      <div class="popular__title"><h2>popular</h2></div>
      <div class="popular__box-cards">
        <div class="popular__card" v-for="product in productList" :key="product.id">
          <ui-card-product :popular-product="product" @addToCart="addToCart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//import
import { storeToRefs } from 'pinia'
//import store
import { usePopularProductsStore } from '@/stores/popularProduct.js'
const popularProductsStore = usePopularProductsStore()
const { productList } = storeToRefs(popularProductsStore)
//import component
import UiCardProduct from '@/components/ui/UiCardProduct.vue'
//methods
const addToCart = () => {
  console.log('test button')
}
</script>

<style lang="scss" scoped>
@import '../../assets/calc.scss';

.popular {
  padding: rem(97.58) 0 rem(94.42);
  &__container {
  }

  &__title {
    display: flex;
    justify-content: center;
    h2 {
      position: relative;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 48px;
      margin-bottom: rem(56);
      text-transform: uppercase;
    }
    h2::before {
      content: '';
      position: absolute;
      top: 20px;
      left: -193px;
      width: rem(160);
      height: rem(2);
      background-color: #e3d1d1;
      opacity: 0.5;
    }
    h2::after {
      content: '';
      position: absolute;
      top: 20px;
      right: -193px;
      width: rem(160);
      height: rem(2);
      background-color: #e3d1d1;
      opacity: 0.5;
    }
    @media (max-width: rem(654)) {
      h2::before,
      h2::after {
        display: none;
      }
    }
  }

  &__box-cards {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 253px));
    justify-content: space-between;
    column-gap: rem(10);
    row-gap: rem(32);
    @media (max-width: rem(980)) {
      grid-template-columns: repeat(2, minmax(100px, 253px));
      justify-content: center;
      column-gap: clamp(0.625rem, -0.587rem + 6.06vw, 3.125rem);
    }
    @media (max-width: rem(488)) {
      grid-template-columns: repeat(1, minmax(100px, 253px));
    }
  }

  &__card {
  }
}
</style>
