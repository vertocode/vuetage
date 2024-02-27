import type { Meta, StoryObj } from '@storybook/vue3'
import { BaseAutocomplete } from '@/components'

const meta: Meta = {
    title: 'Input/BaseAutocomplete',
    component: BaseAutocomplete,
    tags: ['input', 'autocomplete'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
    render: (args) => ({
        components: { BaseAutocomplete },
        setup() {
            return {
                args: {
                    ...args,
                    label: 'Label',
                    modelValue: ''
                }
            }
        },
        template: `<div style="width: 200px;"><BaseAutocomplete v-bind="args" /></div>`
    })
}

export const Default = {
    ...Template,
    args: {
        ...Template.args,
        options: [
            { text: 'Option 1', value: 'option-1' },
            { text: 'Option 2', value: 'option-2' },
            { text: 'Option 3', value: 'option-3' }
        ]
    }
}