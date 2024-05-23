import type  { Meta, StoryObj } from '@storybook/vue3'
import { BaseSelect, BaseButton, BaseTextField, BaseAutocomplete } from '@/components'
import { reactive, ref, computed } from 'vue'
import { NormalOption, GroupOption } from '@/typing/Option'

const meta: Meta = {
    title: 'Doc/FormExample',
    component: BaseSelect,
    tags: ['example'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
    render: (args) => ({
        components: { BaseTextField, BaseButton, BaseSelect, BaseAutocomplete },
        setup() {
            const loading = ref(false)
            const submit = () => {
                loading.value = true
                setTimeout(() => {
                    loading.value = false
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
            const disabled = computed(() => {
                return !data.name || !data.email || !data.country.value || !data.state.value
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
                        { text: 'California', value: 'ca' },
                        { text: 'Texas', value: 'tx' },
                        { text: 'Florida', value: 'fl' }
                    ]
                },
                {
                    group: 'Canada',
                    items: [
                        { text: 'Ontario', value: 'on' },
                        { text: 'Quebec', value: 'qc' },
                        { text: 'British Columbia', value: 'bc' }
                    ]
                },
                {
                    group: 'Mexico',
                    items: [
                        { text: 'Mexico City', value: 'mc' },
                        { text: 'Jalisco', value: 'jl' },
                        { text: 'Nuevo Leon', value: 'nl' }
                    ]
                }
            ]

            return {
                data,
                disabled,
                loading,
                countries,
                states,
                submit,
                args
            }
        },
        template: `
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
              <BaseAutocomplete 
                label="States"
                :options="states"
                leftIcon="fa fa-map-marker"
                v-model="data.state"
              />
              <BaseButton
                  rightIcon="fa fa-rocket"
                  size="small"
                  :disabled="disabled"
                  :loading="loading"
                  @click="submit"
              >
                Submit form
              </BaseButton>
          </form>
        `
    })
}

export const FormExample = Template
