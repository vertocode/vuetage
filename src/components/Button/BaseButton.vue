<template>
  <div style="width: max-content">
    <button
        class="base-button"
        :class="classes"
        :disabled="props.disabled"
        :style="customStyle"
        :title="titleMessage"
    >
      <span v-if="loading">
        <slot name="spinner">
          <Spinner size="small" :color-spinner="colorSpinner" />
        </slot>
      </span>

      <span v-else class="base-button-content">
        <slot name="leftIcon">
         <i v-if="leftIcon" :class="leftIcon"></i>
        </slot>

        <slot>Label</slot>

        <slot name="rightIcon">
          <i v-if="rightIcon" :class="rightIcon"></i>
        </slot>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Props } from '@/typing/BaseButton'
import Spinner from '@/components/Spinner/Spinner.vue'

const props = withDefaults(defineProps<Props>(), {
	disabled: false,
	tooltipMessage: null,
	variant: 'primary',
	size: 'medium',
  rightIcon: null,
	loading: false,
  customStyle: undefined,
  useBGTransition: true,
  useHover: true
})

const titleMessage = computed(() => {
	return props.tooltipMessage ?? props.disabled ? 'This button is disabled.' : ''
})

const sizeClass = computed(() => {
	switch (props.size) {
	case 'small':
		return 'btn-small'
	case 'medium':
		return 'btn-medium'
	case 'large':
		return 'btn-large'
	default:
		throw new Error('"size" props value passed is not valid.')
	}
})

const classes = computed(() => {
  const classes = [sizeClass.value, `btn-${props.variant}`, props.customClass]

  if (props.useBGTransition) {
    classes.push('base-button-transition')
  }

  if (props.useHover) {
    classes.push('base-button-hover')
  }

  return classes.filter(Boolean)
})
</script>

<style scoped lang="scss">
.base-button {
  padding: 10px 20px;
  border: 1px solid transparent;
  color: #fff;
  border-radius: 3em;
  line-height: 1;
  cursor: pointer;
  font-weight: 700;
  font-family: 'Nuvito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  &-transition {
    transition: background-color 0.3s ease-in-out;
  }

  &.btn-primary {
    background-color: #1EA7FD;
    border-color: #1EA7FD;

    &.base-button-hover:hover {
      background-color: #0056b3;
      border-color: #0056b3;
    }
  }

  &.btn-success {
    background-color: #28a745;
    border-color: #28a745;

    &.base-button-hover:hover {
      background-color: #1e7e34;
      border-color: #1e7e34;
    }
  }

  &.btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;

    &.base-button-hover:hover {
      background-color: #c82333;
      border-color: #c82333;
    }
  }

  &.btn-outline-primary {
    background-color: transparent;
    border-color: #007bff;
    color: #007bff;

    &.base-button-hover:hover {
      background-color: #007bff;
      color: #fff;
    }
  }

  &.btn-outline-success {
    background-color: transparent;
    border-color: #28a745;
    color: #28a745;

    &.base-button-hover:hover {
      background-color: #28a745;
      color: #fff;
    }
  }

  &.btn-outline-danger {
    background-color: transparent;
    border-color: #dc3545;
    color: #dc3545;

    &.base-button-hover:hover {
      background-color: #dc3545;
      color: #fff;
    }
  }

  &.btn-dark {
    background-color: black;
    border-color: black;
    color: white;

    &.base-button-hover:hover {
      background-color: #424242;
    }
  }

  &.btn-outline-dark {
    background-color: transparent;
    border-color: black;
    color: black;

    &.base-button-hover:hover {
      background-color: #969696;
    }
  }

  &.btn-small {
    height: 3em;
    width: 8em;
    font-size: 0.8rem;
    padding: 5px 10px;
  }

  &.btn-medium {
    height: 3em;
    width: 10em;
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  &.btn-large {
    height: 3em;
    width: 12em;
    font-size: 1rem;
    padding: 15px 30px;
  }

  &[disabled] {
    background-color: gray;
    border-color: gray;
    cursor: auto;
    &.base-button-hover:hover {
      background-color: gray;
      border-color: gray;
    }
  }

  .base-button-content {
    display: flex;
    min-width: max-content;
    justify-content: center;
    align-items: center;
    gap: 0.7em;

    icon {
      margin-top: 5px;
    }
  }
}
</style>
