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
      <slot name="title">
        <i v-if="leftIcon" :class="leftIcon"></i>
        <div class="title">{{ title }}</div>
        <i v-if="rightIcon" :class="rightIcon"></i>
      </slot>
    </div>
    <div class="items">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { Props } from '@/typing/BaseGroup'

defineProps<Props>()

const isHovered = ref(false)
</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-group {
  .header {
    display: flex;
    align-items: center;
    gap: 1em;
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