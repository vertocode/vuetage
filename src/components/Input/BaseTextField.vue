<template>
  <ErrorComponent v-if="modelValue === undefined">
    <h1>Error</h1>
    <p>
      Please ensure that you specify a "v-model" <a href="https://vuejs.org/guide/essentials/template-refs" target="_blank">ref value template</a> in your
      <a href="https://vuetage.vertocode.com/docs/components/base-text-field" target="_blank">
        BaseTextField</a> component; it is a crucial prop for proper functionality.
    </p>
  </ErrorComponent>
  <div :style="style" class="base-text-field" :class="{
    ['base-text-field-has-label']: label,
    [`base-text-field-${variant}`]: variant
  }" v-else >
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
          ['base-text-field-label-active']: ((hasText || inputFocused) && !readonly) || (readonly && hasText),
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
        :type="type"
        class="base-text-field-input"
        :value="modelValue"
        :class="{
            [`base-text-field-input-${variant}`]: variant,
            ['base-text-field-error']: hasError && !loading,
            ['base-text-field-border']: variant === 'outlined',
            ['base-text-field-input-has-spinner']: loading && !useBorderLoading,
            ['base-text-field-input-has-base-color']: variant === 'default',
            ['base-text-field-input-has-dark-color']: variant === 'dark',
            ['base-text-field-input-has-left-icon']: leftIcon || !!slots?.leftIcon,
            ['base-text-field-input-has-right-icon']: rightIcon || !!slots?.rightIcon
        }"
        :required="required"
        :style="[customStyle, { width, height }]"
        :placeholder="(hasText || inputFocused) && !readonly && placeholder ? placeholder : ''"
        :disabled="disabled || (disableOnLoading && loading)"
        :readonly="readonly"
        @input="emitUpdateModelValue($event.target.value)"
        @change="emitUpdateModelValue($event.target.value)"
        @blur="emitUpdateModelValue($event.target.value)"
        @focus="emitFocus($event)"
        @focusout="emitFocusOut($event)"
        @click="emits('click', $event)"
        @dblclick="emits('dblclick', $event)"
        @mousedown="emits('mousedown', $event)"
        @mouseup="emits('mouseup', $event)"
        @mouseenter="emits('mouseenter', $event)"
        v-bind="bind"
    >
    <div class="base-text-field-right-icon">
      <slot name="spinner">
        <Spinner class="base-text-field-spinner" :size="loadingSize" :color-spinner="loadingColor" v-if="loading && !useBorderLoading"></Spinner>
      </slot>
      <slot name="rightIcon">
        <i v-if="!(loading && !useBorderLoading) && rightIcon" :class="rightIcon"></i>
        <i v-else-if="password" :class="`fa ${hidePassword ? 'fa-eye-slash' : 'fa-eye'}`" @click="hidePassword = !hidePassword"></i>
      </slot>
    </div>
    <slot name="loadingBorder">
      <div class="base-text-field-loading-border" :style="{ ['background-color']: loadingColor }" v-if="loading && useBorderLoading"></div>
    </slot>
  </div>
  <slot name="errorMessage" v-bind="{ error: errorMessage }">
    <span class="error-message" v-if="!(loading && useBorderLoading)">{{ errorMessage }}</span>
  </slot>
</template>

<script setup lang="ts">
import { ref, watch, computed, useSlots } from 'vue'
import Spinner from '@/components/Spinner/Spinner.vue'
import ErrorComponent from '@/components/Error/ErrorComponent.vue'
import { Props } from '@/typing/BaseTextField'

/* === Props === */
const props = withDefaults(defineProps<Props>(), {
	rules: () => [],
	variant: 'default',
	useBorderLoading: false,
	loadingColor: 'black',
	loadingSize: 'small',
	disabled: false,
	readonly: false,
	loading: false,
	label: null,
	placeholder: null,
	disableOnLoading: false,
	maxLength: null,
	minLength: 0,
	required: false,
	width: '',
	height: '30px',
	style: '',
	customStyle: '',
	customStyleLabel: '',
	disableRequiredRule: false,
	rightIcon: '',
	leftIcon: '',
	eventEmitter: 'input',
	password: false,
})

