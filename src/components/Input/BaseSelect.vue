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
      <BaseItem @click="selectOption(option)" v-for="(option, index) in options" :key="index">{{ option.text }}</BaseItem>
    </BaseMenu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseTextField, BaseItem, BaseMenu } from '@/components'

import { Option, Props } from '@/typing/BaseSelect'

// <!-- TODO: Make all props from text field to BaseSelect too -->
defineProps<Props>()

/* States */
const textField = ref('')
const showOptions = ref(false)

/* Methods */
const openOptions = () => {
  showOptions.value = true
}

const selectOption = (option: Option) => {
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