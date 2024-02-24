<template>
  <div class="catalog">
    <div class="catalog__container">
      <div class="catalog__title"><h3>CATALOG</h3></div>
      <div class="catalog__dox-card">
        <div class="catalog__card" v-for="item in catalogList" :key="item.id">
          <div class="card__img"><img :src="getImagePath(item.img)" /></div>
          <div class="card__title">{{ item.name }}</div>
        </div>
      </div>
      <div class="catalog__button"><button>View all</button></div>
    </div>
  </div>
</template>

<script setup>
//import
import { storeToRefs } from 'pinia'
//import store
import { useCatalogStore } from '@/stores/catalog.js'
const catalogStore = useCatalogStore()
const { catalogList } = storeToRefs(catalogStore)

//methods
const getImagePath = (imgPath) => new URL(`../../assets/img/${imgPath}`, import.meta.url).href
</script>

<style lang="scss" scoped>
@import '../../assets/calc.scss';
.catalog {
  padding-top: clamp(0.938rem, -0.611rem + 7.74vw, 6rem);
  padding-bottom: clamp(0.938rem, -0.611rem + 7.74vw, 6rem);
  background-color: var(--color-white);

  &__container {
  }

  &__title {
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-size: rem(48);
    margin-bottom: rem(62.58);
    h3 {
      position: relative;
    }
    h3::before {
      content: '';
      position: absolute;
      top: rem(22);
      left: rem(-193);
      width: rem(160);
      height: rem(2);
      background-color: var(--color-pink);
    }
    h3::after {
      content: '';
      position: absolute;
      top: rem(22);
      right: rem(-193);
      width: rem(160);
      height: rem(2);
      background-color: var(--color-pink);
    }
    @media (max-width: rem(730)) {
      h3::before,
      h3::after {
        display: none;
      }
    }
  }

  &__dox-card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
    column-gap: clamp(0.313rem, -0.204rem + 2.58vw, 2rem);
    row-gap: clamp(0.625rem, -0.102rem + 3.63vw, 3rem);
    @media (max-width: rem(912)) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: rem(708)) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: rem(480)) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__card {
    border: 1px solid rgba(227, 209, 209, 0.4);
    border-radius: rem(23);
    padding: rem(15) rem(16) rem(17);
    position: relative;
    margin-bottom: rem(32);
  }

  &__button {
    text-align: center;
    button {
      font-weight: 700;
      font-size: rem(14);
      color: var(--color-white);
      border-radius: 12px;
      background: var(--color-green-bg);
      padding: rem(7) rem(49);
    }
  }
}
.card {
  &__img {
    position: relative;
    padding-bottom: 120.535714%; /* 270/224 */
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__img::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(243, 232, 232, 0.1), #f3e8e8);
    opacity: 0.5;
  }

  &__title {
    position: absolute;
    width: rem(139);
    height: rem(32);
    left: rem(32);
    bottom: rem(39);
    font-weight: 700;
    font-size: rem(24);
  }
}
</style>
