<template>
  <div class="slide">
    <transition name="slider">
      <slot></slot>
    </transition>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.slider-enter-active,
.slider-leave-active {
  transition: opacity 0.7s ease-in-out;
}
.slider-enter-from,
.slider-leave-to {
  opacity: 0;
}
.slider-enter-to,
.slider-leave-from {
  opacity: 1;
}
</style>
