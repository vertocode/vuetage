<template>
  <span
      class="spinner"
      :class="[
          customSpinnerClass,
          `spinner-${!!customSize ? 'custom' : size}`
      ]"
  ></span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Size } from '@/typing/Spinner'
interface Props {
  colorSpinner?: string,
  size: Size | string | null,
  customSpinnerClass?: string,
  customSpinnerInnerClass?: string
}

const props = withDefaults(defineProps<Props>(), {
	colorSpinner: 'black',
	size: null
})

const customSize = computed(() => {
	if (['small', 'medium', 'large'].includes(props.size as string)) {
		return null
	}

	return props.size || '2em'
})
</script>

<style lang="scss">
.spinner {
  display: inline-block;
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-sizing: border-box;
  animation: spin 1s linear infinite;

  &-small {
    border: 3px solid v-bind(colorSpinner);
    width: 1em;
    height: 1em;
    border-bottom-color: transparent;
  }

  &-medium {
    border: 5px solid v-bind(colorSpinner);
    width: 4em;
    height: 4em;
    border-bottom-color: transparent;
  }

  &-large {
    border: 7px solid v-bind(colorSpinner);
    width: 6em;
    height: 6em;
    border-bottom-color: transparent;
  }

  &-custom {
    border: calc(v-bind(customSize) / 6) solid v-bind(colorSpinner);
    width: v-bind(customSize);
    height: v-bind(customSize);
    border-bottom-color: transparent;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>