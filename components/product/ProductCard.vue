<script setup lang="ts">
import type { Product } from '@/types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <NuxtLink :to="`/product/${product.id}`" class="product-card">
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
        "
      >
        <p>{{ product.price }}</p>
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
    margin-block: 0.5rem;
  }

  img {
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
  }
}
</style>
