<template>
  <div class="base-autocomplete-field">
    <BaseTextField
      :bind="{
        class: 'base-autocomplete',
        autocomplete: 'off',
        ref: 'textFieldRef'
      }"
      v-model="textField"
      v-bind="baseTextFieldProps"
      @enter="handleEnter"
      @up="handleUp"
      @down="handleDown"
      @focus="handleFocus"
      @focusout="handleFocusOut"
      @click="handleMenu"
    />
    <slot name="menu">
      <BaseMenu
          :variant="props.variant"
          :show="showMenu"
          :custom-style="menuStyle"
          @mousedown="handleMenuMouseDown"
          @mouseleave="handleMenuMouseLeave"
      >
        <div
            v-for="(option, index) in filteredOptions"
            :key="index"
            @mousedown="handleSlotMouseDown"
        >
          <BaseGroup
            :custom-style="groupStyle"
            v-if="option?.group && option?.items.length > 0"
            :title="option?.group"
          >
            <slot name="item" v-bind="{ option, index, selectOption, isActive: getIsActive(option) }">
              <BaseItem
                v-for="(item, index) in option.items"
                :key="index"
                :custom-style="itemStyle"
                :active="getIsActive(item)"
                @click="selectOption(item)"
              >
                  <span v-html="renderFilteredText({
                     text: item.text,
                     autoFilter,
                     textField: textField.text
                  })"
                  ></span>
              </BaseItem>
            </slot>
          </BaseGroup>
          <slot name="item" v-else-if="!option?.group" v-bind="{ option, index, selectOption, isActive: getIsActive(option) }">
            <BaseItem
              :custom-style="itemStyle"
              :active="getIsActive(option)"
              @click="selectOption(option)"
            >
              <span v-html="renderFilteredText({
                 text: option.text,
                 autoFilter,
                 textField: textField.text
              })"
              ></span>
            </BaseItem>
          </slot>
        </div>
        <slot v-if="!filteredOptions?.length && textField" name="no-options">
          <div class="no-options">
            <p>Nothing found! Consider clearing the filter to see all options.</p>
            <div class="button-field">
              <BaseButton size="5em" @click="textField = ''" variant="outline-primary">Clear</BaseButton>
            </div>
          </div>
        </slot>
        <slot name="menu-loading" v-if="props.menuLoading">
          <div class="menu-loading">
            <p class="loading-text">{{ menuLoadingText }}</p>
            <div class="spinner-container">
              <Spinner size="small"/>
            </div>
          </div>
        </slot>
      </BaseMenu>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { BaseButton, BaseGroup, BaseItem, BaseMenu, BaseTextField } from '@/components'
import { renderFilteredText } from '@/utils/text'
import type { Emits, Props } from '@/typing/BaseAutocomplete'
import type { GroupOption, NormalOption } from '@/typing/Option'
import Spinner from '@/components/Spinner/Spinner.vue'

const props = withDefaults(defineProps<Props>(), {
	multiple: false,
	autoFilter: true,
	caseSensitiveFilter: true,
	menuLoading: false,
	menuLoadingText: 'Loading more items'
})

/* States */
const initialState = { text: '', value: '' }
const textFieldRef = ref(null)
const textModel = ref<NormalOption>(props.modelValue || initialState)
const textField = ref<string>(textModel.value.text || '')
const valueField = ref<string>(textModel.value.value || '')
const isFocused = ref<boolean>(false)
const mouseOnMenu = ref(false)

const handleMenuMouseDown = () => {
  mouseOnMenu.value = true
}

const handleMenuMouseLeave = () => {
  mouseOnMenu.value = false
}

// This is the active option when the user is pressing the key down, up, or tab to choose an option
const activeOption = ref<NormalOption>({ text: '', value: '' })

/* Computed properties */
const showMenu = computed(() => {
  return isFocused.value
})

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

const filteredOptions = computed<(NormalOption | GroupOption)[]>(() => {
	if (!props.autoFilter) return props.options

	const filterOption = (option: NormalOption): boolean => {
		if (props.caseSensitiveFilter) {
			return option.text.toLowerCase().includes(textField.value.toLowerCase())
		}

		return option.text.includes(textField.value)
	}

	return props.options.map((option: NormalOption | GroupOption) => {
		if ((option as GroupOption)?.group) {
			const items: NormalOption[] = (option as GroupOption).items.filter((item: NormalOption) => {
				return filterOption(item)
			})

			return { group: (option as GroupOption).group, items }
		}

		return filterOption(option as NormalOption) ? option : null
	}).filter((option) => option !== null) as NormalOption[] | GroupOption[]
})

/* Methods */
const handleMenu = (): void => {
	if (props.disabled) return
}

const getIsActive = (option: NormalOption): boolean => {
	return activeOption.value.text === option.text
}

const handleEnter = () => {
  if (activeOption.value) {
    selectOption(activeOption.value)
    isFocused.value = false
  }
}

const selectOption = (option: NormalOption): void => {
	if (props.disabled) return
	const clonedOption = Object.assign({}, option)
	textModel.value = clonedOption
  activeOption.value = clonedOption
  valueField.value = clonedOption.value
  textField.value = clonedOption.text
  isFocused.value = false
}

