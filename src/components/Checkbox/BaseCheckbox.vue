<template>
  <BaseFlex align="center">
    <div class="base-checkbox">
      <input
          class="default-input"
          type="checkbox"
          width="48px"
          :disabled="disabled"
          :value="key"
          :checked="checked"
          @change="handleChange"
          @input="emits('input', $event)"
          @click="emits('click', $event)"
          @focus="emits('focus', $event)"
          @focusout="emits('focusout', $event)"
          @blur="emits('blur', $event)"
          @keydown="emits('keydown', $event)"
          @keyup="emits('keyup', $event)"
          @mousedown="emits('mousedown', $event)"
          @mouseup="emits('mouseup', $event)"
          @mouseout="emits('mouseout', $event)"
          @mouseenter="emits('mouseenter', $event)"
          @mouseleave="emits('mouseleave', $event)"
      />
      <div class="container">
        <slot name="checkmark" v-bind="{ checked }">
          <div class="checkmark" :class="disabled && 'disabled'">
         <span class="icon-container">
           <slot name="checkIcon" v-bind="{ checked }">
               <i
                   class="fa fa-check"
                   :class="checkmarkSize"
               />
           </slot>
        </span>
          </div>
        </slot>
      </div>
    </div>
    <div class="label-container" v-if="label">
      <slot name="label" v-bind="{ checked }">
        <span>{{ label }}</span>
      </slot>
    </div>
  </BaseFlex>
</template>

<script setup lang="ts">
import { Props } from '@/typing/BaseCheckbox'
import { computed, ref } from 'vue'
import { useColor } from "@/composables/useColor"
import { BaseFlex } from "@/components"

const props = defineProps<Props>()

const { variantColorHover, variantColor, variantTextColor } = useColor({
  variant: props.color || 'primary',
  disabled: props.disabled,
  customColors: {
    variantColor: props.variantColor,
    variantColorHover: props.bgHoverColor,
    variantTextColor: props.checkColor
  }
})

const emits = defineEmits([
  'key',
  'checked',
  'change',
  'input',
  'click',
  'focus',
  'focusout',
  'blur',
  'keydown',
  'keyup',
  'mousedown',
  'mouseup',
  'mouseout',
  'mouseenter',
  'mouseleave'
])
const checked = ref<boolean>(props.defaultChecked || false)

const handleChange = (e: Event) => {
  emits('change', e)
  const { value, checked: newChecked } = e.target as HTMLInputElement
  checked.value = newChecked
  if (props.key) {
    emits('key', value)
  }

  emits('checked', checked)
}

const size = computed(() => {
  switch (props.size) {
    case 'small':
      return '20px'
    case 'medium':
      return '25px'
    case 'large':
      return '30px'
    default:
      if (props.size) return props.size
      return '25px'
  }
})

const checkmarkSize = computed(() => {
  switch (props.size) {
    case 'small':
      return 'fa-2xs'
    case 'medium':
      return 'fa-1x'
    case 'large':
      return 'fa-lg'
    default:
      if (props.checkIconClass) return props.checkIconClass
      return 'fa-1x'
  }
})

</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-checkbox {
  position: relative;
  height: v-bind(size);
  width: v-bind(size);

  .default-input {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    cursor: pointer;
    z-index: 10;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  .container {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;

    .checkmark {
      width: 100%;
      height: 100%;
      background-color: var(--base-color);
      border: 1px solid v-bind(variantColorHover);
      border-radius: 4px;

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }

      i {
        display: none;
      }
    }
  }


  .default-input:hover ~ .container > .checkmark {
    background-color: v-bind(variantColorHover);
  }

  .default-input:checked ~ .container > .checkmark {
    background-color: v-bind(variantColor);
  }

  .default-input:checked ~ .container > .checkmark i {
    color: v-bind(variantTextColor);
    display: block;
  }

  .disabled {
    background-color: var(--disabled-color);
    border-color: var(--disabled-color);
  }
}

.label-container {
  height: max-content;
  font-size: 14px;
  color: var(--active-text-color)
}

</style>