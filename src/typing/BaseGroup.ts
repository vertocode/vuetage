import { CustomStyle } from '@/typing/Style'

export interface Props {
    title: string
    leftIcon?: string
    rightIcon?: string
    customStyle?: CustomStyle
    customClass?: string
    showDropdown?: boolean
    defaultOpen?: boolean
}