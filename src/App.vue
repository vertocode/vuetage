<template>
  <form @submit.prevent style="width: 240px; margin: 2em auto;">
    <BaseTextField
        label="Name"
        placeholder="Enter your name"
        v-model="data.name"
    />
    <BaseTextField
        label="Email"
        placeholder="Enter your email"
        v-model="data.email"
    />
    <BaseSelect
        close-on-select
        label="Country"
        :options="countries"
        v-model="data.country"
    />
    <BaseButton
        rightIcon="fa fa-rocket"
        size="small"
        :disabled="isDisabled"
        :loading="isLoading"
        @click="submit"
    >
      Submit form
    </BaseButton>
  </form>

  <div class="result">
    <h3>Result</h3>
    <pre>{{ data }}</pre>
  </div>

  <div class="loading">
    <BaseButton2
        loading
    >
      loading
    </BaseButton2>
  </div>
</template>
<script setup lang="ts">
import { BaseTextField, BaseButton } from '@/components'

// test after building to check if it also works.
import { BaseButton as BaseButton2 } from '../dist/vuetage.es.js'

import { ref, reactive } from 'vue'
import { BaseSelect } from '@/components'
import { NormalOption } from '@/typing/BaseSelect'

const isDisabled = ref(false)
const isLoading = ref(false)
const submit = () => {
	isLoading.value = true
	setTimeout(() => {
		isLoading.value = false
	}, 2000)
}

const data = reactive({
	name: '',
	email: '',
	country: {
		text: '',
		value: ''
	}
})
const countries: NormalOption[] = [
	{ text: 'United States', value: 'us' },
	{ text: 'Canada', value: 'ca' },
	{ text: 'Mexico', value: 'mx' },
]
</script>