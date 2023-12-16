<template>
  <div class="base-text-field" :class="{
    ['base-text-field-has-label']: label,
    [`base-text-field-${variant}`]: variant
  }">
    <div class="base-text-field-left-icon">
      <slot name="leftIcon">
        <i v-if="leftIcon" :class="leftIcon"></i>
      </slot>
    </div>
    <label
        v-if="label"
        for="base-text-field-input-name"
        class="base-text-field-label"
        :style="customStyleLabel"
        :class="{
          ['base-text-field-label-active']: (currentValue?.length || inputFocused) && !readonly,
          ['base-text-field-label-has-left-icon']: leftIcon
        }"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <input
        data-testid="base-text-field-input"
        name="base-text-field-input-name"
        type="text"
        class="base-text-field-input"
        v-model="currentValue"
        :class="{
            [`base-text-field-input-${variant}`]: variant,
            ['base-text-field-error']: hasError && !loading,
            ['base-text-field-border']: variant === 'outlined',
            ['base-text-field-input-has-spinner']: loading && !useBorderLoading,
            ['base-text-field-input-has-base-color']: variant === 'default',
            ['base-text-field-input-has-dark-color']: variant === 'dark',
            ['base-text-field-input-has-left-icon']: leftIcon
        }"
        :required="required"
        :style="[customStyle, { width, height }]"
        :placeholder="(currentValue?.length || inputFocused) && !readonly ? placeholder : ''"
        :disabled="disabled || (disableOnLoading && loading)"
        :readonly="readonly"
        @input="emitInputValue"
        @change="emitChangeValue"
        @blur="emitBlurValue"
        @focus="inputFocused = true"
        v-bind="bind"
    >
    <div class="base-text-field-right-icon">
      <slot name="spinner">
        <Spinner class="base-text-field-spinner" :size="loadingSize" :color-spinner="loadingColor" v-if="loading && !useBorderLoading"></Spinner>
      </slot>
      <slot name="rightIcon">
        <i v-if="!(loading && !useBorderLoading) && rightIcon" :class="rightIcon"></i>
      </slot>
    </div>
    <slot name="loadingBorder">
      <div class="base-text-field-loading-border" :style="{ ['background-color']: loadingColor }" v-if="loading && useBorderLoading"></div>
    </slot>
    <slot name="errorMessage" v-bind="{ error: errorMessage }">
      <span class="error-message" v-if="!(loading && useBorderLoading)">{{ errorMessage }}</span>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import Spinner from '@/components/Spinner/Spinner.vue'

/* === Props === */
const props = defineProps({
	modelValue: {
		type: String,
		default: null
	},
	bind: {
		type: Object,
		default: null
	},
	variant: {
		type: String,
		default: 'default',
		validator: (value: string) => ['default', 'outlined', 'underlined', 'dark'].includes(value),
	},
	useBorderLoading: {
		type: Boolean,
		default: false
	},
	loadingColor: {
		type: String,
		default: '#3498db'
	},
  loadingSize: {
    type: String,
    default: 'small'
  },
	disabled: {
		type: Boolean,
		default: false
	},
	readonly: {
		type: Boolean,
		default: false
	},
	loading: {
		type: Boolean,
		default: false
	},
	label: {
		type: String,
		default: null
	},
	placeholder: {
		type: String,
		default: null
	},
	disableOnLoading: {
		type: Boolean,
		default: false
	},
	maxLength: {
		type: Number,
		default: null
	},
	minLength: {
		type: Number,
		default: 0
	},
	required: {
		type: Boolean,
		default: false
	},
	width: {
		type: String,
		default: '100%'
	},
	height: {
		type: String,
		default: '30px'
	},
	rules: {
		type: Array<() => string | boolean>,
		default: []
	},
	customStyle: {
		type: String,
		default: ''
	},
	customStyleLabel: {
		type: String || Object,
		default: ''
	},
	disableRequiredRule: {
		type: Boolean,
		default: false
	},
	rightIcon: {
		type: String,
		default: ''
	},
	leftIcon: {
		type: String,
		default: ''
	}
})

/* === State === */
const currentValue = ref(props.modelValue)
const inputFocused = ref(false)
const hasError = ref(false)
const errorMessage = ref('')

