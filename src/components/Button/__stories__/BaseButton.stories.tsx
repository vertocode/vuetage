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
                'dark',
                'outline-primary',
                'outline-success',
                'outline-danger',
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

export const Primary: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Primary</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
Primary.args = {
    variant: 'primary'
}

export const Success: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Success</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
Success.args = {
    variant: 'success'
}

export const Danger: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Danger</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
Danger.args = {
    variant: 'danger'
}

export const Dark: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Dark</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
Dark.args = {
    variant: 'dark'
}

export const OutlinePrimary: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Outline Primary</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
OutlinePrimary.args = {
    variant: 'outline-primary'
}

export const OutlineSuccess: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Outline Success</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
OutlineSuccess.args = {
    variant: 'outline-success'
}

export const OutlineDanger: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Outline Danger</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
OutlineDanger.args = {
    variant: 'outline-danger'
}

export const OutlineDark: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Outline Dark</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
OutlineDark.args = {
    variant: 'outline-dark'
}

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Small</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
Small.args = {
    size: 'small'
}

export const Medium: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Medium</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
Medium.args = {
    size: 'medium'
}

export const Large: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Large</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
Large.args = {
    size: 'large'
}

export const Loading: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Loading</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
Loading.args = {
    loading: true
}

export const Disabled: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Disabled</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
Disabled.args = {
    disabled: true
}

export const WithLeftIcon: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Confirm</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
WithLeftIcon.args = {
    leftIcon: 'fa fa-check'
}

export const WithRightIcon: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Whatsapp</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
WithRightIcon.args = {
    rightIcon: 'fa fa-whatsapp'
}

export const CustomStyle: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args }
        },
        template: '<BaseButton v-bind="args">Custom Style</BaseButton>'
    }),
    args: {
        ...BaseButton.args
    }
}
CustomStyle.args = {
    customStyle: 'border-radius: 3em; background-color: purple;'
}