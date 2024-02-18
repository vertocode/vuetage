<template>
  <div
      class="base-item"
      :class="[{ active }, customClass]"
      :style="[
          customStyle,
          isHovered
            ? customStyle?.hover
            : {}
      ]"
      @mouseenter="isHovered = true"
      @mouseout="isHovered = false"
  >
    <i v-if="leftIcon" :class="leftIcon"></i>
    <slot v-bind="{ active }"></slot>
    <i v-if="rightIcon" :class="rightIcon"></i>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Props } from '@/typing/BaseItem'

const isHovered = ref(false)

const props = defineProps<Props>()

const activeTextColor = computed(() => {
	return props?.activeTextColor || '#666'
})

const activeBgColor = computed(() => {
	return props?.activeBgColor || '#CCCCCC'
})

const cursor = computed(() => {
	return props?.cursor || 'pointer'
})
</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-item {
  padding: 10px;
  cursor: v-bind(cursor);
  font-size: 0.9em;
  display: flex;
  align-items: center;
  gap: 1em;

  &:hover {
    background-color: $base-color;
  }

  &.active {
    background-color: v-bind(activeBgColor);
    color: v-bind(activeTextColor);
  }
}
</style>

