<template>
  <div class="base-select-field">
    <BaseTextField
        :bind="{
          class: 'base-select',
          autocomplete: 'off'
        }"
        readonly
        v-model="textField"
        v-bind="baseTextFieldProps"
        @click="handleMenu"
    >
      <template #rightIcon>
        <slot name="rightIcon" v-bind="{ show: showOptions, disabled }">
          <span v-if="!(loading && !useBorderLoading)" class="right-icon" @click="handleMenu">
            <i v-if="rightIcon" :class="rightIcon" />
            <i
                class="fa fa-caret-up"
                :style="{
                  color: variant === 'dark' ? 'white' : 'black',
                  opacity: disabled ? 0.5 : 1
                }"
                v-else-if="showOptions"
            />
            <i
                class="fa fa-caret-down"
                :style="{
                  color: variant === 'dark' ? 'white' : 'black',
                  opacity: disabled ? 0.5 : 1
                }"
                v-else
            />
          </span>
        </slot>
      </template>
    </BaseTextField>
    <slot name="menu" v-bind="{ show: showOptions, options }">
      <BaseMenu :show="showOptions" :custom-style="menuStyle" :variant="variant">
        <div v-for="(option, index) in options" :key="index">
          <BaseGroup
              show-dropdown
              :custom-style="groupStyle"
              v-if="option?.group"
              :title="option?.group"
          >
            <slot name="item" v-bind="{ option, index }">
              <BaseItem
                  :custom-style="itemStyle"
                  :active="getIsActive(item)"
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
                :active="getIsActive(option as NormalOption)"
                @click="selectOption(option as NormalOption)"
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
import { ref, computed, watch, onMounted } from 'vue'
import { BaseTextField, BaseItem, BaseMenu, BaseGroup } from '@/components'

import type { NormalOption } from '@/typing/Option'
import type { Props } from '@/typing/BaseSelect'

const props = withDefaults(defineProps<Props>(), {
	multiple: false,
	closeOnSelect: null
})

/* States */
const selectedOptions = ref<NormalOption[]>([])
const showOptions = ref<boolean>(false)
const textField = computed(() => {
	return selectedOptions.value.map((option) => option.text).join(', ')
})

/* Emits */
const emits = defineEmits(['update:modelValue'])

/* Watchers */
watch(
	() => selectedOptions.value,
	() => {
		const emitValue = props.multiple ? selectedOptions.value : selectedOptions.value.at(0)
		emits('update:modelValue', emitValue)
	}
)

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
	leftIcon: props.leftIcon
}))

const cursorStyle = computed(() => {
	if (props.disabled) {
		return 'not-allowed'
	}

	return 'pointer'
})

const iconTopStyle = computed(() => {
	if (props.variant === 'underlined') {
		return '10%'
	}

	return '50%'
})

/* Methods */
const getIsActive = (option: NormalOption): boolean => {
	return selectedOptions.value.map(({ value }) => value).includes(option.value)
}

const handleMenu = (): void => {
	if (props.disabled) return

	showOptions.value = !showOptions.value
}

const selectOption = (option: NormalOption): void => {
	if (props.multiple) {
		if (getIsActive(option)) {
			const index = selectedOptions.value.map(({ value }) => value).indexOf(option.value)
			selectedOptions.value.splice(index, 1)
		} else {
			selectedOptions.value.push(option)
		}
		if (props.closeOnSelect) {
			showOptions.value = false
		}
	} else {
		selectedOptions.value = [option]
		if (props.closeOnSelect || props.closeOnSelect === null) {
			showOptions.value = false
		}
	}
}

/* Lifecycle hooks */
onMounted(() => {
	if (props.modelValue) {
		if (props.multiple) {
			selectedOptions.value = props.modelValue
		} else {
			selectedOptions.value = [props.modelValue]
		}
	}
})
</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-select-field {
  position: relative;
  :deep(.base-select) {
    min-width: 70px;
    cursor: v-bind(cursorStyle);
  }

  .right-icon {
    position: absolute;
    transform: translate(0, -50%);
    top: v-bind(iconTopStyle);
    right: 0;
    cursor: v-bind(cursorStyle);
  }
}
</style>