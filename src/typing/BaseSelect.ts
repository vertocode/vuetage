import { Props as BaseTextFieldProps } from './BaseTextField'
import { CustomStyle } from '@/typing/Style'

export interface Props extends BaseTextFieldProps {
    label?: string
    multiple?: boolean
    inputFieldStyle?: CustomStyle
    inputStyle?: CustomStyle
    labelStyle?: CustomStyle
    menuStyle?: CustomStyle
    itemStyle?: CustomStyle
    groupStyle?: CustomStyle
    closeOnSelect?: boolean | null
    selectedOptions?: NormalOption[]
    options: NormalOption[] | GroupOption[]
}

export interface GroupOption {
    group: string
    items: NormalOption[]
}

export interface NormalOption {
    value: string
    text: string
}