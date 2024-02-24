<template>
  <div class="media">
    <div class="media__coontainer">
      <div class="media__video">
        <div class="video__title"><h3>VIDEO</h3></div>
        <div class="video__box-card">
          <div class="video__card">
            <a
              target="_blank"
              class="card__link"
              href="https://www.youtube.com/results?search_query=10+patterns+for+knitting+sweaters"
            >
              <div class="card__img"><img src="../../assets/img/pattern_ten.png" /></div>
              <div class="card__top-position">
                <play-icon />
                <h4 class="card__title">10 patterns for knitting sweaters</h4>
              </div>
            </a>
          </div>
          <div class="video__card">
            <a
              target="_blank"
              class="card__link"
              href="https://www.youtube.com/results?search_query=Review+of+new+items+from+Merry+Fraya"
            >
              <div class="card__img"><img src="../../assets/img/review_merry_fraya.png" /></div>
              <div class="card__top-position">
                <play-icon />
                <h4 class="card__title">Review of new items from Merry Fraya</h4>
              </div>
            </a>
          </div>
          <div class="video__card">
            <a
              target="_blank"
              class="card__link"
              href="https://www.youtube.com/results?search_query=3+ways+to+knit+a+string+bag"
            >
              <div class="card__img"><img src="../../assets/img/string_bag.png" /></div>
              <div class="card__top-position">
                <play-icon />
                <h4 class="card__title">10 patterns for knitting sweaters</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="media__reviews">
      <div class="reviews__title"><span>REVIEWS</span></div>
      <div class="reviews__slider">
        <vs-slider />
      </div>
    </div>
  </div>
</template>

<script setup>
//==== import component
import PlayIcon from '@/assets/svg/PlayIcon.vue'
import VsSlider from '@/components/slider/VsSlider.vue'
</script>

<style lang="scss" scoped>
@import '../../assets/calc.scss';
.media {
  background-color: var(--color-pink);
  padding-top: clamp(0.938rem, -1.131rem + 10.34vw, 6.625rem);
  padding-bottom: clamp(0.938rem, 0.369rem + 2.84vw, 2.5rem);

  &__coontainer {
  }

  &__video {
  }

  &__reviews {
  }
}
.video {
  &__title {
    font-weight: 400;
    font-size: rem(48);
    text-align: center;
    span {
      position: relative;
    }
    span::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: rem(160);
      height: rem(3);
      background-color: var(--color-white);
    }
    span::after {
    }
  }

  &__box-card {
  }

  &__card {
  }
}
.card {
  &__link {
  }

  &__img {
  }

  &__top-position {
  }

  &__title {
  }
}
.reviews {
  &__title {
  }

  &__slider {
  }
}
</style>
