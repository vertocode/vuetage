import type { Meta, StoryObj } from '@storybook/vue3'

import { BaseButton } from '@/components'

const meta: Meta = {
    title: 'Button/BaseButton',
    component: BaseButton,
    tags: ['button'],
    argTypes: {
        disabled: {
            control: 'select',
            options: [true, false]
        },
        tooltipMessage: {
            control: 'text'
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large']
        },
        variant: {
            control: 'select',
            options: [
                'primary',
                'success',
                'danger',
                'outline-primary',
                'outline-success',
                'outline-danger',
                'dark',
                'outline-dark'
            ]
        },
        leftIcon: {
            control: 'text'
        },
        rightIcon: {
            control: 'text'
        },
        loading: {
            control: 'select',
            options: [true, false]
        },
        customClass: {
            control: 'text'
        },
        colorSpinner: {
            control: 'text'
        },
        useBGTransition: {
            control: 'select',
            options: [true, false]
        },
        useHover: {
            control: 'select',
            options: [true, false]
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
          return { args }
        },
        template: '<BaseButton v-bind="args">Base Button</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}