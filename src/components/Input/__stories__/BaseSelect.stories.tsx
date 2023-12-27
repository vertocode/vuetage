import type  { Meta, StoryObj } from '@storybook/vue3'
import { BaseSelect } from '@/components'

const meta: Meta = {
    title: 'Input/BaseSelect',
    component: BaseSelect,
    tags: ['input', 'select'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
    render: (args) => ({
        components: { BaseSelect },
        setup() {
            return {
                args: {
                    ...args,
                    label: 'Label'
                }
            }
        },
        template: `<div style="width: 200px;"><BaseSelect v-bind="args" /></div>`
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

export const OptionWithGroups = {
    ...Template,
    args: {
        ...Template.args,
        options: [
            {
                group: 'Phones',
                items: [
                    { text: 'iPhone 12', value: 'iphone-12' },
                    { text: 'iPhone 11', value: 'iphone-11' },
                    { text: 'iPhone X', value: 'iphone-x' }
                ]
            },
            {
                group: 'Laptops',
                items: [
                    { text: 'MacBook Pro', value: 'macbook-pro' },
                    { text: 'MacBook Air', value: 'macbook-air' },
                    { text: 'MacBook', value: 'macbook' }
                ]
            }
        ]
    }
}