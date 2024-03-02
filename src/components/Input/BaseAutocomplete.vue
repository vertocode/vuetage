<template>
  <div class="base-autocomplete-field">
    <BaseTextField
      :bind="{
        class: 'base-autocomplete',
        autocomplete: 'off'
      }"
      v-model="textField"
      v-bind="baseTextFieldProps"
      @enter="handleEnter"
      @up="handleUp"
      @down="handleDown"
      @focus="handleFocus"
      @focusout="handleFocusOut"
      @click="handleMenu"
    >

    </BaseTextField>
    <slot name="menu">
      <BaseMenu :show="showMenu" :custom-style="menuStyle">
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
            <slot name="item" v-bind="{ option, index }">
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
                     textField
                  })"
                  ></span>
              </BaseItem>
            </slot>
          </BaseGroup>
          <slot name="item" v-else-if="!option?.group" v-bind="{ option, index }">
            <BaseItem
              :custom-style="itemStyle"
              :active="getIsActive(option)"
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
        <slot v-if="!filteredOptions.length && textField" name="no-options">
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
import {computed, ref, watch} from 'vue'
import {BaseButton, BaseGroup, BaseItem, BaseMenu, BaseTextField} from '@/components'
import {renderFilteredText} from '@/utils/text'
import type {Emits, Props} from '@/typing/BaseAutocomplete'
import type {GroupOption, NormalOption} from '@/typing/Option'
import Spinner from "@/components/Spinner/Spinner.vue";

const props = withDefaults(defineProps<Props>(), {
	multiple: false,
	autoFilter: true,
	caseSensitiveFilter: true,
  menuLoading: false,
  menuLoadingText: 'Loading more items'
})

/* States */
const textField = ref<string>(props.modelValue || '')
const showMenu = ref<boolean>(false)
const isFocused = ref<boolean>(false)

// This is the active option when the user is pressing the key down, up, or tab to choose an option
const activeOption = ref<string>('')

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

  return props.options.map((option: NormalOption | GroupOption) => {
		if ((option as GroupOption)?.group) {
			const items: NormalOption[] =  (option as GroupOption).items.filter((item: NormalOption) => {
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

	showMenu.value = true
}

const getIsActive = (option: NormalOption): boolean => {
	return activeOption.value === option.text
}

const selectOption = (option: NormalOption): void => {
	if (props.disabled) return
	textField.value = option.text
	clickedOption.value = true
	showMenu.value = false
}

const maySelectOption = (): void => {
	const option: NormalOption = props.options.find((option) => option.text === textField.value)
	if (option) {
		selectOption(option)
	} else {
		textField.value = ''
	}
}

const handleSlotMouseDown = (): void => {
	clickedOption.value = true
}

const handleFocus = () => {
	isFocused.value = true
}

const handleFocusOut = (): void => {
	isFocused.value = false
	if (clickedOption.value) {
		clickedOption.value = false
		return
	}

	maySelectOption()

	showMenu.value = false
}

const handleEnter = () => {
	if (activeOption.value) {
		textField.value = activeOption.value
	}
	maySelectOption()
}

const handleUp = () => {
	if (activeOption.value) {
		const currentActiveOptionIndex = filteredOptions.value.findIndex((option) => option.text === activeOption.value)
		const option = filteredOptions.value[currentActiveOptionIndex - 1]

		if (option?.group) {
			const { text } = option.items[option.items.length - 1] || {}
			if (!text) return
			activeOption.value = text
		} else {
			const { text } = option || {}
			if (!text) return
			activeOption.value = text
		}
	} else {
		const option = filteredOptions.value[filteredOptions.value.length - 1]
		if (option?.group) {
			const { text } = option.items[option.items.length - 1] || {}
			if (!text) return
			activeOption.value = text
		} else {
			const { text } = option || {}
			if (!text) return
			activeOption.value = text
		}
	}
}

const handleDown = () => {
	if (activeOption.value) {
      const { group, items } = filteredOptions.value.find((option) => {
        if (option?.group) {
          return option.items.some((item) => item?.text === activeOption.value)
        }

        return option?.text === activeOption.value
      }) || {}

    if (!group && !items) {
      activeOption.value = ''
    }

    const currentOptionIndex = group
        ? items.findIndex((item) => item?.text === activeOption.value)
        : filteredOptions.value.findIndex((option) => option?.text === activeOption.value)

		const option = group
        ? (() => {
          const mayNextOption = filteredOptions.value.find((option) => option.group === group)?.items[currentOptionIndex + 1]

          if (mayNextOption) {
           return mayNextOption
          }

          const groupIndex = filteredOptions.value.findIndex((option) => option.group === group)
          return filteredOptions.value[groupIndex + 1]?.items[0]
        })()
        : filteredOptions.value[currentOptionIndex + 1]


		if (group) {
			const { text } = option || {}
			if (!text) return
			activeOption.value = text
		} else {
			const { text } = option || {}
			if (!text) return
			activeOption.value = text
		}
	} else {
		const option = filteredOptions.value.filter(option => option?.group ? option.items.length > 0 : option)[0]
		if (option?.group) {
			activeOption.value = option.items[0]?.text
		} else {
			activeOption.value = option.text
		}
	}
}

/* Emits */
const emits = defineEmits<Emits>()

/* Watchers */
watch(
	() => textField.value,
	() => {
		emits('update:modelValue', textField.value)

		// If there is a search not already selected, the menu will be opened
		if (textField.value) {
			showMenu.value = !clickedOption.value
			clickedOption.value = false
		} else {
			showMenu.value = false
		}
	}
)

watch(
	() => showMenu.value,
	() => {
		if (!showMenu.value) {
			activeOption.value = ''
		}
	}
)

watch(
	() => isFocused.value,
	() => {
		if (isFocused.value) {
			showMenu.value = true
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