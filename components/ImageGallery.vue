<script setup lang="ts">
import { nanoid } from 'nanoid'

import Photoswipe from 'photoswipe'
import PhotoswipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

import type { Product } from '@/types/product'

defineProps<{
  images: Product['images']
}>()

const lightbox = ref(null)

onMounted(() => {
  if (!lightbox.value) {
    lightbox.value = new PhotoswipeLightbox({
      gallery: `#${nanoid()}`,
      children: 'a',
      pswpModule: Photoswipe,
    })
  }
  lightbox.value.init()
})

onUnmounted(() => {
  if (lightbox.value) {
    lightbox.value.destroy()
    lightbox.value = null
  }
})
</script>

<template>
  <div class="image-gallery">
    <a
      v-for="(image, key) in images"
      :key="key"
      :href="image"
      :data-pswp-width="200"
      :data-pswp-height="200"
      target="_blank"
      rel="noreferrer"
    >
      <nuxt-img
        class="image-gallery__item"
        fit="cover"
        format="webp"
        loading="lazy"
        :src="image"
        alt=""
      />
    </a>
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
