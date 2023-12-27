<template>
  <div class="base-select-field">
    <BaseTextField
        :bind="{
          class: 'base-select'
        }"
        :model-value="textField"
        readonly
        :label="label"
        variant="underlined"
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
          <BaseItem v-for="(item, index) in option.items" :key="index" @click="selectOption(item)">
            {{ item.text }}
          </BaseItem>
        </BaseGroup>
        <BaseItem v-else @click="selectOption(option)">{{ option.text }}</BaseItem>
      </div>
    </BaseMenu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseTextField, BaseItem, BaseMenu, BaseGroup } from '@/components'

import { Option, Props } from '@/typing/BaseSelect'

// <!-- TODO: Make all props from text field to BaseSelect too -->
defineProps<Props>()

/* States */
const selectedOptions = ref<Option[]>([])
const textField = ref<string>('')
const showOptions = ref<boolean>(false)

/* Methods */
const openOptions = (): void => {
  showOptions.value = true
}

const selectOption = (option: Option): void => {
  selectedOptions.value.push(option)
  console.log(option)
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