<template>
  <div v-if="show" class="base-menu" :style="customStyle">
    <div class="menu-content">
      <div class="header">
        <span class="title" v-if="title">{{ title }}</span>
        <button v-if="!hideCloseButton" class="close-button" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StyleValue } from 'vue'
import { defineProps, withDefaults } from 'vue'

interface Props {
  show: boolean
  title?: string
  backgroundColor?: string
  top?: string | number
  left?: string | number
  bottom?: string | number
  right?: string | number
  borderColor?: string
  zIndex?: string | number
  maxHeight?: string
  boxShadow?: string
  hideCloseButton?: boolean
  customStyle?: StyleValue | undefined
}

withDefaults(defineProps<Props>(), {
	show: false,
	backgroundColor: '#ffffff',
	top: '1.9em',
	left: '0',
	right: '0',
	maxHeight: '200px',
	borderColor: '#eaeaea',
	zIndex: 100,
	boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
	hideCloseButton: true
})
</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-menu {
  position: absolute;
  top: v-bind(top);
  left: v-bind(left);
  bottom: v-bind(bottom);
  right: v-bind(right);
  z-index: v-bind(zIndex);
  box-shadow: v-bind(boxShadow);
  border: 1px solid v-bind(borderColor);
  background-color: v-bind(backgroundColor);
  max-height: v-bind(maxHeight);
  overflow: hidden;
  transition: all 0.3s ease;
  overflow-y: auto;

  .menu-content {
    padding: 0 2px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .close-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5em;
        color: #555;
        transition: color 0.3s ease;

        &:hover {
          color: $base-color;
        }
      }
    }
  }
}
</style>
