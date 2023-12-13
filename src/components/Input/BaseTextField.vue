<template>
  <div class="base-text-field" :class="{
    ['base-text-field-has-label']: label,
    ['base-text-field-has-shadow']: variant === 'box-shadow'
  }">
    <label
        v-if="label"
        for="base-text-field-input-name"
        class="base-text-field-label"
        :style="customStyleLabel"
        :class="{
          ['base-text-field-label-active']: (currentValue?.length || inputFocused) && !readonly
        }"
    >{{ label }}</label>
    <input
        name="base-text-field-input-name"
        type="text"
        class="base-text-field-input"
        v-model="currentValue"
        :class="{
            ['base-text-field-error']: hasError && !loading,
            ['base-text-field-border']: variant === 'outlined',
            ['base-text-field-has-spinner']: loading && !useBorderLoading,
            ['base-text-field-input-has-base-color']: variant === 'default',
            ['base-text-field-input-has-dark-color']: variant === 'dark'
        }"
        :required="required"
        :style="customStyle"
        :placeholder="(currentValue?.length || inputFocused) && !readonly ? placeholder : ''"
        :disabled="disabled || (disableOnLoading && disabled)"
        :readonly="readonly"
        @input="emitInputValue"
        @change="emitChangeValue"
        @blur="emitBlurValue"
        @focus="inputFocused = true"
        v-bind="bind"
    >
    <div class="base-text-field-loading-border" :style="{ ['background-color']: loadingColor }" v-if="loading && useBorderLoading"></div>
    <Spinner class="base-text-field-spinner" size="small" :color-spinner="loadingColor" v-else-if="loading"></Spinner>
    <span class="error-message" v-else>{{ errorMessage }}</span>
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
		validator: (value: string) => ['default', 'outlined', 'underlined', 'box-shadow'].includes(value),
	},
	useBorderLoading: {
		type: Boolean,
		default: false
	},
	loadingColor: {
		type: String,
		default: '#3498db'
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
		default: true
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
	rules: {
		type: Array<() => string | boolean>,
		default: []
	},
	customStyle: {
		type: String,
		default: ''
	},
	customStyleLabel: {
		type: String,
		default: ''
	},
	disableRequiredRule: {
		type: Boolean,
		default: false
	}
})

/* === State === */
const currentValue = ref(props.modelValue)
const inputFocused = ref(false)
const hasError = ref(false)
const errorMessage = ref('')

/* === Computed === */
const allRules = computed(() => {
	const rules = []
	if (props.required && !props.disableRequiredRule) {
		rules.push((value: string) => !!value.length && value !== '' || 'Required field')
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

<style lang="scss">
@import '@/components/main.scss';

@keyframes loadingBorder {
  0% {
    transform: scaleX(0.4);
  }
  50% {
    transform: scaleX(1);
  }
}

.base-text-field {
  position: relative;
  width: max-content;
  display: flex;
  flex-direction: column;
  margin-bottom: $size-tiny-3x;

  [disabled] {
    background-color: $disabled-color;
  }

  &-has-label {
    margin-top: $size-tiny-3x;
  }

  &-has-shadow {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &-input {
    height: 2em;
    border: none;
    padding-left: $size-tiny-3x;

    &-has-base-color {
      background-color: $base-color;
      border-bottom: 1px solid $label-color;
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

  &-has-spinner {
    padding-right: 2.7em;
  }

  &-loading-border {
    height: 2px;
    border-style: groove;
    border-radius: 0.4em;
    transform-origin: left;
    animation: loadingBorder 1s linear infinite;
  }

  &-spinner {
    position: absolute;
    top: 17%;
    right: 5%;
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
    transition: top 100ms, left 500ms;
    left: 5%;
    top: 12%;

    &-active {
      top: -1em;
      font-size: 0.7em;
      font-weight: bold;
    }
  }
}
</style>