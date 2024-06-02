import { CustomStyle } from '@/typing/Style'
import { Color } from '@/typing/Color'

export interface Props {
    modelValue: boolean
    color?: Color | string
    inputStyle?: CustomStyle
    key?: string
    defaultChecked?: boolean
}