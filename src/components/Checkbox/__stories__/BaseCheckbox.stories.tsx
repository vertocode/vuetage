import type { Meta, StoryObj } from '@storybook/vue3'
import { BaseCheckbox } from '@/components'

const meta: Meta = {
    title: 'Input/BaseCheckbox',
    component: BaseCheckbox,
    tags: ['input', 'checkbox'],
    argTypes: {}
}

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
    render: (args) => ({
        components: { BaseCheckbox },
        setup() {
            return {
                args
            }
        },
        template: `<div style="max-width: 300px; display: flex; gap: 12px;">
            <BaseCheckbox v-bind="args" />
            <BaseCheckbox defaultChecked v-bind="args" />
        </div>`
    })
}

export const Primary = {
    ...Template,
    args: {}
}

export const Success = {
    ...Template,
    args: {
        color: 'success'
    }
}

export const Danger = {
    ...Template,
    args: {
        color: 'danger'
    }
}

export const Warning = {
    ...Template,
    args: {
        color: 'warning'
    }
}

export const Info = {
    ...Template,
    args: {
        color: 'info'
    }
}

export const Dark = {
    ...Template,
    args: {
        color: 'dark'
    }
}

export const Light = {
    ...Template,
    args: {
        color: 'light'
    }
}