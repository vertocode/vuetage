import type { Meta, StoryObj } from '@storybook/vue3'
import { BaseMenu, BaseButton } from '@/components'

const meta: Meta = {
    title: 'Menu/BaseMenu',
    component: BaseMenu,
    tags: ['menu'],
    argTypes: {}
}


export default meta
type Story = StoryObj<typeof meta>

const Template: Function = (slot: string): Story => ({
    render: (args) => ({
        components: { BaseMenu, BaseButton },
        setup() {
            return {
                args: {
                    ...args
                }
            }
        },
        template: `
          <div style="position: relative; width: 400px;">
            <BaseMenu :show="true" v-bind="args">${slot}</BaseMenu>
          </div>
          `
    })
})

export const Default = {
    ...Template(`
        <p>This is the default slot and we can add anything here.</p>
    `),
    args: {
        title: 'Default'
    }
}

export const RightIcon = {
    ...Template(`
        <p>We can add a right icon of the title with the props "rightIcon".</p>
    `),
    args: {
        title: 'Right Icon',
        rightIcon: 'fa fa-check'
    }
}

export const LeftIcon = {
    ...Template(`
        <p>We can add a left icon of the title with the props "leftIcon".</p>
    `),
    args: {
        title: 'Left Icon',
        leftIcon: 'fa fa-check'
    }
}

export const ShowCloseButton = {
    ...Template(`
        <p>We can show the default close button or custom close button with the props "showCloseButton".</p>
    `),
    args: {
        title: 'With Close Button',
        showCloseButton: true
    }
}

export const CustomCloseButton = {
    ...Template(`
        <p>We can change the icon of close button to close the menu using the props "closeIcon".</p>
    `),
    args: {
        title: 'With Custom Close Button',
        showCloseButton: true,
        closeIcon: 'fa fa-window-close'
    }
}

export const BackgroundColor = {
    ...Template(`
        <p>We can change the background color of the menu using the props "backgroundColor".</p>
    `),
    args: {
        title: 'Background Color',
        backgroundColor: 'lightgray'
    }
}

export const BorderColor = {
    ...Template(`
        <p>We can change the border color of the menu using the props "borderColor".</p>
    `),
    args: {
        title: 'Border Color',
        borderColor: 'red'
    }
}

export const BoxShadow = {
    ...Template(`
        <p>We can change/remove box shadow to the menu using the props "boxShadow".</p>
    `),
    args: {
        title: 'Box Shadow',
        boxShadow: '0 0 10px 0 green'
    }
}

export const customStyle = {
    ...Template(`
        <p>We can add custom style to the menu using the props "customStyle".</p>
    `),
    args: {
        title: 'Custom Style',
        customStyle: {
            backgroundColor: 'black',
            borderColor: '#add8e6',
            color: '#add8e6'
        }
    }
}