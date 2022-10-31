<script setup lang="ts">
import type { Product } from '@/types/product'

defineProps<{
  images: Product['images']
}>()
</script>

<template>
  <div class="image-gallery">
    <nuxt-img v-for="image in images" fit="cover" format="webp" :src="image" />
  </div>
</template>

<style lang="scss">
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
