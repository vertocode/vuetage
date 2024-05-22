<template>
  <div @click="$emit('click')" v-if="show" class="base-menu" :class="[customClass, `base-menu__${variant}`]" :style="customStyle as StyleValue">
    <div class="menu-content">
      <div class="header">
        <span class="title" v-if="title">
          <slot name="title">
            <i v-if="leftIcon" :class="leftIcon"></i>
            {{ title }}
            <i v-if="rightIcon" :class="rightIcon"></i>
          </slot>
        </span>
        <slot name="close-button">
          <button v-if="showCloseButton" class="close-button" @click="$emit('close')">
            <i :class="closeIcon"></i>
          </button>
        </slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, StyleValue } from 'vue'
import { Props } from '@/typing/BaseMenu'

withDefaults(defineProps<Props>(), {
	show: false,
	backgroundColor: '#ffffff',
	top: '32px',
	left: '0',
	right: '0',
	maxHeight: '200px',
	borderColor: '#eaeaea',
	zIndex: 100,
	boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
	showCloseButton: false,
	closeIcon: 'fas fa-times',
	variant: 'default'
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

  &__outlined {
    border-radius: 0.4em;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    border: 1px solid $label-color;
  }

  &__underlined {
    border-bottom: 0.5px solid v-bind(borderColor);
    box-shadow: none;
  }

  &__dark {
    background-color: $dark-base-color;
    color: $dark-label-color;
    border-color: $border-dark;
  }

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
        display: flex;
        align-items: center;
        gap: .5em;
      }

      .close-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5em;
        color: #555;
        transition: color 0.3s ease;
      }
    }
  }
}

/* --- SCROLL STYLES --- */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
