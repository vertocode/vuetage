<template>
  <div class="base-checkbox">
    <input
        class="default-input"
        type="checkbox"
        width="48px"
        :disabled="disabled"
        :value="key"
        :checked="checked"
        @change="handleChange"
    />
    <slot name="checkmark">
      <div class="checkmark" :class="disabled && 'disabled'">
         <span class="icon-container">
            <i
              class="fa fa-check"
              :class="checkmarkSize"
            />
        </span>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { Props } from '@/typing/BaseCheckbox'
import { computed, ref } from 'vue'
import { useColor } from "@/composables/useColor"

const props = defineProps<Props>()

const { variantColorHover, variantColor, variantTextColor } = useColor({
  variant: props.color || 'primary',
  disabled: props.disabled
})

const emits = defineEmits(['key', 'checked'])
const checked = ref<boolean>(props.defaultChecked || false)

const handleChange = (e: Event) => {
  const { value, checked } = e.target as HTMLInputElement
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

  .checkmark {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
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

  &:hover .default-input ~ .checkmark {
    background-color: v-bind(variantColorHover);
  }

  .default-input:checked ~ .checkmark {
    background-color: v-bind(variantColor);
  }

  .default-input:checked ~ .checkmark i {
    color: v-bind(variantTextColor);
    display: block;
  }

  .disabled {
    background-color: var(--disabled-color);
    border-color: var(--disabled-color);
  }
}

</style>