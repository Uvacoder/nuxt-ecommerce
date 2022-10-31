<script lang="ts" setup>
import type { Product } from '@/types/product'

interface Response {
  products: Product[]
  limit: number
  total: number
  skip: number
}

const { data, error } = await useFetch<Response>(
  'https://dummyjson.com/products'
)
</script>

<template>
  <div>
    <h1>Nuxt e-commerce</h1>
    <main>
      <ProductGrid :products="data.products" />
    </main>
    <p v-if="error">{{ error }}</p>
  </div>
</template>
