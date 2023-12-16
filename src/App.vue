<template>
  <div style="width: 300px;">
    should be: loading test:
    <BaseTextField loading="true" loading-size="10px" variant="default" left-icon="fa fa-search" placeholder="Type your text" label="Text Field" required max-length="5" v-model="value" />
    as be:
    <fromDist variant="default" left-icon="fa fa-search" placeholder="Type your text" label="Text Field" required max-length="5" v-model="value" />
  </div>
</template>
<script setup lang="ts">
import { BaseTextField as fromDist } from '../dist/vuetage.es.js'
import { BaseTextField, Spinner } from '@/components'
import { ref } from 'vue'

const value = ref('')
</script>