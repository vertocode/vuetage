import type { Meta, StoryObj } from '@storybook/vue3'
import { BaseItem } from '@/components'

const meta: Meta = {
    title: 'List/BaseItem',
    component: BaseItem,
    tags: ['list', 'item', 'select'],
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
        components: { BaseItem },
        setup() {
            return {
                args: {
                    ...args
                }
            }
        },
        template: `<div style="width: 200px;"><BaseItem >Item <BaseItem /></div>`
    })
}

export const Default = {
    ...Template,
    args: {
        ...Template.args
    }
}

export const LeftIcon = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 200px;">
            <BaseItem leftIcon="fa fa-check">Item with left icon</BaseItem>
        </div>`
    })
}

export const RightIcon = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 200px;">
        <BaseItem rightIcon="fa fa-check">Item with right icon</BaseItem>
        </div>`
    })
}

export const Cursor = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 200px;">
        <BaseItem cursor="help">Help cursor when hover here</BaseItem>
        </div>`
    })
}

export const Active = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 200px;">
        <BaseItem active>Active item</BaseItem>
        </div>`
    })

}

export const ActiveTextColor = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 200px;">
        <BaseItem active activeTextColor="blue">Blue active text color when it's active</BaseItem>
        </div>`
    })
}

export const ActiveBgColor = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 200px;">
        <BaseItem active activeBgColor="yellow">Yellow active background color when it's active</BaseItem>
        </div>`
    })
}

export const CustomStyle = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 200px;">
        <BaseItem customStyle="color: white; background-color: red;">Any custom style</BaseItem>
        </div>`
    })
}