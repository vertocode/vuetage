import type  { Meta, StoryObj } from '@storybook/vue3'
import { BaseButton, BaseTextField } from '@/components'

const meta: Meta = {
    title: 'Input/BaseTextField',
    component: BaseTextField,
    tags: ['input', 'textField'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => ({
        components: { BaseTextField },
        setup() {
            return { args }
        },
        template: '<BaseTextField modelValue="hello" v-bind="args">Default</BaseTextField>'
    }),
    args: {
        ...BaseButton.args
    }
}

Default.args = {}