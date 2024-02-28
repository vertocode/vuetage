import { StyleValue } from 'vue'
import { Props as BaseTextFieldProps } from '@/typing/BaseTextField'
import { NormalOption, GroupOption } from '@/typing/Option'
import { CustomStyle } from '@/typing/Style'

export interface Props extends BaseTextFieldProps {
    options: NormalOption[] | GroupOption[]
    label?: string
    autoFilter?: boolean
    caseSensitiveFilter?: boolean
    multiple?: boolean
    inputFieldStyle?: StyleValue
    inputStyle?: StyleValue
    labelStyle?: StyleValue
    menuStyle?: CustomStyle
    groupStyle?: CustomStyle
    itemStyle?: CustomStyle
}

export interface Emits {
    (e: 'update:modelValue', value: string): void
}