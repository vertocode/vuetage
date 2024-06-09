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

export const Small = {
    ...Template,
    args: {
        size: 'small'
    }
}

export const Medium = {
    ...Template,
    args: {
        size: 'medium'
    }
}

export const Large = {
    ...Template,
    args: {
        size: 'large'
    }
}

export const CustomSize = {
    ...Template,
    args: {
        size: '100px',
        checkIconClass: 'fa-5x'
    }
}

export const Disabled = {
    ...Template,
    args: {
        disabled: true
    }
}

export const CustomCheckbox = {
    render: () => ({
        components: { BaseCheckbox },
        template: `<div style="max-width: 300px; display: flex; gap: 12px;">
            <BaseCheckbox v-bind="args" style="margin-right: 8px">
                 <template #checkmark="{ checked, test }">
                      <i 
                          class="fa fa-car"
                          :style="{
                             color: checked ? 'green' : 'red',
                             fontSize: '32px'
                          }"
                      />
                 </template>
            </BaseCheckbox>
            <BaseCheckbox defaultChecked v-bind="args" >
             <template #checkmark="{ checked, test }">
                     <i 
                          class="fa fa-car"
                          :style="{
                             color: checked ? 'green' : 'red',
                             fontSize: '32px'
                          }"
                      />
                 </template>
            </BaseCheckbox>
            <br>
            <BaseCheckbox v-bind="args" style="margin-right: 8px">
                 <template #checkmark="{ checked, test }">
                      <i 
                          class="fa fa-laptop"
                          :style="{
                             color: checked ? 'blue' : 'gray',
                             fontSize: '32px'
                          }"
                      />
                 </template>
            </BaseCheckbox>
            <BaseCheckbox defaultChecked v-bind="args" >
             <template #checkmark="{ checked, test }">
                     <i 
                          class="fa fa-laptop"
                          :style="{
                             color: checked ? 'blue' : 'gray',
                             fontSize: '32px'
                          }"
                      />
                 </template>
            </BaseCheckbox>
        </div>`
    })
}

export const DefaultChecked = {
    render: () => ({
        components: { BaseCheckbox },
        template: `<BaseCheckbox defaultChecked />`
    })
}
