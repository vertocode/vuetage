<template>
  <div>
    <BaseTextField label="sexo" required max-length="5" v-model="value" @input="input" />
  </div>
</template>
<script setup lang="ts">
import BaseTextField from "@/components/Input/BaseTextField.vue"
import { ref } from 'vue'

const value = ref('')
const input = (param: any) => {
}
</script>