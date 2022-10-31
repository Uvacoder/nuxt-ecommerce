<script setup lang="ts">
import type { Product } from '@/types/product'

defineProps<{
  product: Product
}>()

const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
  })
</script>

<template>
  <NuxtLink :to="`/products/${product.id}`" class="product-card">
    <img :src="product.thumbnail" :alt="product.title" />
    <div class="product-card__info">
      <h3 class="product-card__title">{{ product.title }}</h3>
      <Badge>{{ product.category }}</Badge>
      <p class="product-card__description">{{ product.description }}</p>
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
        "
      >
        <p>{{ formatCurrency(product.price) }}</p>
        <ProductRating :rating="product.rating" />
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss">
.product-card {
  color: inherit;
  text-decoration: none;

  &__title,
  &__description {
    margin-block: 1rem;
  }

  &__description {
    opacity: 0.7;
  }

  img {
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
  }
}
</style>
