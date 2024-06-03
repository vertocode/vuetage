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
    <div class="base-text-field-container-input">
      <div class="base-text-field-container-input-left-icon">
        <slot name="leftIcon">
          <i v-if="leftIcon" :class="leftIcon" />
        </slot>
      </div>
      <label
          v-if="label"
          for="base-text-field-input-name"
          class="base-text-field-container-input-label"
          :style="customStyleLabel"
          :class="{
            ['base-text-field-container-input-label-active']: ((hasText || inputFocused) && !readonly) || (readonly && hasText),
            ['base-text-field-container-input-label-has-left-icon']: leftIcon,
            [`label-${variant}`]: variant
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
          class="base-text-field-container-input-input"
          :value="modelValue"
          :class="[
          {
              [`base-text-field-container-input-input-${variant}`]: variant,
              ['base-text-field-container-input-input-error']: hasError && !loading,
              ['base-text-field-container-input-input-border']: variant === 'outlined',
              ['base-text-field-container-input-input-has-spinner']: loading && !useBorderLoading,
              ['base-text-field-container-input-input-has-base-color']: variant === 'default',
              ['base-text-field-container-input-input-has-dark-color']: variant === 'dark',
              ['base-text-field-container-input-input-has-left-icon']: leftIcon || !!slots?.leftIcon,
              ['base-text-field-container-input-input-has-right-icon']: rightIcon || !!slots?.rightIcon
          },
          customClass
        ]"
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
          @keydown.enter="emits('enter', $event)"
          @keydown.up="emits('up', $event)"
          @keydown.down="emits('down', $event)"
          v-bind="bind"
      >
      <div class="base-text-field-container-input-right-icon">
        <slot name="spinner">
          <Spinner class="base-text-field-spinner" :size="loadingSize" :color-spinner="loadingColor" v-if="loading && !useBorderLoading"></Spinner>
        </slot>
        <slot name="rightIcon">
          <i v-if="!(loading && !useBorderLoading) && rightIcon" :class="rightIcon" />
          <i v-else-if="password" :class="`fa ${hidePassword ? 'fa-eye-slash' : 'fa-eye'}`" @click="hidePassword = !hidePassword"></i>
        </slot>
      </div>
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
	height: '32px',
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
const inputFocused = ref<boolean>(false)
const hasError = ref<boolean>(false)
const errorMessage = ref<string>('')
const hidePassword = ref<boolean>(true)

/* === Computed === */
const type = computed((): string => {
	if (props.password && hidePassword.value) {
		return 'password'
	}

	return 'text'
})

const loadingBorderSize = computed((): string => {
	if (props.loadingSize === 'small') {
		return '2px'
	}

	return props.loadingSize
})

const allRules = computed((): Array<(value: string) => string | boolean>  => {
	const rules: Array<(value: string) => string | boolean> = []
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

const hasText = computed((): boolean => !!(props.modelValue as string)?.length)

/* === Methods === */
const validateRules = (): void => {
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
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'hasError', hasError: boolean): void
  (e: 'input', input: string): void
  (e: 'change', value: string): void
  (e: 'blur', value: string): void
  (e: 'focus', event: Event): void
  (e: 'focusout', event: Event): void
  (e: 'enter', event: Event): void
  (e: 'up', event: Event): void
  (e: 'down', event: Event): void
  (e: 'click', event: MouseEvent): void
  (e: 'dblclick', event: MouseEvent): void
  (e: 'mousedown', event: MouseEvent): void
  (e: 'mouseup', event: MouseEvent): void
  (e: 'mouseenter', event: MouseEvent): void
}>()

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
    background-color: var(--disabled-color)
  }

  &-has-label {
    margin-top: var(--size-small-1x);
  }

  &-loading-border {
    height: v-bind(loadingBorderSize);
    border-color: v-bind(loadingColor);
    transform-origin: left;
    animation: loadingBorder 5s linear infinite;
  }

  &-container-input {
    position: relative;

    &-label {
      color: var(--label-color);
      pointer-events: none;
      font-size: var(--size-small-1x);
      position: absolute;
      transition: top 100ms, left 1s;
      transform: translate(0, -50%);
      top: 50%;
      left: 8px;

      &-has-left-icon {
        transition: top 200ms, left 1s;
        left: 30px;
      }

      &-active {
        transition: top 200ms;
        top: -10%;
        font-size: 0.7em;
        font-weight: bold;

        &.label-dark {
          background-color: var(--dark-base-color);
          border: 1px solid var(--dark-label-color);
          border-bottom: none;
          padding: 2px 8px 0 8px;
          border-radius: 8px 8px 0 0;
        }
      }

      &.label-dark {
        color: var(--dark-label-color);
      }
    }

    &-input {
      width: 100%;
      border: none;
      box-sizing: border-box;
      padding: var(--size-medium-1x) var(--size-tiny-3x);
      border-bottom: 1px solid var(--label-color);
      transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;

      &-underlined {
        outline: none;
        padding: var(--size-small-1x) var(--size-tiny-3x) var(--size-tiny-1x) var(--size-tiny-3x);

        &:focus {
          border-color: var(--label-color);
        }
      }

      &-has-base-color {
        background-color: var(--base-color);
        border-radius: 3px;
        color: var(--label-color);

        &:focus {
          outline: none;
          border-color: var(--dark-label-color);
        }
      }

      &-has-dark-color {
        background-color: var(--dark-base-color);
        border: 1px solid var(--dark-label-color);
        border-radius: 3px;
        color: var(--label-color);

        &:focus {
          outline: none;
          border-color: var(--label-color);
        }
      }

      &-has-spinner {
        padding-right: var(--size-large-2x);
        box-sizing: border-box;
      }

      &-has-left-icon {
        padding-left: 30px;
        box-sizing: border-box;
      }

      &-has-right-icon {
        padding-right: var(--size-large-1x);
        box-sizing: border-box;
      }

      &-border {
        &:not(.has-dark-color) {
          border: 1px solid var(--label-color);
        }
        &:not(.has-base-color) {
          border: 1px solid var(--dark-label-color);
        }
        border-radius: 0.4em;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        margin-top: 0.1em;
      }

      &-error {
        border-color: var(--error-color);

        &:focus {
          border-color: var(--error-color);
        }
      }
    }

    &-left-icon {
      position: absolute;
      transform: translate(0, -50%);
      top: 50%;
      left: 8px;
      display: flex;
      align-items: center;
    }

    &-right-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 8px;
      display: flex;
      align-items: center;
    }
  }
}

// Specific styles for underlined variant
.base-text-field-underlined {
  .base-text-field-container-input {
    &-left-icon, &-label, &-right-icon {
      top: 60%;
    }

    &-label-active {
      top: 12%;
    }
  }
}

.error-message {
  color: var(--error-color);
  font-size: 0.7em;
  margin-left: var(--size-tiny-3x);
  font-weight: bolder;
  display: inline-block;
}
</style>