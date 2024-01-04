<template>
  <div style="width: max-content">
    <button
        class="base-button"
        :class="classes"
        :disabled="disabled"
        :style="customStyle"
        :title="titleMessage"
    >
      <span v-if="loading">
        <slot name="spinner">
          <Spinner
              data-test-id="spinner"
              size="small"
              :color-spinner="colorSpinner"
          />
        </slot>
      </span>

      <span v-else class="base-button-content">
        <slot name="leftIcon">
         <i
             v-if="leftIcon"
             :class="leftIcon"
             data-test-id="left-icon"
         ></i>
        </slot>

        <slot>Label</slot>

        <slot name="rightIcon">
          <i
              v-if="rightIcon"
              :class="rightIcon"
              data-test-id="right-icon"
          ></i>
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
	colorSpinner: 'white',
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
@import '@/components/variables.scss';

.base-button {
  padding: $size-tiny-2x $size-small-2x;
  border: 1px solid transparent;
  color: #fff;
  border-radius: $size-tiny-1x;
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
    background-color: $primary;
    border-color: $border-primary;

    &.base-button-hover:hover {
      background-color: $primary-hover;
      border-color: $border-primary-hover;
    }
  }

  &.btn-success {
    background-color: $success;
    border-color: $border-success;

    &.base-button-hover:hover {
      background-color: $success-hover;
      border-color: $border-success-hover;
    }
  }

  &.btn-danger {
    background-color: $danger;
    border-color: $border-danger;

    &.base-button-hover:hover {
      background-color: $danger-hover;
      border-color: $border-danger-hover;
    }
  }

  &.btn-outline-primary {
    background-color: $outline-primary;
    border-color: $border-outline-primary;
    color: $outline-primary-color;

    &.base-button-hover:hover {
      background-color: $outline-primary-hover;
      color: $outline-primary-color-hover;
    }
  }

  &.btn-outline-success {
    background-color: $outline-success;
    border-color: $outline-success-color;
    color: $border-outline-success;

    &.base-button-hover:hover {
      background-color: $outline-success-hover;
      color: $outline-success-color-hover;
    }
  }

  &.btn-outline-danger {
    background-color: $outline-danger;
    border-color: $border-outline-danger;
    color: $outline-danger-color;

    &.base-button-hover:hover {
      background-color: $outline-danger-hover;
      color: $outline-danger-color-hover;
    }
  }

  &.btn-dark {
    background-color: $dark;
    border-color: $border-dark;
    color: $dark-color;

    &.base-button-hover:hover {
      background-color: $dark-hover;
      border-color: $border-dark-hover;
    }
  }

  &.btn-outline-dark {
    background-color: $outline-dark;
    border-color: $border-outline-dark;
    color: $outline-dark-color;

    &.base-button-hover:hover {
      background-color: $outline-dark-hover;
      color: $outline-dark-color-hover;
    }
  }

  &.btn-small {
    height: 3em;
    min-width: 8em;
    font-size: 0.8rem;
    padding: 5px 10px;
  }

  &.btn-medium {
    height: 3em;
    min-width: 10em;
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  &.btn-large {
    min-height: 3em;
    min-width: 12em;
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
