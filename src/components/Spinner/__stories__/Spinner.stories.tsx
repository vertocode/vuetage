import { Spinner } from '@/components'
import { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
    title: 'Loading/Spinner',
    component: Spinner,
    tags: ['loading', 'spinner'],
    argTypes: {
        colorSpinner: {
            control: 'text'
        },
        size: {
            control: 'select',
            options: [
                'small',
                'medium',
                'large'
            ]
        },
        customSpinnerClass: {
            control: 'text'
        },
        customSpinnerInnerClass: {
            control: 'text'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
    render: (args) => ({
        components: { Spinner },
        setup() {
            return { args }
        },
        template: '<Spinner v-bind="args"/>'
    }),
    args: {
        ...Spinner.args
    }
}
Small.args = {
    size: 'small'
}

export const Medium: Story = {
    render: (args) => ({
        components: { Spinner },
        setup() {
            return { args }
        },
        template: '<Spinner v-bind="args"/>'
    }),
    args: {
        ...Spinner.args
    }
}
Medium.args = {
    size: 'medium'
}

export const Large: Story = {
    render: (args) => ({
        components: { Spinner },
        setup() {
            return { args }
        },
        template: '<Spinner v-bind="args"/>'
    }),
    args: {
        ...Spinner.args
    }
}
Large.args = {
    size: 'large'
}

export const ColorSpinner: Story = {
    render: (args) => ({
        components: { Spinner },
        setup() {
            return { args }
        },
        template: '<Spinner v-bind="args"/>'
    }),
    args: {
        ...Spinner.args
    }
}
ColorSpinner.args = {
    colorSpinner: '#1EA7FD',
    size: 'medium'
}