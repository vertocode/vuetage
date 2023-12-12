<template>
  <div
      class="spinner"
      :class="[
          customSpinnerClass,
          `spinner-${size}`
      ]"
      :style="{
        borderTopColor: colorSpinner
      }"
  >
    <div class="spinner-inner" :class="customSpinnerInnerClass"></div>
  </div>
</template>

<script setup lang="ts">
import { Size } from '@/typing/Spinner'
interface Props {
  colorSpinner?: string,
  size: Size | null,
  customSpinnerClass?: string,
  customSpinnerInnerClass?: string
}

withDefaults(defineProps<Props>(), {
	colorSpinner: '#fff',
	size: null
})
</script>

<style lang="scss">
.spinner {
  border: 4px solid transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  &-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &-small {
    width: 0.7em;
    height: 0.7em;
  }

  &-medium {
    width: 4em;
    height: 4em;
  }

  &-large {
    width: 6em;
    height: 6em;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>