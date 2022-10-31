<script setup lang="ts">
import type { Product } from '@/types/product'

const route = useRoute()

const { data: product } = await useFetch<Product>(
  `https://dummyjson.com/products/${route.params.productId}`,
  { initialCache: false }
)
</script>

<template>
  <div>
    <h1>{{ product.title }}</h1>
    <img :src="product.thumbnail" :alt="product.title" />
    <p>{{ product.description }}</p>
  </div>
</template>
