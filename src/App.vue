<template>
  <form @submit.prevent style="width: 240px; margin: 2em auto;" autocomplete="off">
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
    <BaseAutocomplete
        :options="states"
        label="State"
        leftIcon="fa fa-map-marker"
        v-model="data.state"
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

  <div class="result bg-green-100">
    <h3>Result</h3>
    <pre>{{ data }}</pre>
  </div>
</template>
<script setup lang="ts">
import { BaseTextField, BaseButton, BaseSelect, BaseAutocomplete } from '@/components'

import { ref, reactive } from 'vue'
import type { NormalOption, GroupOption } from '@/typing/Option'

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
	},
	state: {
		text: '',
		value: ''
	}
})
const countries: NormalOption[] = [
	{ text: 'United States', value: 'us' },
	{ text: 'Canada', value: 'ca' },
	{ text: 'Mexico', value: 'mx' },
]

const states: GroupOption[] = [
	{
		group: 'United States',
		items: [
			{ text: 'Alabama', value: 'alabama' },
			{ text: 'Alaska', value: 'alaska' },
			{ text: 'Arizona', value: 'arizona' },
			{ text: 'Arkansas', value: 'arkansas' },
			{ text: 'California', value: 'california' },
			{ text: 'Colorado', value: 'colorado' },
			{ text: 'Connecticut', value: 'connecticut' },
			{ text: 'Delaware', value: 'delaware' },
			{ text: 'Florida', value: 'florida' },
			{ text: 'Georgia', value: 'georgia' },
			{ text: 'Hawaii', value: 'hawaii' },
			{ text: 'Idaho', value: 'idaho' },
			{ text: 'Illinois', value: 'illinois' },
			{ text: 'Indiana', value: 'indiana' },
			{ text: 'Iowa', value: 'iowa' },
			{ text: 'Kansas', value: 'kansas' },
			{ text: 'Kentucky', value: 'kentucky' },
			{ text: 'Louisiana', value: 'louisiana' },
			{ text: 'Maine', value: 'maine' },
			{ text: 'Maryland', value: 'maryland' },
			{ text: 'Massachusetts', value: 'massachusetts' },
			{ text: 'Michigan', value: 'michigan' },
			{ text: 'Minnesota', value: 'minnesota' },
			{ text: 'Mississippi', value: 'mississippi' },
			{ text: 'Missouri', value: 'missouri' },
			{ text: 'Montana', value: 'montana' },
			{ text: 'Nebraska', value: 'nebraska' },
			{ text: 'Nevada', value: 'nevada' },
			{ text: 'New Hampshire', value: 'new-hampshire' },
			{ text: 'New Jersey', value: 'new-jersey' },
			{ text: 'New Mexico', value: 'new-mexico' },
			{ text: 'New York', value: 'new-york' },
			{ text: 'North Carolina', value: 'north-carolina' },
			{ text: 'North Dakota', value: 'north-dakota' },
			{ text: 'Ohio', value: 'ohio' },
			{ text: 'Oklahoma', value: 'oklahoma' },
			{ text: 'Oregon', value: 'oregon' },
			{ text: 'Pennsylvania', value: 'pennsylvania' },
			{ text: 'Rhode Island', value: 'rhode-island' },
			{ text: 'South Carolina', value: 'south-carolina' },
			{ text: 'South Dakota', value: 'south-dakota' },
			{ text: 'Tennessee', value: 'tennessee' },
			{ text: 'Texas', value: 'texas' },
			{ text: 'Utah', value: 'utah' },
			{ text: 'Vermont', value: 'vermont' },
			{ text: 'Virginia', value: 'virginia' },
			{ text: 'Washington', value: 'washington' },
			{ text: 'West Virginia', value: 'west-virginia' },
			{ text: 'Wisconsin', value: 'wisconsin' },
			{ text: 'Wyoming', value: 'wyoming' }
		]
	},
	{
		group: 'Canada',
		items: [
			{ text: 'Alberta', value: 'alberta' },
			{ text: 'British Columbia', value: 'british-columbia' },
			{ text: 'Manitoba', value: 'manitoba' },
			{ text: 'New Brunswick', value: 'new-brunswick' },
			{ text: 'Newfoundland and Labrador', value: 'newfoundland-and-labrador' },
			{ text: 'Nova Scotia', value: 'nova-scotia' },
			{ text: 'Ontario', value: 'ontario' },
			{ text: 'Prince Edward Island', value: 'prince-edward-island' },
			{ text: 'Quebec', value: 'quebec' },
			{ text: 'Saskatchewan', value: 'saskatchewan' }
		]
	},
	{
		group: 'Mexico',
		items: [
			{ text: 'Aguascalientes', value: 'aguascalientes' },
			{ text: 'Baja California', value: 'baja-california' },
			{ text: 'Baja California Sur', value: 'baja-california-sur' },
			{ text: 'Campeche', value: 'campeche' },
			{ text: 'Chiapas', value: 'chiapas' },
			{ text: 'Chihuahua', value: 'chihuahua' },
			{ text: 'Coahuila', value: 'coahuila' },
			{ text: 'Colima', value: 'colima' },
			{ text: 'Durango', value: 'durango' },
			{ text: 'Guanajuato', value: 'guanajuato' },
			{ text: 'Guerrero', value: 'guerrero' },
			{ text: 'Hidalgo', value: 'hidalgo' },
			{ text: 'Jalisco', value: 'jalisco' },
			{ text: 'Mexico City', value: 'mexico-city' },
			{ text: 'Mexico State', value: 'mexico-state' },
			{ text: 'Michoacán', value: 'michoacan' },
			{ text: 'Morelos', value: 'morelos' },
			{ text: 'Nayarit', value: 'nayarit' },
			{ text: 'Nuevo León', value: 'nuevo-leon' },
			{ text: 'Oaxaca', value: 'oaxaca' },
			{ text: 'Puebla', value: 'puebla' },
			{ text: 'Querétaro', value: 'queretaro' },
			{ text: 'Quintana Roo', value: 'quintana-roo' },
			{ text: 'San Luis Potosí', value: 'san-luis-potosi' },
			{ text: 'Sinaloa', value: 'sinaloa' },
			{ text: 'Sonora', value: 'sonora' },
			{ text: 'Tabasco', value: 'tabasco' },
			{ text: 'Tamaulipas', value: 'tamaulipas' },
			{ text: 'Tlaxcala', value: 'tlaxcala' },
			{ text: 'Veracruz', value: 'veracruz' },
			{ text: 'Yucatán', value: 'yucatan' },
			{ text: 'Zacatecas', value: 'zacatecas' }
		]
	}
]
</script>