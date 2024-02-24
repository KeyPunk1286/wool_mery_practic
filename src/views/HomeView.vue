<template>
  <header>
    <the-header />
  </header>
  <main>
    <div class="main__header-part">
      <header-part />
    </div>
    <div class="main__popular-part">
      <popular-part />
    </div>
    <div class="main__info-part">
      <info-part />
    </div>
    <div class="main__catalog-part">
      <catalog-part />
    </div>
    <div class="main__media-part">
      <media-part />
    </div>
  </main>
</template>

<script setup>
//==== import component
import TheHeader from '@/components/block/theHeader.vue'
import HeaderPart from '@/components/content/HeaderPart.vue'
import PopularPart from '@/components/content/PopularPart.vue'
import InfoPart from '@/components/content/InfoPart.vue'
import CatalogPart from '@/components/content/CatalogPart.vue'
import MediaPart from '@/components/content/MediaPart.vue'
</script>

<style lang="scss" scoped></style>
