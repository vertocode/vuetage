<template>
  <div class="base-checkbox">
    <input
        class="default-input"
        type="checkbox"
        width="48px"
        :value="key"
        :checked="checked"
        @change="handleChange"
    />
    <slot name="checkmark">
      <span class="checkmark"></span>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { Props } from '@/typing/BaseCheckbox'
import { computed, ref } from 'vue'
import { useColor } from "@/composables/useColor"


const props = defineProps<Props>()

const { variantColorHover, variantColor, variantTextColor } = useColor({ variant: props.color || 'primary' })

const emits = defineEmits(['key', 'checked'])
const checked = ref<boolean>(props.defaultChecked || false)

const handleChange = (e: Event) => {
  const { value, checked } = e.target as HTMLInputElement
  if (props.key) {
    emits('key', value)
  }

  emits('checked', checked)
}


</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-checkbox {
  position: relative;
  height: 25px;
  width: 25px;

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
  }

  .checkmark {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: var(--base-color);
    border: 1px solid v-bind(variantColorHover);
    border-radius: 4px;

    &:after {
      content: '';
      position: absolute;
      display: none;
    }
  }

  &:hover .default-input ~ .checkmark {
    background-color: v-bind(variantColorHover);
  }

  .default-input:checked ~ .checkmark {
    background-color: v-bind(variantColor);
  }

  .default-input:checked ~ .checkmark:after {
    display: block;
  }

  /* Styles for check icon */
  .checkmark:after {
    left: 8px;
    top: 3px;
    width: 6px;
    height: 12px;
    border: solid v-bind(variantTextColor);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
}

</style>