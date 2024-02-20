import { StyleValue } from 'vue'

export interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modelValue: any
    bind?: object
    variant?: Variants
    useBorderLoading?: boolean
    loadingColor?: string
    loadingSize?: string
    disabled?: boolean
    readonly?: boolean
    loading?: boolean
    label?: string | null
    placeholder?: string | null
    disableOnLoading?: boolean
    maxLength?: number | string | null
    minLength?: number | string | null
    required?: boolean
    width?: string
    height?: string
    rules?: Array<(value: string) => string | boolean>
    style?: StyleValue | undefined
    customStyle?: StyleValue | undefined
    customStyleLabel?: StyleValue | undefined
    disableRequiredRule?: boolean
    rightIcon?: string
    leftIcon?: string
    eventEmitter?: EventEmitters
    password?: boolean
    customClass?: string
}

type Variants = 'default' | 'outline' | 'underlined' | 'dark'
type EventEmitters = 'input' | 'change' | 'blur'