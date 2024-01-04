import { Props as BaseButtonProps } from '@/typing/BaseButton'
import { Props as BaseSelectProps } from '@/typing/BaseSelect'
import { Props as BaseTextFieldProps } from '@/typing/BaseTextField'

declare module 'vuetage' {
    import { DefineComponent } from 'vue'

    export const BaseButton: DefineComponent<BaseButtonProps>

    export const BaseTextField: DefineComponent<BaseTextFieldProps>

    export const BaseSelect: DefineComponent<BaseSelectProps>

    export const Spinner: DefineComponent
}