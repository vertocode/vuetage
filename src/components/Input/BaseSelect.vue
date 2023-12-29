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
        @click="showOptions = !showOptions"
    >
      <template #rightIcon>
        <slot name="rightIcon" v-bind="{ show: showOptions }">
          <span class="right-icon" @click="showOptions = !showOptions">
            <i :class="rightIcon" v-if="rightIcon"></i>
            <i class="fa fa-caret-down" style="transform: rotate(180deg)" v-else-if="showOptions"></i>
            <i class="fa fa-caret-down" v-else></i>
          </span>
        </slot>
      </template>
    </BaseTextField>
    <BaseMenu :show="showOptions">
      <div v-for="(option, index) in options" :key="index">
        <BaseGroup v-if="option?.group" :title="option?.group">
          <BaseItem
              :active="getIsActive(item)"
              v-for="(item, index) in option.items"
              :key="index"
              @click="selectOption(item)"
          >
            {{ item.text }}
          </BaseItem>
        </BaseGroup>
        <BaseItem
            v-else
            :active="getIsActive(option as NormalOption)"
            @click="selectOption(option as NormalOption)"
        >
          {{ option.text }}
        </BaseItem>
      </div>
    </BaseMenu>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { BaseTextField, BaseItem, BaseMenu, BaseGroup } from '@/components'

import { NormalOption, Props } from '@/typing/BaseSelect'

const props = withDefaults(defineProps<Props>(), {
	selectedOptions: () => [],
	multiple: false
})

/* States */
const selectedOptions = ref<NormalOption[]>(props.selectedOptions)
const textField = ref<string>(props.selectedOptions.map((option) => option.text).join(', ') || '')
const showOptions = ref<boolean>(false)

/* Computed properties */
const baseTextFieldProps = computed(() => ({
  label: props.label,
  variant: props.variant,
  useBorderLoading: props.useBorderLoading,
  loadingColor: props.loadingColor,
  loadingSize: props.loadingSize,
  disabled: props.disabled,
  width: props.width,
  height: props.height,
  style: props.inputFieldStyle,
  customStyle: props.inputStyle,
  customStyleLabel: props.customStyleLabel,
  rightIcon: props.rightIcon,
  leftIcon: props.leftIcon
}))

/* Methods */
const getIsActive = (option: NormalOption): boolean => {
	return selectedOptions.value.map(({ value }) => value).includes(option.value)
}

const selectOption = (option: NormalOption): void => {
	if (props.multiple) {
		if (getIsActive(option)) {
			const index = selectedOptions.value.map(({ value }) => value).indexOf(option.value)
			selectedOptions.value.splice(index, 1)
		} else {
			selectedOptions.value.push(option)
		}
	} else {
		selectedOptions.value = [option]
	}
	textField.value = selectedOptions.value.map((option) => option.text).join(', ')
}
</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-select-field {
  position: relative;
  :deep(.base-select) {
    min-width: 70px;
    cursor: pointer;
  }

  :deep(.right-icon) {
    cursor: pointer;
  }
}
</style>