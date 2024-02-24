<template>
  <div class="header__container">
    <div class="header__burger-btn">
      <button @click="toggleBurger">
        <burger-button />
      </button>
    </div>
    <div class="header__wrapper" :class="{ active: burgerView }">
      <nav class="wrapper__nav">
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/about">catalog</RouterLink>
        <a href="#">video</a>
        <a href="#">contacts</a>
      </nav>
    </div>
    <div class="header__actions">
      <div class="actions__search">
        <input type="text" placeholder="search" />
        <button><search-icon /></button>
      </div>
      <div class="actions__cart">
        <button><cart-icon /></button>
      </div>
    </div>
  </div>
</template>

<script setup>
//==== import
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
//=== import components
import BurgerButton from '@/assets/svg/BurgerButton.vue'
import SearchIcon from '@/assets/svg/SearchIcon.vue'
import CartIcon from '@/assets/svg/CartIcon.vue'
//==== data
const burgerView = ref(false)
//==== methods
function toggleBurger() {
  burgerView.value = !burgerView.value
}
</script>

<style lang="scss" scoped>
@import '../../assets/calc.scss';
.header {
  &__container {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-top: 1.78rem;
    padding-bottom: 1.78rem;
    @media (max-width: 50rem) {
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  &__burger-btn {
    display: none;
    @media (max-width: 50rem) {
      position: relative;
      display: block;
      z-index: 10;
    }
  }

  &__wrapper {
    margin-right: 7.18rem;
    @media (max-width: 54.25rem) {
      margin-right: 3rem;
    }
    @media (max-width: 50rem) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 70%;
      padding: 7.5rem 0 0 3.125rem;
      overflow: auto;
      //===========================
      transition: transform 0.3s ease-in-out;
      transform: translateY(-100%);
    }
  }

  &__actions {
    display: flex;
    @media (max-width: 50rem) {
      position: relative;
    }
  }
}
.wrapper {
  &__nav {
    display: flex;
    flex-wrap: wrap;
    column-gap: 3rem;
    @media (max-width: 29.5rem) {
      flex-direction: column;
      row-gap: 3rem;
    }
    a {
      font-family: var(--font-family);
      font-size: 1.12rem;
      color: var(--color-black-mute);
      opacity: 0.5;
    }
    & > :first-child {
      opacity: 1;
    }
  }
}
.actions {
  &__search {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 0.75rem;
    padding: 0.5rem 0.5rem 1rem;
    margin-right: 1.5rem;

    input {
      outline: none;
      width: 15.25rem;
      @media (max-width: 29.5rem) {
        width: 8.125rem;
      }
    }
  }

  &__cart {
    button {
      padding: 0.56rem 0.75rem 0.5rem 0.81rem;
      border-radius: 0.44rem;
      background: #849783;
    }
  }
}
.active {
  transform: translateY(0%);
}
</style>
