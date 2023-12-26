<template>
  <div class="base-select-field">
    <BaseTextField
        :bind="{
          class: 'base-select'
        }"
        :model-value="textField"
        readonly
        :label="label"
        @click="showOptions = !showOptions"
    >
      <template #rightIcon>
        <span class="right-icon">
          <i class="fa fa-caret-down"></i>
        </span>
      </template>
    </BaseTextField>
    <div class="base-select-field-options" v-if="showOptions">
      <div
          class="base-select-field-options-option"
          v-for="option in options"
      >
       {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseTextField } from '@/components'

import { Option, Props } from '@/typing/BaseSelect'

defineProps<Props>()

/* States */
const textField = ref('')
const showOptions = ref(false)

/* Methods */
const openOptions = () => {
  showOptions.value = true
}
</script>

<style lang="scss">
.base-select-field {
  .base-select {
    min-width: 70px;
    cursor: pointer;
  }

  &-options {

  }
}
</style>