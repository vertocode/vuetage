import { CustomStyle } from '@/typing/Style'

export interface Props {
    show: boolean
    title?: string
    variant?: Variants
    leftIcon?: string
    rightIcon?: string
    closeIcon?: string
    backgroundColor?: string
    top?: string | number
    left?: string | number
    bottom?: string | number
    right?: string | number
    borderColor?: string
    zIndex?: string | number
    maxHeight?: string
    boxShadow?: string
    showCloseButton?: boolean
    customClass?: string
    customStyle?: CustomStyle
}

type Variants = 'default' | 'outlined' | 'underlined' | 'dark'