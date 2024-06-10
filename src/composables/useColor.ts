import { Color } from '@/typing/Color'
import {computed} from "vue";

interface UseColorProps {
    variant: Color | string
    disabled?: boolean
    customColors?: {
        variantColor?: string
        variantColorHover?: string
        variantTextColor?: string
    }
}

interface UseColorReturn {
    variantColor: string
    variantColorHover: string
    variantTextColor: string
}

export const useColor = ({ variant, disabled, customColors }: UseColorProps): UseColorReturn => {
    const config = computed(() => {
        if (disabled) {
            if (variant === 'dark') {
                return {
                    variantColor: customColors?.variantColor || 'var(--dark-disabled-color)',
                    variantColorHover: customColors?.variantColorHover || 'var(--dark-disabled-color)',
                    variantTextColor: customColors?.variantTextColor || 'var(--dark-disabled-color)'
                }
            }
            return {
                variantColor: customColors?.variantColor || 'var(--disabled-color)',
                variantColorHover: customColors?.variantColorHover || 'var(--disabled-color)',
                variantTextColor: customColors?.variantTextColor || 'var(--disabled-text-color)'
            }
        }
        switch (variant) {
            case 'primary':
                return {
                    variantColor: customColors?.variantColor || 'var(--primary-color)',
                    variantColorHover: customColors?.variantColorHover || 'var(--primary-color-hover)',
                    variantTextColor: customColors?.variantTextColor || 'var(--primary-text-color)'
                }
            case 'success':
                return {
                    variantColor: customColors?.variantColor || 'var(--success-color)',
                    variantColorHover: customColors?.variantColorHover || 'var(--success-color-hover)',
                    variantTextColor: customColors?.variantTextColor || 'var(--success-text-color)'
                }
            case 'danger':
                return {
                    variantColor: customColors?.variantColor || 'var(--danger-color)',
                    variantColorHover: customColors?.variantColorHover || 'var(--danger-color-hover)',
                    variantTextColor: customColors?.variantTextColor || 'var(--danger-text-color)'
                }
            case 'warning':
                return {
                    variantColor: customColors?.variantColor || 'var(--warning-color)',
                    variantColorHover: customColors?.variantColorHover || 'var(--warning-color-hover)',
                    variantTextColor: customColors?.variantTextColor || 'var(--warning-text-color)'
                }
            case 'info':
                return {
                    variantColor: customColors?.variantColor || 'var(--info-color)',
                    variantColorHover: customColors?.variantColorHover || 'var(--info-color-hover)',
                    variantTextColor: customColors?.variantTextColor || 'var(--info-text-color)'
                }
            case 'dark':
                return {
                    variantColor: customColors?.variantColor || 'var(--dark-color)',
                    variantColorHover: customColors?.variantColorHover || 'var(--dark-color-hover)',
                    variantTextColor: customColors?.variantTextColor || 'var(--dark-text-color)'
                }
            case 'light':
                return {
                    variantColor: customColors?.variantColor || 'var(--light-color)',
                    variantColorHover: customColors?.variantColorHover || 'var(--light-color-hover)',
                    variantTextColor: customColors?.variantTextColor || 'var(--light-text-color)'
                }
            default:
                console.log('[vuetage]: variant not found, using primary color as default')
                return {
                    variantColor: customColors?.variantColor || 'var(--primary-color)',
                    variantColorHover: customColors?.variantColorHover || 'var(--primary-color-hover)',
                    variantTextColor: customColors?.variantTextColor || 'var(--primary-text-color)'
                }
        }
    })

    const { variantColor, variantColorHover, variantTextColor } = config.value

    return {
        variantColor,
        variantColorHover,
        variantTextColor
    }
}