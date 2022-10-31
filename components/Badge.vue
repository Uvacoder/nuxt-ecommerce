<script setup lang="ts"></script>

<template>
  <small class="badge">
    <slot />
  </small>
</template>

<style lang="scss">
.badge {
  position: relative;
  padding: 0.2rem 0.5rem;
  color: #888;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &::before {
    content: '';
    background-color: currentColor;
    opacity: 0.1;
    position: absolute;
    inset: 0;
    border-radius: inherit;
  }
}
</style>
