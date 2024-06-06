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
  console.log('sendo executado')
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


  &:hover .default-input ~ .container > .checkmark {
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

</style>