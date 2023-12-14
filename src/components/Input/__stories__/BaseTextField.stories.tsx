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

const Template: Story = {
    render: (args) => ({
        components: { BaseTextField },
        setup() {
            return {
                args: {
                    placeholder: 'Type your text',
                    label: 'Label',
                    ...args,
                }
            }
        },
        template: '<div style="width: 200px"><BaseTextField v-bind="args">Default</BaseTextField></div>'
    }),
    args: {
        ...BaseButton.args
    }
}

export const Default = Template
Default.args = {}

export const Outlined = {
    ...Template,
    args: {
        ...Template.args,
        variant: 'outlined'
    }
}

export const Underlined = {
    ...Template,
    args: {
        ...Template.args,
        variant: 'underlined'
    }
}

export const Dark = {
    ...Template,
    args: {
        ...Template.args,
        variant: 'dark'
    }
}

export const LoadingDefault = {
    ...Template,
    args: {
        ...Template.args,
        loading: true
    }
}

export const LoadingUseBorder = {
    ...Template,
    args: {
        ...Template.args,
        loading: true,
        useBorderLoading: true
    }
}

export const MinLength5 = {
    ...Template,
    args: {
        ...Template.args,
        minLength: 5
    }
}

export const MaxLength5 = {
    ...Template,
    args: {
        ...Template.args,
        maxLength: 5
    }
}