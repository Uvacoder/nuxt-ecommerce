<script setup lang="ts">
import type { Product } from '@/types/product'

const route = useRoute()

const { data: product } = await useFetch<Product>(
  `https://dummyjson.com/products/${route.params.productId}`,
  { initialCache: false }
)
</script>

<template>
  <Container class="product-info">
    <nuxt-img
      fit="cover"
      format="webp"
      loading="lazy"
      :src="product.thumbnail"
      :alt="product.title"
    />
    <div class="product-info__details">
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
    </div>
    <ImageGallery class="product-info__gallery" :images="product.images" />
  </Container>
</template>

<style lang="scss">
.product-info {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 2fr));

  &__gallery {
    margin-top: 4rem;

    @media (min-width: 600px) {
      grid-column: span 2;
    }
  }
}
</style>