const handleSlotMouseDown = (): void => {
}

const handleFocus = () => {
	isFocused.value = true
}

const handleFocusOut = (e) => {
  if (mouseOnMenu.value && showMenu.value) {
    e.target.focus()
  } else {
    isFocused.value = false
  }
}

const handleUp = () => {
	if (activeOption.value) {
		const { group, items } = filteredOptions.value.find((option: GroupOption | NormalOption) => {
			if ((option as GroupOption)?.group) {
				return (option as GroupOption).items.some((item: NormalOption) => item?.text === activeOption.value.text)
			}

			return (option as NormalOption)?.text === activeOption.value.text
		}) as GroupOption || {}

		const currentOptionIndex = group
			? items.findIndex((item: NormalOption) => item?.text === activeOption.value.text)
			: (filteredOptions.value as NormalOption[]).findIndex((option: NormalOption) => option?.text === activeOption.value.text)

		const option = group
			? (() => {
				const options = (filteredOptions.value as GroupOption[])
				const mayNextOption = options.find((option: GroupOption) => option.group === group)?.items[currentOptionIndex - 1]

				if (mayNextOption) {
					return mayNextOption
				}

				const groupIndex = options.findIndex((option) => option.group === group)
				return options[groupIndex - 1]?.items[options[groupIndex - 1].items.length - 1]
			})()
			: filteredOptions.value[currentOptionIndex - 1]

		if (group) {
			const { text } = option as NormalOption || {}
			if (!text) return
			activeOption.value = option as NormalOption
		} else {
			const { text } = option as NormalOption || {}
			if (!text) return
			activeOption.value = option as NormalOption
		}
	} else {
		const option = filteredOptions.value[filteredOptions.value.length - 1]
		if ((option as GroupOption)?.group) {
			const groupOption = option as GroupOption
			const { text } = groupOption.items[groupOption.items.length - 1] || {}
			if (!text) return
			activeOption.value = groupOption.items[groupOption.items.length - 1]
		} else {
			const { text } = option as NormalOption || {}
			if (!text) return
			activeOption.value = option as NormalOption || {}
		}
	}
}

const handleDown = () => {
	if (activeOption.value.text) {
		const { group, items } = filteredOptions.value.find((option) => {
			const groupOption = option as GroupOption
			const normalOption = option as NormalOption
			if (groupOption?.group) {
				return groupOption.items.some((item) => item?.text === activeOption.value.text)
			}

			return normalOption?.text === activeOption.value.text
		}) as GroupOption || {}

		const currentOptionIndex = group
			? items.findIndex((item) => item?.text === activeOption.value.text)
			: filteredOptions.value.findIndex((option) => (option as NormalOption)?.text === activeOption.value.text)

		const option = group
			? (() => {
				const groupOptions = filteredOptions.value as GroupOption[]
				const mayNextOption = groupOptions.find((option) => option.group === group)?.items[currentOptionIndex + 1]

				if (mayNextOption) {
					return mayNextOption
				}

				const groupIndex = groupOptions.findIndex((option) => option.group === group)
				return groupOptions[groupIndex + 1]?.items[0]
			})()
			: filteredOptions.value[currentOptionIndex + 1]


		if (group) {
			const { text } = option as NormalOption || {}
			if (!text) return
			activeOption.value = option as NormalOption
		} else {
			const { text } = option as NormalOption || {}
			if (!text) return
			activeOption.value = option as NormalOption
		}
	} else {
		const option = filteredOptions.value.filter((option: GroupOption | NormalOption) => {
			return (option as GroupOption)?.group ? (option as GroupOption).items.length > 0 : option
		})[0]
		const groupOption = option as GroupOption
		const normalOption = option as NormalOption
		if (groupOption.group) {
			activeOption.value = groupOption.items[0]
		} else {
			activeOption.value = normalOption
		}
	}
}

/* Emits */
const emits = defineEmits<Emits>()

/* Watchers */
watch(
	() => textField.value,
	() => {
    if (!valueField.value) isFocused.value = true
    if (textModel.value.text && textField.value !== textModel.value.text) {
      valueField.value = ''
    }

		emits('input', textField.value)

    const values = props.options.flatMap((option: NormalOption | GroupOption) => {
      if ((option as GroupOption)?.group) {
        return (option as GroupOption).items.map((item: NormalOption) => item.value)
      }
      return (option as NormalOption)?.value
    })
		if (values.includes(valueField.value)) {
			emits('update:modelValue', textModel.value)
			emits('selectOption', textModel.value)
		} else {
      textModel.value = initialState
			emits('update:modelValue', initialState)
      emits('selectOption', initialState)
		}
	}
)

watch(
	() => activeOption.value,
	() => {
		if (activeOption.value.text) {
			document.querySelector('.base-item.active')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
		}
	}
)

watch(
	() => showMenu.value,
	() => {
		if (!showMenu.value) {
			activeOption.value = { text: '', value: '' }
		}
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

  .menu-loading {
    background-color: #F6F6F6;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;
    padding: 0 1em;

    .loading-text {
      font-size: .8em;
      font-weight: bold;
      color: #555;
    }

    .spinner-container {
      display: flex;
      align-items: center;
    }
  }
}
</style>