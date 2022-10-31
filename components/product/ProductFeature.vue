<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<template>
  <div class="hero">
    <Container>
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </Container>
  </div>
</template>

<style>
.hero {
  padding-block: 6rem;
}
</style>
