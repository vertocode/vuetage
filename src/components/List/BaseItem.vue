<template>
  <div
      class="base-item"
      :class="{ active }"
      :style="[
          customStyle,
          isHovered
            ? customStyle?.hover
            : {}
      ]"
      @mouseenter="isHovered = true"
      @mouseout="isHovered = false"
  >
    <slot v-bind="{ active }"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CustomStyle } from '@/typing/Style'

const isHovered = ref(false)

interface Props {
  active?: boolean
  customStyle?: CustomStyle
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

