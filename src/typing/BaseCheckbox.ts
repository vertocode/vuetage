import { CustomStyle } from '@/typing/Style'
import { Color } from '@/typing/Color'

export interface Props {
    modelValue?: boolean
    color?: Color
    inputStyle?: CustomStyle
    key?: string
    size?: Size
    defaultChecked?: boolean
    checkIconClass?: string
    disabled?: boolean
    variantColor?: string
    bgHoverColor?: string
    checkColor?: string
}

type Size = 'small' | 'medium' | 'large' | string