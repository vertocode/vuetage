declare module 'vuetage' {
    import { DefineComponent } from 'vue'
    import { Size, Variant } from './BaseButton.ts'

    export const BaseButton: DefineComponent<{
        disabled?: boolean
        tooltipMessage?: string | null
        size?: Size
        variant?: Variant
        leftIcon?: string
        rightIcon?: string
        loading?: boolean
        customClass?: string
    }>
    export const BaseTextField: DefineComponent<{
        modelValue?: string
        bind?: object
        variant?: string
        useBorderLoading?: boolean
        loadingColor?: string
        disabled?: boolean
        readonly?: boolean
        loading?: boolean
        label?: string
        placeholder?: string
        disableOnLoading?: boolean
        maxLength?: number
        minLength?: number
        required?: boolean
        width?: string
        height?: string
        rules?: (() => boolean | string)[]
        customStyle?: string | object | (string | object)[]
        customStyleLabel?: string | object | (string | object)[]
        disableRequiredRule?: boolean
        rightIcon?: string
        leftIcon?: string
    }>
    export const Spinner: DefineComponent
}