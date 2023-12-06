<template>
  <div class="base-text-field">
    <input
        class="base-text-field-input"
        v-model="currentValue" type="text"
        :class="{
            ['base-text-field-error']: hasError && !loading
        }"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="emitInputValue"
        @change="emitChangeValue"
        @blur="emitBlurValue"
    >
    <span class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'

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
  }
})

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
  validateRules()
  emits("blur:value", currentValue)
}

const currentValue = ref(props.modelValue)
const allRules = computed(() => {
  const rules = []
  if (props.required) {
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
const hasError = ref(false)
const errorMessage = ref('')

const validateRules = () => {
  const errors = allRules
      .value
      .map(rule => rule(currentValue.value))
      .filter(result => typeof result === 'string' || result === false)
  errorMessage.value = errors[0]
  hasError.value = !!errors.length
}

watch(currentValue, () => {
  validateRules()
})
</script>

<style lang="scss">
.base-text-field {
  width: max-content;
  display: flex;
  flex-direction: column;

  &-error {
    border-color: red;
  }

  .error-message {
    font-family: 'Arial', serif;
    color: red;
    font-size: 0.7em;
    margin-left: 2px;
    font-weight: bolder;
    display: inline-block;
  }

  &-input {
    border-radius: 0.3em;
  }
}
</style>