<template>
  <div class="card-product">
    <div class="card-product__img"><img :src="getImagePath(popularProduct.productImg)" /></div>
    <h3 class="card-product__name">{{ popularProduct.productName }}</h3>
    <div class="card-product__action">
      <div class="action__price">
        <span>price:</span><span>${{ popularProduct.productPrice }}</span>
      </div>
      <div class="action__button"><button @click="onAddToCart">Add to cart</button></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  popularProduct: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['addToCart'])
const onAddToCart = () => {
  emit('addToCart', props['popularProduct'].id)
}
const getImagePath = (imgPath) => new URL(`../../assets/img/${imgPath}`, import.meta.url).href
</script>

<style lang="scss" scoped>
@import '../../assets/calc.scss';

.card-product {
  border: 1px solid rgba(227, 209, 209, 0.4);
  border-radius: 11px;
  padding: rem(8) rem(7) rem(17) rem(7);
  transition: background 0.7s;
  @media (hover: hover) {
    &:hover {
      background: rgba(227, 209, 209, 0.1);
    }
  }
  // opacity: 0.4;
  &__img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    margin-bottom: rem(11);
    padding: 0 rem(6);
  }

  &__action {
    display: flex;
    justify-content: space-between;
    padding: 0 rem(6);
    // @media (max-width: rem(1040)) {
    //   flex-direction: column;
    //   row-gap: rem(10);
    // }
  }
}
// .card-product:hover {
//   background: rgba(227, 209, 209, 0.1);
// }
.action {
  &__price {
    & > :first-child {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 14px;
    }
    & > :last-child {
      font-weight: 700;
      font-size: 24px;
    }
  }

  &__button {
    button {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: 11px;
      color: var(--color-white);
      background: var(--color-green-bg);
      border-radius: 10px;
      padding: rem(9) rem(12) rem(8);
    }
  }
}
</style>
