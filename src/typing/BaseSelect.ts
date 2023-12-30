import { Props as BaseTextFieldProps } from './BaseTextField'
import { StyleValue } from 'vue'

export interface Props extends BaseTextFieldProps {
    label?: string
    multiple?: boolean
    inputFieldStyle?: StyleValue | undefined
    inputStyle?: StyleValue | undefined
    labelStyle?: StyleValue | undefined
    menuStyle?: StyleValue | undefined
    itemStyle?: StyleValue | undefined
    groupStyle?: StyleValue | undefined
    closeOnSelect?: boolean | null
    selectedOptions?: NormalOption[]
    options: Option[]
}

export type Option = NormalOption[] | GroupOption[]

export interface GroupOption {
    group: string
    items: NormalOption[]
}

export interface NormalOption {
    group?: string
    value: string
    text: string
}