/* === State === */
const inputFocused = ref(false)
const hasError = ref(false)
const errorMessage = ref('')
const hidePassword = ref(true)

/* === Computed === */
const type = computed(() => {
	if (props.password && hidePassword.value) {
		return 'password'
	}

	return 'text'
})

const loadingBorderSize = computed(() => {
	if (props.loadingSize === 'small') {
		return '2px'
	}

	return props.loadingSize
})

const allRules = computed(() => {
	const rules = []
	if (props.required && !props.disableRequiredRule) {
		rules.push((value: string | null) => !!value && !!value.length && value !== '' || 'Required field')
	}

	if (props.minLength) {
		rules.push((value: string) => value.length >= (props.minLength as number) || `Min ${props.minLength} characters`)
	}

	if (props.maxLength) {
		rules.push((value: string) => value.length <= (props.maxLength as number) || `Max ${props.maxLength} characters`)
	}

	return [...rules, ...props.rules]
})

const hasText = computed(() => !!(props.modelValue as string)?.length)

/* === Methods === */
const validateRules = () => {
	if (props.readonly) {
		return
	}
	const errors = allRules
		.value
		.map((rule) => rule(props.modelValue as string))
		.filter(result => typeof result === 'string' || result === false)
	errorMessage.value = errors[0] as string
	hasError.value = !!errors.length
	emits('hasError', hasError.value)
}

/* === Emits === */
const emits = defineEmits([
	'update:modelValue',
	'hasError',
	'input',
	'change',
	'blur',
	'focus',
	'focusout',
	'click',
	'dblclick',
	'mousedown',
	'mouseup',
	'mouseenter',
])

const emitUpdateModelValue = (value: string) => {
	if (props.eventEmitter === 'input') {
		emits('update:modelValue', value)
		emits('input', value)
	} else if (props.eventEmitter === 'change') {
		emits('update:modelValue', value)
		emits('change', value)
	} else if (props.eventEmitter === 'blur') {
		emits('update:modelValue', value)
		emits('blur', value)
	}
}

const emitFocus = (event: Event) => {
	inputFocused.value = true
	emits('focus', event)
}

const emitFocusOut = (event: Event) => {
	inputFocused.value = false
	emits('focusout', event)
}

/* === Watchers === */
watch(() => props.modelValue, () => {
	validateRules()
})

/* === Slots === */
const slots = useSlots()
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

  [disabled] {
    opacity: 0.7;
    cursor: not-allowed;
    background-color: $disabled-color;
  }

  &-has-label {
    margin-top: $size-small-1x;
  }

  &-input {
    height: 2em;
    border: none;
    box-sizing: border-box;
    padding-left: $size-tiny-3x;
    border-bottom: 1px solid $label-color;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;

    &-underlined {
      outline: none;

      &:focus {
       border-color:  $label-color;
      }
    }

    &-has-base-color {
      background-color: $base-color;
      border-radius: 3px;
      color: $label-color;

      &:focus {
        outline: none;
        border-color: $dark-label-color;
      }
    }

    &-has-dark-color {
      background-color: $dark-base-color;
      border: 1px solid $dark-label-color;
      border-radius: 3px;
      color: $label-color;

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

    &-has-right-icon {
      padding-right: $size-large-1x;
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
    transform-origin: left;
    animation: loadingBorder 5s linear infinite;
  }

  &-left-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.4em;
    display: flex;
    align-items: center;
  }

  &-right-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.5em;
    display: flex;
    align-items: center;
  }

  &-error {
    border-color: $error-color;

    &:focus {
      border-color: $error-color;
    }
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
      padding-left: $size-medium-2x;
    }

    &-active {
      padding-left: 0;
      top: -1.1em;
      font-size: 0.7em;
      font-weight: bold;
    }
  }
}

.error-message {
  font-family: 'Arial', serif;
  color: $error-color;
  font-size: 0.7em;
  margin-left: $size-tiny-3x;
  font-weight: bolder;
  display: inline-block;
}
</style>