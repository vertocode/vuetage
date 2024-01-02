<template>
  <div class="base-group">
    <div
        class="header"
        :style="[
          customStyle,
          isHovered
            ? customStyle?.hover
            : {}
        ]"
        @mouseenter="isHovered = true"
        @mouseout="isHovered = false"
    >
      <div class="title">{{ title }}</div>
    </div>
    <div class="items"></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { CustomStyle } from '@/typing/Style'

defineProps<{
  title: string
  customStyle?: CustomStyle
}>()

const isHovered = ref(false)
</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-group {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid $base-color;

    .title {
      font-size: 1.1em;
      font-weight: 600;
    }

    .items {
      padding-left: 3em;
    }
  }
}
</style>