<script setup lang="ts">
import type { Product } from '@/types/product'

const route = useRoute()

const { data: product } = await useFetch<Product>(
  `https://dummyjson.com/products/${route.params.productId}`,
  { initialCache: false }
)
</script>

<template>
  <Container>
    <h1>{{ product.title }}</h1>
    <nuxt-img
      fit="cover"
      format="webp"
      :src="product.thumbnail"
      :alt="product.title"
    />
    <p>{{ product.description }}</p>
    <ImageGallery :images="product.images" />
  </Container>
</template>
