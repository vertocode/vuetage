import { Color } from '@/typing/Color'
import {computed} from "vue";

interface UseColorProps {
    variant: Color | string
    disabled?: boolean
}

interface UseColorReturn {
    variantColor: string
    variantColorHover: string
    variantTextColor: string
}

export const useColor = ({ variant, disabled }: UseColorProps): UseColorReturn => {
    const config = computed(() => {
        if (disabled) {
            if (variant === 'dark') {
                return {
                    variantColor: 'var(--dark-disabled-color)',
                    variantColorHover: 'var(--dark-disabled-color)',
                    variantTextColor: 'var(--dark-disabled-color)'
                }
            }
            return {
                variantColor: 'var(--disabled-color)',
                variantColorHover: 'var(--disabled-color)',
                variantTextColor: 'var(--disabled-text-color)'
            }
        }
        switch (variant) {
            case 'primary':
                return {
                    variantColor: 'var(--primary-color)',
                    variantColorHover: 'var(--primary-color-hover)',
                    variantTextColor: 'var(--primary-text-color)'
                }
            case 'success':
                return {
                    variantColor: 'var(--success-color)',
                    variantColorHover: 'var(--success-color-hover)',
                    variantTextColor: 'var(--success-text-color)'
                }
            case 'danger':
                return {
                    variantColor: 'var(--danger-color)',
                    variantColorHover: 'var(--danger-color-hover)',
                    variantTextColor: 'var(--danger-text-color)'
                }
            case 'warning':
                return {
                    variantColor: 'var(--warning-color)',
                    variantColorHover: 'var(--warning-color-hover)',
                    variantTextColor: 'var(--warning-text-color)'
                }
            case 'info':
                return {
                    variantColor: 'var(--info-color)',
                    variantColorHover: 'var(--info-color-hover)',
                    variantTextColor: 'var(--info-text-color)'
                }
            case 'dark':
                return {
                    variantColor: 'var(--dark-color)',
                    variantColorHover: 'var(--dark-color-hover)',
                    variantTextColor: 'var(--dark-text-color)'
                }
            case 'light':
                return {
                    variantColor: 'var(--light-color)',
                    variantColorHover: 'var(--light-color-hover)',
                    variantTextColor: 'var(--light-text-color)'
                }
            default:
                console.log('[vuetage]: variant not found, using primary color as default')
                return {
                    variantColor: 'var(--primary-color)',
                    variantColorHover: 'var(--primary-color-hover)',
                    variantTextColor: 'var(--primary-text-color)'
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