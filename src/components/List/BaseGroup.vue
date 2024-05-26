<template>
  <div class="base-group">
    <div
        :class="customClass"
        class="header"
        :style="[
          customStyle as StyleValue,
          isHovered
            ? customStyle?.hover
            : {}
        ]"
        @mouseenter="isHovered = true"
        @mouseout="isHovered = false"
        @click="showOptions = !showOptions"
    >
      <slot name="header">
        <div class="header-container">
          <div class="title-container">
            <slot name="title">
              <i v-if="leftIcon" :class="leftIcon"></i>
              <div class="title">{{ title }}</div>
              <i v-if="rightIcon" :class="rightIcon"></i>
            </slot>
          </div>
          <div class="dropdown-icon-container" v-if="showDropdown || true">
            <slot name="dropdownIcon">
              <i
                  class="fa fa-caret-down"
                  v-if="showOptions"
              ></i>
              <i
                  class="fa fa-caret-up"
                  v-else
              ></i>
            </slot>
          </div>
        </div>
      </slot>
    </div>
    <div class="items" v-if="showOptions">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, StyleValue } from 'vue'
import type { Props } from '@/typing/BaseGroup'

const props = defineProps<Props>()

const isHovered = ref<boolean>(false)
const showOptions = ref<boolean>(props?.defaultOpen || true)
</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-group {
  .header {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 10px;
    border-bottom: 1px solid var(--base-color);
    cursor: pointer;

    &-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1em;

      .title-container {
        display: flex;
        align-items: center;
        gap: 0.5em;

        .title {
          font-size: 1.1em;
          font-weight: 600;
        }
      }
    }

    .items {
      padding-left: 3em;
    }

    &:hover {
      background-color: var(--base-color);
    }
  }
}
</style>