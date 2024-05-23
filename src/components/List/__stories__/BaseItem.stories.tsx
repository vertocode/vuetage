import type { Meta, StoryObj } from '@storybook/vue3'
import { BaseItem } from '@/components'

const meta: Meta = {
    title: 'List/BaseItem',
    component: BaseItem,
    tags: ['list', 'item', 'select'],
    argTypes: {}
}

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
        template: `<div style="width: 300px;"><BaseItem >Item <BaseItem /></div>`
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
        template: `<div style="width: 300px;">
            <BaseItem leftIcon="fa fa-check">Item with left icon</BaseItem>
        </div>`
    })
}

export const RightIcon = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 300px;">
        <BaseItem rightIcon="fa fa-check">Item with right icon</BaseItem>
        </div>`
    })
}

export const Cursor = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 300px;">
        <BaseItem cursor="help">Help cursor when hover here</BaseItem>
        </div>`
    })
}

export const Active = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 300px;">
        <BaseItem active>Active item</BaseItem>
        </div>`
    })

}

export const ActiveTextColor = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 300px;">
        <BaseItem active activeTextColor="blue">Blue active text color when it's active</BaseItem>
        </div>`
    })
}

export const ActiveBgColor = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 300px;">
        <BaseItem active activeBgColor="yellow">Yellow active background color when it's active</BaseItem>
        </div>`
    })
}

export const CustomStyle = {
    render: () => ({
        components: { BaseItem },
        template: `<div style="width: 300px;">
        <BaseItem customStyle="color: white; background-color: red;">Any custom style</BaseItem>
        </div>`
    })
}