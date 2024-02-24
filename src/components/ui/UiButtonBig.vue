<template>
  <div class="button">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
// @import '@/assets/calc.scss';
.button {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 1.12rem;
  color: #fff;
  background: #849783;
  border-radius: 0.62rem;
  padding: 16rem 2.62rem;
}
</style>
