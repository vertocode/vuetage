<template>
  <div class="base-select-field">
    <BaseTextField
        :bind="{
          class: 'base-select',
          autocomplete: 'off'
        }"
        readonly
        v-model="textField"
        :label="label"
        @click="showOptions = !showOptions"
    >
      <template #rightIcon>
        <span class="right-icon" @click="showOptions = !showOptions">
          <i class="fa fa-caret-down"></i>
        </span>
      </template>
    </BaseTextField>
    <BaseMenu :show="showOptions">
      <div v-for="(option, index) in options" :key="index">
        <BaseGroup v-if="option?.group" :title="option?.group">
          <BaseItem :active="selectedOptions.includes(item)" v-for="(item, index) in option.items" :key="index" @click="selectOption(item)">
            {{ item.text }}
          </BaseItem>
        </BaseGroup>
        <BaseItem v-else :active="selectedOptions.includes(option)" @click="selectOption(option as NormalOption)">{{ option.text }}</BaseItem>
      </div>
    </BaseMenu>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { BaseTextField, BaseItem, BaseMenu, BaseGroup } from '@/components'

import { NormalOption, GroupOption, Props } from '@/typing/BaseSelect'

// <!-- TODO: Make all props from text field to BaseSelect too -->
const props = withDefaults(defineProps<Props>(), {
  selectedOptions: () => [],
  multiple: false
})

/* States */
const selectedOptions = ref<NormalOption[]>(props.selectedOptions)
const textField = ref<string>('')
const showOptions = ref<boolean>(false)

/* Methods */
const openOptions = (): void => {
  showOptions.value = true
}

const selectOption = (option: NormalOption): void => {
  if (props.multiple) {
    // If the option is already selected, when the user clicks on it, it will be removed.
    if (selectedOptions.value.some(selectedOption => selectedOption === option)) {
      const index = selectedOptions.value.indexOf(option)
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