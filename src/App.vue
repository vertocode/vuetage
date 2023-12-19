<template>
  <div style="width: 300px;">
    <BaseTextField
        v-model="value"
        loading-size="10px"
        variant="outlined"
        left-icon="fa fa-search"
        placeholder="Type your text"
        label="Text Field"
        max-length="15"
        min-length="5"
        required
    />
    Value: {{ value }}
    <BaseButton @click="value += '- updated'">++ String</BaseButton>
  </div>
</template>
<script setup lang="ts">
import { BaseTextField, BaseButton } from '@/components'
import { ref } from 'vue'

const value = ref('')
</script>