<template>
  <div style="width: max-content">
    <button
        class="base-button"
        :class="classes"
        :disabled="disabled"
        :style="customStyle"
        :title="titleMessage"
        @click="$emit('click')"
    >
      <span v-if="loading">
        <slot name="spinner">
          <Spinner
              data-test-id="spinner"
              size="1.4em"
              :color-spinner="colorSpinner"
          />
        </slot>
      </span>

      <span v-else class="base-button-content">
        <slot name="leftIcon">
          <FontAwesomeIcon v-if="leftIcon" :icon="leftIcon" data-test-id="left-icon" />
        </slot>

        <slot>Label</slot>

        <slot name="rightIcon">
          <FontAwesomeIcon
              v-if="disabled && !hideRightIcon"
              icon="fa fa-lock"
              data-test-id="right-icon-lock"
          />
           <FontAwesomeIcon
               v-else-if="rightIcon && !hideRightIcon"
               :icon="rightIcon"
               data-test-id="right-icon"
           />
        </slot>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Props } from '@/typing/BaseButton'
import Spinner from '@/components/Spinner/Spinner.vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

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
	useHover: true,
	hideRightIcon: false,
	hideLeftIcon: false
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
		return 'btn-custom-size'
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
  padding: var(--size-tiny-2x) var(--size-small-2x);
  border: 1px solid transparent;
  color: #fff;
  border-radius: var(--size-tiny-1x);
  line-height: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &-transition {
    transition: background-color 0.3s ease-in-out;
  }

  &.btn-primary {
    background-color: var(--primary-color);
    border-color: var(--border-primary-color);

    &.base-button-hover:hover {
      background-color: var(--primary-color-hover);
      border-color: var(--border-primary-color-hover);
    }
  }

  &.btn-success {
    background-color: var(--success);
    border-color: var(--border-success);

    &.base-button-hover:hover {
      background-color: var(--success-hover);
      border-color: var(--border-success-hover);
    }
  }

  &.btn-danger {
    background-color: var(--danger);
    border-color: var(--border-danger);

    &.base-button-hover:hover {
      background-color: var(--danger-hover);
      border-color: var(--border-danger-hover);
    }
  }

  &.btn-outline-primary {
    background-color: var(--outline-primary);
    border-color: var(--border-outline-primary);
    color: var(--outline-primary-color);

    &.base-button-hover:hover {
      background-color: var(--outline-primary)-hover;
      color: var(--outline-primary-color-hover);
    }
  }

  &.btn-outline-success {
    background-color: var(--outline-success);
    border-color: var(--outline-success-color);
    color: var(--border-outline-success);

    &.base-button-hover:hover {
      background-color: var(--outline-success-hover);
      color: var(--outline-success-color-hover);
    }
  }

  &.btn-outline-danger {
    background-color: var(--outline-danger);
    border-color: var(--border-outline-danger);
    color: var(--outline-danger-color);

    &.base-button-hover:hover {
      background-color: var(--outline-danger-hover);
      color: var(--outline-danger-color-hover);
    }
  }

  .btn-dark {
    background-color: var(--dark);
    border-color: var(--border-dark);
    color: var(--dark-color);

    &.base-button-hover:hover {
      background-color: var(--dark-hover);
      border-color: var(--border-dark-hover);
    }
  }

  .btn-outline-dark {
    background-color: var(--outline-dark);
    border-color: var(--border-outline-dark);
    color: var(--outline-dark-color);

    &.base-button-hover:hover {
      background-color: var(--outline-dark-hover);
      color: var(--outline-dark-color-hover);
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

  &.btn-custom-size {
    width: v-bind(size);
  }

  &[disabled] {
    background-color: gray;
    color: rgba(255, 255, 255, 0.7);
    border-color: gray;
    cursor: not-allowed;

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
      align-self: end;
    }
  }
}
</style>
