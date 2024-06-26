import type  { Meta, StoryObj } from '@storybook/vue3'
import { BaseSelect } from '@/components'

const meta: Meta = {
    title: 'Input/BaseSelect',
    component: BaseSelect,
    tags: ['input', 'select'],
    argTypes: {}
}

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
        template: `<div style="width: 300px;"><BaseSelect v-bind="args" /></div>`
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
        options: groupOptions
    }
}

export const Multiple = {
    ...Template,
    args: {
        ...Template.args,
        options: [
            { text: 'Option 1', value: 'option-1' },
            { text: 'Option 2', value: 'option-2' },
            { text: 'Option 3', value: 'option-3' },
            { text: 'Option 4', value: 'option-4' },
            { text: 'Option 5', value: 'option-5' }
        ],
        multiple: true
    }
}

export const Outlined = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'outlined'
    }
}

export const Underlined = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'underlined'
    }
}

export const Dark = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'dark'
    }
}

export const CloseOnSelect = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'underlined',
        closeOnSelect: true
    }
}

export const Loading = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'underlined',
        loading: true
    }
}

export const useBorderLoading = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'underlined',
        loading: true,
        useBorderLoading: true
    }
}

export const LoadingColor = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'underlined',
        loading: true,
        loadingColor: 'green'
    }
}

export const Disabled = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'outlined',
        disabled: true
    }
}

export const leftIcon = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'outlined',
        leftIcon: 'fa fa-search'
    }
}

export const rightIcon = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        variant: 'outlined',
        rightIcon: 'fa fa-search'
    }
}

export const inputStyle = {
    ...Template,
    args: {
        ...Template.args,
        options: groupOptions,
        inputStyle: 'background-color: #90ee90; color: green;'
    }
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

