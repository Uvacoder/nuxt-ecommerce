<script setup lang="ts"></script>

<template>
  <small class="badge">
    <slot />
  </small>
</template>

<style lang="scss">
.badge {
  padding: 0.2rem 0.5rem;
  background-color: #eaeaea;
  color: #888;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
