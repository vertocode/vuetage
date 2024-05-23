import type { Meta, StoryObj } from '@storybook/vue3'
import { BaseAutocomplete } from '@/components'
import { userEvent, within } from '@storybook/testing-library'

const meta: Meta = {
    title: 'Input/BaseAutocomplete',
    component: BaseAutocomplete,
    tags: ['input', 'autocomplete'],
    argTypes: {}
}

const normalOptions = [
    { text: 'Option 1', value: 'option-1' },
    { text: 'Option 2', value: 'option-2' },
    { text: 'Option 3', value: 'option-3' }
]

const groupOptions = [
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
        template: `<div style="max-width: 500px;"><BaseAutocomplete v-bind="args" /></div>`
    })
}

export const Default = {
    ...Template,
    args: {
        ...Template.args,
        options: normalOptions
    }
}

export const OptionWithGroups = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions
    }
}
OptionWithGroups.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const Outlined = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'outlined'
    }
}
Outlined.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const Underlined = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'underlined'
    }
}
Underlined.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const Dark = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'dark'
    }
}
Dark.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const Loading = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        loading: true
    }
}

export const UseBorderLoading = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        loading: true,
        useBorderLoading: true
    }
}

export const MenuLoading = {
    ...Template,
    args: {
        ...Template.args,
        menuLoading: true,
        options: normalOptions
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

export const Disabled = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        disabled: true
    }
}

export const LeftIcon = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        leftIcon: 'fa fa-search'
    }
}
LeftIcon.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const RightIcon = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        rightIcon: 'fa fa-search'
    }
}
RightIcon.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const AutoFilterOff = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        autoFilter: false
    }
}
AutoFilterOff.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const CaseSensitiveFilterOff = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        caseSensitiveFilter: false
    }
}
CaseSensitiveFilterOff.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const inputStyle = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        inputStyle: 'background-color: #90ee90; color: green;'
    }
}
inputStyle.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const labelStyle = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        inputStyle: 'color: green;',
        labelStyle: 'color: red; font-weight: bold'
    }
}
labelStyle.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const menuStyle = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        inputStyle: 'background-color: #90ee90; color: green;',
        labelStyle: 'color: red; font-weight: bold',
        menuStyle: 'background-color: #90ee90; padding: 1.5em;'
    }
}
menuStyle.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const itemStyle = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        itemStyle: {
            'background-color': '#90ee90',
            hover: {
                'background-color': '#00ff00'
            }
        }
    }
}
itemStyle.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}

export const groupStyle = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        groupStyle: {
            'background-color': '#90ee90',
            hover: {
                'background-color': '#00ff00'
            }
        }
    }
}
groupStyle.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await openMenu({ canvasElement })
}