<template>
  <div
      class="base-item"
      :class="{ active }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  active?: boolean
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-item {
  padding: 10px;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    background-color: $base-color;
  }

  &.active {
    background-color: $active-bg-color;
    color: $active-text-color;
  }
}
</style>

