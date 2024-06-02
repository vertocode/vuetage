import { CustomStyle } from '@/typing/Style'
import { Color } from '@/typing/Color'

export interface Props {
    modelValue: boolean
    color?: Color
    inputStyle?: CustomStyle
    key?: string
    defaultChecked?: boolean
}