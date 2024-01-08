import { StyleValue } from 'vue'

export interface Props {
    disabled?: boolean
    tooltipMessage?: string | null
    size?: Size
    variant?: Variant
    leftIcon?: string
    rightIcon?: string | null
    loading?: boolean
    customClass?: string
    customStyle?: StyleValue | undefined
    colorSpinner?: string
    useBGTransition?: boolean
    useHover?: boolean
    hideRightIcon?: boolean
    hideLeftIcon?: boolean
}

type Variant =
    'primary'
    | 'success'
    | 'danger'
    | 'outline-primary'
    | 'outline-success'
    | 'outline-danger'
    | 'dark'
    | 'outline-dark'

type Size = 'small' | 'medium' | 'large'

