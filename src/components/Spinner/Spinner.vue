<template>
  <div
      class="spinner"
      :class="[
          customSpinnerClass,
          `spinner-${!!customSize ? 'custom' : size}`
      ]"
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
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

  div {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 80%;
    border: 4px solid v-bind(colorSpinner);
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.3, 1) infinite;
    border-color: v-bind(colorSpinner) transparent transparent transparent;

    :nth-child(1) {
      animation-delay: -0.45s;
    }

    :nth-child(2) {
      animation-delay: -0.3s;
    }

    :nth-child(3) {
      animation-delay: -0.15s;
    }
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

  &-custom {
    width: v-bind(customSize);
    height: v-bind(customSize);
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