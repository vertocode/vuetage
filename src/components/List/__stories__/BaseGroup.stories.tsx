import type { Meta, StoryObj } from '@storybook/vue3'
import { BaseGroup, BaseItem } from '@/components'

const meta: Meta = {
    title: 'List/BaseGroup',
    component: BaseGroup,
    tags: ['list', 'group', 'select'],
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
        components: { BaseGroup },
        setup() {
            return {
                args: {
                    ...args,
                    title: 'Title'
                }
            }
        },
        template: `<div style="width: 300px;"><BaseGroup :title="args.title" v-bind="args" /></div>`
    })
}

export const Default = {
    ...Template,
    args: {
        ...Template.args
    }
}

export const GroupWithItems = {
    render: () => ({
        components: { BaseGroup, BaseItem },
        template: `<div style="width: 300px;">
          <BaseGroup title="Phones">
            <BaseItem>Item 1</BaseItem>
            <BaseItem active>Item 2</BaseItem>
            <BaseItem>Item 3</BaseItem>
          </BaseGroup>
        </div>`
    })
}

export const LeftIcon = {
    render: () => ({
        components: { BaseGroup, BaseItem },
        template: `<div style="width: 300px;">
          <BaseGroup leftIcon="fa fa-check" title="TO DO">
            <BaseItem active>Task 1</BaseItem>
            <BaseItem active>Task 2</BaseItem>
            <BaseItem>Task 3</BaseItem>
          </BaseGroup>
        </div>`
    })
}

export const RightIcon = {
    render: () => ({
        components: { BaseGroup, BaseItem },
        template: `<div style="width: 300px;">
          <BaseGroup rightIcon="fa fa-trash" title="Bin">
            <BaseItem>Folder 1</BaseItem>
            <BaseItem active>Folder 2</BaseItem>
            <BaseItem>Folder 3</BaseItem>
          </BaseGroup>
        </div>`
    })
}

export const CustomStyle = {
    render: () => ({
        components: { BaseGroup, BaseItem },
        template: `<div style="width: 300px;">
          <BaseGroup title="Any custom Style" custom-style="background-color: red; color: white; borderRadius: 15px;">
            <BaseItem>Item 1</BaseItem>
            <BaseItem active>Item 2</BaseItem>
            <BaseItem>Item 3</BaseItem>
          </BaseGroup>
        </div>`
    })
}