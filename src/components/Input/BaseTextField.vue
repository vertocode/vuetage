<template>
  <div class="base-text-field" :class="{ ['base-text-field-has-label']: label }">
    <label
        v-if="label"
        for="base-text-field-input-name"
        class="base-text-field-label"
        :style="customStyleLabel"
        :class="{
          ['base-text-field-label-active']: currentValue?.length || inputFocused
        }"
    >{{ label }}</label>
    <input
        name="base-text-field-input-name"
        type="text"
        class="base-text-field-input"
        v-model="currentValue"
        :class="{
            ['base-text-field-error']: hasError && !loading
        }"
        :required="required"
        :style="customStyle"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="emitInputValue"
        @change="emitChangeValue"
        @blur="emitBlurValue"
        @focus="inputFocused = true"
        v-bind="bind"
    >
    <span class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'

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
  disabled: {
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
    type: Array<Function>,
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
  const errors = allRules
      .value
      .map(rule => rule(currentValue.value))
      .filter(result => typeof result === 'string' || result === false)
  errorMessage.value = errors[0]
  hasError.value = !!errors.length
}

/* === Emits === */
const emits = defineEmits(['input:value', 'change:value', 'blur:value'])
const emitInputValue = () => {
  validateRules()
  emits("input:value", currentValue)
}
const emitChangeValue = () => {
  validateRules()
  emits("change:value", currentValue)
}
const emitBlurValue = () => {
  inputFocused.value = false
  validateRules()
  emits("blur:value", currentValue)
}

/* === Watchers === */
watch(currentValue, () => {
  validateRules()
})
</script>

<style lang="scss">
// Variables
$base-spacing: 0.7em;
$base-font-size: 1rem;
$label-color: #868686;
$error-color: red;

.base-text-field {
  position: relative;
  width: max-content;
  display: flex;
  flex-direction: column;
  margin-bottom: $base-spacing;

  &-has-label {
    margin-top: $base-spacing;
  }

  &-input {
    height: 2em;
    border: none;
    border-bottom: 1px solid $label-color;
    padding-left: $base-spacing;

    &:focus {
      outline: none;
      border-color: $label-color;
    }
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
    margin-top: $base-spacing;
    margin-left: $base-spacing;
    font-weight: bolder;
    display: inline-block;
  }

  &-label {
    color: $label-color;
    pointer-events: none;
    font-size: $base-font-size;
    position: absolute;
    left: 5%;
    top: 10%;

    &-active {
      top: -1em;
      font-size: 0.7em;
      font-weight: bold;
    }
  }
}
</style>