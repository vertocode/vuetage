import { Props as BaseTextFieldProps } from './BaseTextField'
import { CustomStyle } from '@/typing/Style'
import {NormalOption, GroupOption} from "@/typing/Option";

export interface Props extends BaseTextFieldProps {
    options: NormalOption[] | GroupOption[]
    label?: string
    inputFieldStyle?: CustomStyle
    inputStyle?: CustomStyle
    labelStyle?: CustomStyle
    menuStyle?: CustomStyle
    itemStyle?: CustomStyle
    groupStyle?: CustomStyle
    closeOnSelect?: boolean | null
    selectedOptions?: NormalOption[]
}