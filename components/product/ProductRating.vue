<script setup lang="ts">
defineProps<{
  rating: number
}>()
</script>

<template>
  <strong>{{ rating }}/5</strong>
</template>
