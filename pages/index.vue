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
  <Container>
    <h1>Products</h1>
    <main>
      <ProductGrid :products="data.products" />
    </main>
    <p v-if="error">{{ error }}</p>
  </Container>
</template>

<style lang="scss">
h1 {
  margin-bottom: 4rem;
}
</style>
