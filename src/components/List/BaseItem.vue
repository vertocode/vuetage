<template>
  <div
      class="base-item"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-item {
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: $base-color;
  }
}
</style>

