<template>
  <div class="base-autocomplete-field">
    <BaseTextField
      :bind="{
        class: 'base-autocomplete',
        autocomplete: 'off'
      }"
      v-model="textField"
      v-bind="baseTextFieldProps"
      @focusout="handleFocusOut"
      @click="handleMenu"
    >

    </BaseTextField>
    <slot name="menu">
      <BaseMenu :show="showMenu" :custom-style="menuStyle">
        <div v-for="(option, index) in options" :key="index" @mousedown="handleSlotMouseDown">
          <BaseGroup
            :custom-style="groupStyle"
            v-if="option?.group"
            :title="option?.group"
          >
            <slot name="item" v-bind="{ option, index }">
              <BaseItem
                :custom-style="itemStyle"
                v-for="(item, index) in option.items"
                :key="index"
                @click="selectOption(item)"
              >
                {{ item.text }}
              </BaseItem>
            </slot>
          </BaseGroup>
          <slot name="item" v-else v-bind="{ option, index }">
            <BaseItem
              :custom-style="itemStyle"
              @click="selectOption(option)"
            >
              {{ option.text }}
            </BaseItem>
          </slot>
        </div>
      </BaseMenu>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { BaseTextField, BaseMenu, BaseGroup, BaseItem } from '@/components'
import type { Props, Emits } from '@/typing/BaseAutocomplete'
import type { NormalOption } from '@/typing/Option'

const props = withDefaults(defineProps<Props>(), {
  multiple: false
})

/* States */
const textField = ref<string>('')
const showMenu = ref<boolean>(false)

// When we click on any option, it will be true. If it's true, the menu will not be closed until it is false,
// This logic is useful to select the option before close the menu, and at the same time close the menu when the "focusout" event be triggered
const clickedOption = ref<boolean>(false)

/* Computed properties */
const baseTextFieldProps = computed(() => ({
  label: props.label,
  variant: props.variant,
  useBorderLoading: props.useBorderLoading,
  loadingColor: props.loadingColor,
  loadingSize: props.loadingSize,
  loading: props.loading,
  disabled: props.disabled,
  width: props.width,
  height: props.height,
  style: props.inputFieldStyle,
  customStyle: props.inputStyle,
  customStyleLabel: props.labelStyle,
  customClass: props.customClass,
  rightIcon: props.rightIcon,
  leftIcon: props.leftIcon,
}))

/* Methods */
const handleMenu = (): void => {
  if (props.disabled) return

  showMenu.value = true
}

const selectOption = (option: NormalOption): void => {
  if (props.disabled) return
  textField.value = option.text

  showMenu.value = false
}

const handleSlotMouseDown = (): void => {
  clickedOption.value = true
}

const handleFocusOut = (): void => {
  if (clickedOption.value) {
    clickedOption.value = false
    return
  }

  const option: NormalOption = props.options.find((option) => option.text === textField.value)
  if (option) {
    selectOption(option)
  } else {
    textField.value = ''
  }

  showMenu.value = false
}

/* Emits */
const emits = defineEmits<Emits>()

/* Watchers */
watch(
  () => textField,
  () => {
    emits('update:modelValue', textField.value)
  }
)
</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-autocomplete-field {
  position: relative;
}

</style>