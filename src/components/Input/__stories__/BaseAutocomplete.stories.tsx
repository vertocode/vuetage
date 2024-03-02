import type { Meta, StoryObj } from '@storybook/vue3'
import { BaseAutocomplete } from '@/components'
import { userEvent, within } from '@storybook/testing-library'

const meta: Meta = {
    title: 'Input/BaseAutocomplete',
    component: BaseAutocomplete,
    tags: ['input', 'autocomplete'],
    argTypes: {}
}

const openMenu = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.click(input)
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

export const MenuLoading = {
    ...Template,
    args: {
        ...Template.args,
        menuLoading: true,
        options: [
            { text: 'Option 1', value: 'option-1' },
            { text: 'Option 2', value: 'option-2' },
            { text: 'Option 3', value: 'option-3' }
        ]
    }
}
MenuLoading.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const MenuLoadingText = {
    ...Template,
    args: {
        ...Template.args,
        menuLoading: true,
        menuLoadingText: 'Custom loading text',
        options: []
    }
}
MenuLoadingText.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}