/* === Computed === */
const loadingBorderSize = computed(() => {
  if (props.loadingSize === 'small') {
    return '2px'
  }

  return props.loadingSize
})
const allRules = computed(() => {
	const rules = []
	if (props.required && !props.disableRequiredRule) {
		rules.push((value: string) => !!value && !!value.length && value !== '' || 'Required field')
	}

	if (props.minLength) {
		rules.push((value: string) => value.length >= props.minLength || `Min ${props.minLength} characters`)
	}

	if (props.maxLength) {
		rules.push((value: string) => value.length <= props.maxLength || `Max ${props.maxLength} characters`)
	}

	return [...rules, ...props.rules]
})

/* === Methods === */
const validateRules = () => {
	if (props.readonly) {
		return
	}
	const errors = allRules
		.value
		.map((rule) => rule(currentValue.value))
		.filter(result => typeof result === 'string' || result === false)
	errorMessage.value = errors[0] as string
	hasError.value = !!errors.length
}

/* === Emits === */
const emits = defineEmits(['input:value', 'change:value', 'blur:value'])
const emitInputValue = () => {
	validateRules()
	emits('input:value', currentValue)
}
const emitChangeValue = () => {
	validateRules()
	emits('change:value', currentValue)
}
const emitBlurValue = () => {
	inputFocused.value = false
	validateRules()
	emits('blur:value', currentValue)
}

/* === Watchers === */
watch(currentValue, () => {
	validateRules()
})
</script>

<style scoped lang="scss">
@import '@/components/variables.scss';

@keyframes loadingBorder {
  0% {
    transform: scaleX(0);
  }
  10% {
    transform: scaleX(0.5)
  }
  30% {
    transform: scaleX(0.7)
  }
  50% {
    transform: scaleX(0.8);
  }
  75% {
    transform: scaleX(0.9);
  }
  100% {
    transform: scaleX(1);
  }
}

.base-text-field {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: $size-tiny-3x;

  [disabled] {
    background-color: $disabled-color;
  }

  &-has-label {
    margin-top: $size-small-1x;
  }

  &-input {
    height: 2em;
    border: none;
    padding-left: $size-tiny-3x;
    border-bottom: 1px solid $label-color;

    &-underlined {
      outline: none;

      &:focus {
       border-color:  $label-color;
      }
    }

    &-has-base-color {
      background-color: $base-color;
      color: $label-color;

      &:focus {
        outline: none;
        border-color: $dark-label-color;
      }
    }

    &-has-dark-color {
      background-color: $dark-base-color;
      border-bottom: 1px solid $dark-label-color;
      color: $dark-label-color;

      &:focus {
        outline: none;
        border-color: $label-color;
      }
    }

    &-has-spinner {
      padding-right: $size-large-2x;
      box-sizing: border-box;
    }

    &-has-left-icon {
      padding-left: $size-large-1x;
      box-sizing: border-box;
    }
  }

  &-border {
    &:not(.has-dark-color) {
      border: 1px solid $label-color;
    }
    &:not(.has-base-color) {
      border: 1px solid $dark-label-color;
    }
    border-radius: 0.4em;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-top: 0.1em;
  }

  &-loading-border {
    height: v-bind(loadingBorderSize);
    border-color: v-bind(loadingColor);
    border-style: solid;
    border-radius: 0.4em;
    transform-origin: left;
    animation: loadingBorder 3s linear infinite;
  }

  &-left-icon {
    position: absolute;
    top: 0.35em;
    left: 0.4em;
  }

  &-right-icon {
    position: absolute;
    top: 0.35em;
    right: 0.4em;
  }

  &-error {
    border-color: $error-color;

    &:focus {
      border-color: $error-color;
    }
  }

  .error-message {
    font-family: 'Arial', serif;
    color: $error-color;
    font-size: 0.7em;
    margin-top: $size-tiny-1x;
    margin-left: $size-tiny-3x;
    font-weight: bolder;
    display: inline-block;
  }

  &-label {
    color: $label-color;
    pointer-events: none;
    font-size: $size-small-1x;
    position: absolute;
    transition: top 100ms, left 1s;
    left: $size-tiny-3x;
    top: 0.6em;

    &-has-left-icon {
      transition: top 200ms, padding-left 1s;
      padding-left: $size-medium-3x;
    }

    &-active {
      padding-left: 0;
      top: -1.1em;
      font-size: 0.7em;
      font-weight: bold;
    }
  }
}
</style>