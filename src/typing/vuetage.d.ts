import { Props as BaseButtonProps } from '@/typing/BaseButton'
import { Props as BaseSelectProps } from '@/typing/BaseSelect'
import { Props as BaseAutocompleteProps } from '@/typing/BaseAutocomplete'
import { Props as BaseTextFieldProps } from '@/typing/BaseTextField'
import { Props as BaseGroupProps } from '@/typing/BaseGroup'
import { Props as BaseItemProps } from '@/typing/BaseItem'
import { Props as BaseMenuProps } from '@/typing/BaseMenu'
import { UserStyleConfig } from '@/typing/Config'

declare module 'vuetage' {
    import { DefineComponent } from 'vue'

    export const BaseButton: DefineComponent<BaseButtonProps>

    export const BaseTextField: DefineComponent<BaseTextFieldProps>

    export const BaseSelect: DefineComponent<BaseSelectProps>

    export const BaseAutocomplete: DefineComponent<BaseAutocompleteProps>

    export const BaseGroup: DefineComponent<BaseGroupProps>

    export const BaseItem: DefineComponent<BaseItemProps>

    export const BaseMenu: DefineComponent<BaseMenuProps>

    export const Spinner: DefineComponent

    export function changeTheme(theme: UserStyleConfig): void
}