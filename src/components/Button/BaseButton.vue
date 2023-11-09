<template>
  <div style="width: max-content">
    <button
        class="base-button"
        :class="[
          sizeClass,
          variantClass,
          customClass
        ]"
        :disabled="props.disabled"
        :title="titleMessage"
    >
      <span v-if="loading">
        <Spinner />
      </span>
      <span v-else class="base-button-content">
        <i v-if="leftIcon" :class="leftIcon"></i>
        <slot></slot>
        <i v-if="rightIcon" :class="rightIcon"></i>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Size, Variant } from '../../typing/BaseButton'
import Spinner from '../Spinner/Spinner.vue'

interface Props {
  disabled?: boolean
  tooltipMessage?: string | null
  size?: Size
  variant?: Variant
  leftIcon?: string
  rightIcon?: string
  loading?: boolean
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
	disabled: false,
	tooltipMessage: null,
	variant: 'outline-primary',
	size: 'medium',
	loading: false
})

const variantClass = computed(() => {
	return `btn-${props.variant}`
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
</script>

<style scoped lang="scss">
.base-button {
  padding: 10px 20px;
  border: 1px solid transparent;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &.btn-primary {
    background-color: #007bff;
    border-color: #007bff;

    &:hover {
      background-color: #0056b3;
      border-color: #0056b3;
    }
  }

  &.btn-success {
    background-color: #28a745;
    border-color: #28a745;

    &:hover {
      background-color: #1e7e34;
      border-color: #1e7e34;
    }
  }

  &.btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;

    &:hover {
      background-color: #c82333;
      border-color: #c82333;
    }
  }

  &.btn-outline-primary {
    background-color: transparent;
    border-color: #007bff;
    color: #007bff;

    &:hover {
      background-color: #007bff;
      color: #fff;
    }
  }

  &.btn-outline-success {
    background-color: transparent;
    border-color: #28a745;
    color: #28a745;

    &:hover {
      background-color: #28a745;
      color: #fff;
    }
  }

  &.btn-outline-danger {
    background-color: transparent;
    border-color: #dc3545;
    color: #dc3545;

    &:hover {
      background-color: #dc3545;
      color: #fff;
    }
  }

  &.btn-dark {
    background-color: black;
    border-color: black;
    color: white;

    &:hover {
      background-color: #424242;
    }
  }

  &.btn-outline-dark {
    background-color: transparent;
    border-color: black;
    color: black;

    &:hover {
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
    &:hover {
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
