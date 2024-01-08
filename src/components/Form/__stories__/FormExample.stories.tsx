import type  { Meta, StoryObj } from '@storybook/vue3'
import { BaseSelect, BaseButton, BaseTextField } from '@/components'
import { reactive, ref, computed } from 'vue'
import { NormalOption } from '@/typing/BaseSelect'

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
        components: { BaseTextField, BaseButton, BaseSelect },
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
                }
            })
            const disabled = computed(() => {
                return !data.name || !data.email || !data.country.value
            })
            const countries: NormalOption[] = [
                { text: 'United States', value: 'us' },
                { text: 'Canada', value: 'ca' },
                { text: 'Mexico', value: 'mx' },
            ]

            return {
                data,
                disabled,
                loading,
                countries,
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
