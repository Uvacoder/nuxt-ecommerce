<script setup lang="ts">
import type { Product } from '@/types/product'
import { nanoid } from 'nanoid'

import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox'
import 'vue-easy-lightbox/style.css'

const props = defineProps<{
  images: Product['images']
}>()

const galleryId = ref(nanoid())

const { show, onHide, visibleRef, indexRef, imgsRef } = useEasyLightbox({
  imgs: props.images,
  initIndex: 0,
})
</script>

<template>
  <div class="image-gallery" :id="galleryId">
    <a v-for="(image, key) in images" :key="key" href="" @click.prevent="show">
      <nuxt-img
        class="image-gallery__item"
        fit="cover"
        format="webp"
        loading="lazy"
        :src="image"
        alt=""
      />
    </a>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>

<style lang="scss">
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  &__item {
    width: auto;
  }
}
</style>
