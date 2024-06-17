<template>
  <div class="base-flex" :style="[customStyles, style]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { Props } from '@/typing/BaseFlex'

const props = defineProps<Props>()

const customStyles = computed(() => ({
  flexDirection: props.direction || 'row',
  justifyContent: props.justify || 'flex-start',
  alignItems: props.align || 'flex-start',
  wrap: props.wrap || 'nowrap',
  gap: props.gap || '8px'
}))

</script>

<style lang="scss" scoped>
@import '@/components/variables.scss';

.base-flex {
  display: flex;
}
</style>