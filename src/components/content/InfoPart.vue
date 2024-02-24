<template>
  <div class="info">
    <div class="info__excellence">
      <div class="excellence__container">
        <div class="excellence__title"><h3>EXCELLENCE</h3></div>
        <div class="excellence__box-card">
          <div class="excellence__card">
            <div class="card__icon">
              <airplane-icon />
            </div>
            <h4 class="card__title">Free shipping</h4>
            <p class="card__txt">For orders over $ 100, delivery by any mail and courier is free</p>
          </div>
          <div class="excellence__card">
            <div class="card__icon"><box-arrow-icon /></div>
            <h4 class="card__title">Return and exchange</h4>
            <p class="card__txt">
              Within 14 days after receiving the product, you can return it or exchange it for
              another
            </p>
          </div>
          <div class="excellence__card">
            <div class="card__icon"><wool-icon /></div>
            <h4 class="card__title">Top manufacturers</h4>
            <p class="card__txt">
              Our store offers an assortment of products of only the best quality
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="info__about">
      <div class="about__container">
        <div class="about__title"><h3>ABOUT US</h3></div>
        <div class="about__photo-description">
          <div class="photo-description__right-side">
            <h4 class="photo-description__title">Wool boutique</h4>
            <p class="photo-description__txt">
              We know that the most valuable human resource is time. Therefore, we have selected the
              best quality materials for you at affordable prices. We also constantly update the
              assortment so that you can embody any of your imaginations.
            </p>
          </div>
          <div class="photo-description__left-side">
            <div class="photo-description__img"><img src="../../assets//img/girl_knits.png" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AirplaneIcon from '@/assets/svg/AirplaneIcon.vue'
import BoxArrowIcon from '@/assets/svg/BoxArrowIcon.vue'
import WoolIcon from '@/assets/svg/WoolIcon.vue'
</script>

<style lang="scss" scoped>
@import '../../assets/calc.scss';
.info {
  padding: rem(98) 0 rem(96.42);
  background-color: var(--color-pink);

  &__excellence {
    margin-bottom: rem(96);
  }

  &__about {
  }
}
.excellence {
  &__container {
  }

  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: rem(54);
    h3 {
      position: relative;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: rem(48);
    }
    h3::before {
      content: '';
      position: absolute;
      top: rem(22);
      left: rem(-193);
      width: rem(160);
      height: rem(2);
      background-color: var(--color-white);
    }
    h3::after {
      content: '';
      position: absolute;
      top: rem(22);
      right: rem(-193);
      width: rem(160);
      height: rem(2);
      background-color: var(--color-white);
    }
    @media (max-width: rem(730)) {
      h3::before,
      h3::after {
        display: none;
      }
    }
  }

  &__box-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: clamp(0.625rem, 0.204rem + 2.1vw, 2rem);
    @media (max-width: rem(830)) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: rem(32);
    }
  }

  &__card {
    background-color: var(--color-white);
    padding: rem(32) rem(32) rem(66.42);
    border-radius: 11px;
  }
}
.card {
  &__icon {
    display: flex;
    justify-content: center;
    margin-bottom: rem(30.58);
  }

  &__title {
    text-align: center;
    font-weight: 700;
    font-size: rem(24);
    margin-bottom: rem(16);
  }

  &__txt {
    text-align: center;
  }
}
.about {
  &__container {
  }

  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: rem(55.58);
    h3 {
      position: relative;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: rem(48);
    }
    h3::before {
      content: '';
      position: absolute;
      top: rem(22);
      left: rem(-193);
      width: rem(160);
      height: rem(2);
      background-color: var(--color-white);
    }
    h3::after {
      content: '';
      position: absolute;
      top: rem(22);
      right: rem(-193);
      width: rem(160);
      height: rem(2);
      background-color: var(--color-white);
    }
    @media (max-width: rem(730)) {
      h3::before,
      h3::after {
        display: none;
      }
    }
  }

  &__photo-description {
    display: flex;
    // flex-direction: column;
    @media (max-width: rem(760)) {
      flex-direction: column;
    }
  }
}
.photo-description {
  &__right-side {
    flex: 0 1 rem(482);
    padding-top: clamp(0rem, -1.155rem + 5.78vw, 3.776rem);
    padding-left: clamp(0rem, -1.855rem + 9.27vw, 6.063rem);
    padding-right: clamp(0.625rem, 0.204rem + 2.1vw, 2rem);
    @media (max-width: rem(760)) {
      padding: 0 0;
      flex: 0 1 auto;
      margin-bottom: rem(15);
    }
  }

  &__title {
    font-weight: 700;
    font-size: rem(24);
    margin-bottom: rem(24);
  }

  &__txt {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: rem(18);
    line-height: 150%;
  }

  &__left-side {
  }

  &__img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
