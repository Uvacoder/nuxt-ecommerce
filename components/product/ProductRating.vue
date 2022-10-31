<script setup lang="ts">
import StarRating from 'vue3-star-ratings'

defineProps<{
  rating: number
}>()
</script>

<template>
  <StarRating
    :model-value="rating"
    :show-control="false"
    star-size="16"
    :disable-click="true"
    star-color="currentColor"
  />
</template>

<style lang="scss">
.vue3-star-ratings {
  &__wrapper {
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
