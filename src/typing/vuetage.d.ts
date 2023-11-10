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
    export const Spinner: DefineComponent
}