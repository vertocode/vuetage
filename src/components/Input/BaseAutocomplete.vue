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
        <div
            v-if="filteredOptions.length"
            v-for="(option, index) in filteredOptions"
            :key="index"
            @mousedown="handleSlotMouseDown"
        >
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
                  <span v-html="renderFilteredText({
                     text: item.text,
                     autoFilter,
                     textField
                  })"
                  ></span>
              </BaseItem>
            </slot>
          </BaseGroup>
          <slot name="item" v-else v-bind="{ option, index }">
            <BaseItem
              :custom-style="itemStyle"
              @click="selectOption(option)"
            >
              <span v-html="renderFilteredText({
                 text: option.text,
                 autoFilter,
                 textField
              })"
              ></span>
            </BaseItem>
          </slot>
        </div>
        <slot v-else name="no-options">
          <div class="no-options">
            <p>Nothing found! Consider clearing the filter to see all options.</p>
            <div class="button-field">
              <BaseButton size="5em" @click="textField = ''" variant="outline-primary">Clear</BaseButton>
            </div>
          </div>
        </slot>
      </BaseMenu>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { BaseTextField, BaseMenu, BaseGroup, BaseItem, BaseButton } from '@/components'
import { renderFilteredText } from '@/utils/text'
import type { Props, Emits } from '@/typing/BaseAutocomplete'
import type { NormalOption, GroupOption } from '@/typing/Option'

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
  autoFilter: true,
  caseSensitiveFilter: true
})

/* States */
const textField = ref<string>(props.modelValue || '')
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

const filteredOptions = computed((): NormalOption[] | GroupOption[] => {
  if (!props.autoFilter) return props.options

  const filterOption = (option: NormalOption): boolean => {
    if (props.caseSensitiveFilter) {
      return option.text.toLowerCase().includes(textField.value.toLowerCase())
    }

    return option.text.includes(textField.value)
  }

  return props.options.filter((option: NormalOption | GroupOption) => {
    if (option?.group) {
      return option.items.filter((item: NormalOption) => {
        return filterOption(item)
      })
    }

    return filterOption(option)
  })
})

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

  .no-options {
    margin-top: 10px;
    text-align: center;

    p {
      font-weight: bold;
      color: #555;
      margin-bottom: 5px;
    }

    .button-field {
      width: max-content;
      margin: 1em auto;
    }
  }
}
</style>