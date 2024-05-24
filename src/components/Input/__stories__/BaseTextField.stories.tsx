import type  { Meta, StoryObj } from '@storybook/vue3'
import { BaseTextField } from '@/components'
import { userEvent, within } from '@storybook/testing-library'
import { ref } from 'vue'

const meta: Meta = {
    title: 'Input/BaseTextField',
    component: BaseTextField,
    tags: ['input', 'textField'],
    argTypes: {
        bind: {
            control: 'object'
        },
        variant: {
            control: 'select',
            options: [
                'default',
                'outlined',
                'underlined',
                'dark'
            ]
        },
        useBorderLoading: {
            control: 'boolean'
        },
        loadingColor: {
            control: 'color'
        },
        loadingSize: {
            control: 'text'
        },
        disabled: {
            control: 'boolean'
        },
        readonly: {
            control: 'boolean'
        },
        loading: {
            control: 'boolean'
        },
        label: {
            control: 'text'
        },
        placeholder: {
            control: 'text'
        },
        disableOnLoading: {
            control: 'boolean'
        },
        maxLength: {
            control: 'number'
        },
        minLength: {
            control: 'number'
        },
        required: {
            control: 'boolean'
        },
        width: {
            control: 'text'
        },
        height: {
            control: 'text'
        },
        rules: {
            control: 'array'
        },
        customStyle: {
            control: 'text'
        },
        disableRequiredRule: {
            control: 'boolean'
        },
        rightIcon: {
            control: 'text'
        },
        leftIcon: {
            control: 'text'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
    render: (args) => ({
        components: { BaseTextField },
        setup() {
            const modelValue = ref('')

            return {
                modelValue,
                args: {
                    placeholder: 'Type your text',
                    label: 'Label',
                    ...args,
                }
            }
        },
        template: '<div style="width: 300px"><BaseTextField v-model="modelValue" v-bind="args">Default</BaseTextField></div>'
    }),
    args: {
        ...BaseTextField.args
    }
}

export const Default = Template
Default.args = {}
Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, 'Default')
}

export const Outlined = {
    ...Template,
    args: {
        ...Template.args,
        variant: 'outlined'
    }
}
Outlined.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, 'Outlined')
}

export const Underlined = {
    ...Template,
    args: {
        ...Template.args,
        leftIcon: 'fa fa-fire',
        variant: 'underlined'
    }
}
Underlined.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, 'Underlined')
}

export const Dark = {
    ...Template,
    args: {
        ...Template.args,
        variant: 'dark'
    }
}
Dark.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, 'Dark')
}

export const LoadingDefault = {
    ...Template,
    args: {
        ...Template.args,
        loading: true
    }
}
LoadingDefault.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, 'LoadingDefault')
}

export const LoadingUseBorder = {
    ...Template,
    args: {
        ...Template.args,
        loading: true,
        useBorderLoading: true
    }
}
LoadingUseBorder.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, 'LoadingUseBorder')
}

export const LoadingColor = {
    ...Template,
    args: {
        ...Template.args,
        loading: true,
        loadingColor: 'red'
    }
}
LoadingColor.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, 'Custom Loading Color')
}

export const Disabled = {
    ...Template,
    args: {
        ...Template.args,
        disabled: true
    }
}

export const DisabledOnLoading = {
    ...Template,
    args: {
        ...Template.args,
        disableOnLoading: true,
        loading: true
    }
}

export const Readonly = {
    ...Template,
    args: {
        ...Template.args,
        readonly: true
    }
}

export const Required = {
    ...Template,
    args: {
        ...Template.args,
        required: true
    }
}
Required.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, `Required`)
    await userEvent.clear(input)
}

export const MinLength5 = {
    ...Template,
    args: {
        ...Template.args,
        minLength: 5
    }
}
MinLength5.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, `1234`)
}

export const MaxLength5 = {
    ...Template,
    args: {
        ...Template.args,
        maxLength: 5
    }
}
MaxLength5.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, `123456`)
}

export const CustomRule = {
    ...Template,
    args: {
        ...Template.args,
        rules: [(value: string) => value.includes('vuetage') || 'Text should include "vuetage"']
    }
}
CustomRule.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, `Custom rule`)
}

export const Password = {
    ...Template,
    args: {
        ...Template.args,
        password: true
    }
}
CustomRule.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, `Password`)
}

export const WithLeftIcon = {
    ...Template,
    args: {
        ...Template.args,
        leftIcon: 'fa fa-search'
    }
}
WithLeftIcon.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, `With left icon`)
}

export const WithRightIcon = {
    ...Template,
    args: {
        ...Template.args,
        rightIcon: 'fa fa-search'
    }
}
WithRightIcon.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, `With right icon`)
}

export const Width = {
    ...Template,
    args: {
        ...Template.args,
        width: '40px'
    }
}
Width.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, `Width`)
}

export const Height = {
    ...Template,
    args: {
        ...Template.args,
        height: '80px'
    }
}
Height.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, `Height`)
}

export const CustomStyle = {
    ...Template,
    args: {
        ...Template.args,
        customStyle: 'background-color: yellow; border-radius: 15px;'
    }
}
CustomStyle.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-text-field-input')
    await userEvent.type(input, `Custom Style`)
}