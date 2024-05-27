interface UserStyleConfigVariables {
    base_color?: string
    label_color?: string
    error_color?: string
    disabled_color?: string
    active_text_color?: string
    size_tiny_1x?: string
    size_tiny_2x?: string
    size_tiny_3x?: string
    size_small_1x?: string
    size_small_2x?: string
    size_small_3x?: string
    size_medium_1x?: string
    size_medium_2x?: string
    size_medium_3x?: string
    size_medium_4x?: string
    size_large_1x?: string
    size_large_2x?: string
    size_large_3x?: string
    dark_base_color?: string
    dark_label_color?: string
    dark_error_color?: string
    dark_disabled_color?: string
    primary_color?: string
    primary_color_hover?: string
    border_primary?: string
    border_primary_hover?: string
    success?: string
    border_success?: string
    success_hover?: string
    border_success_hover?: string
    danger?: string
    border_danger?: string
    danger_hover?: string
    border_danger_hover?: string
    dark?: string
    border_dark?: string
    dark_color?: string
    dark_hover?: string
    border_dark_hover?: string
    outline_primary?: string
    outline_primary_color?: string
    border_outline_primary?: string
    outline_primary_hover?: string
    outline_primary_color_hover?: string
    outline_success?: string
    outline_success_color?: string
    border_outline_success?: string
    outline_success_hover?: string
    outline_success_color_hover?: string
    outline_danger?: string
    border_outline_danger?: string
    outline_danger_color?: string
    outline_danger_hover?: string
    outline_danger_color_hover?: string
    outline_dark?: string
    border_outline_dark?: string
    outline_dark_color?: string
    outline_dark_hover?: string
    outline_dark_color_hover?: string
}

interface UserStyleConfig {
    variables?: UserStyleConfigVariables
}

interface UserConfig {
    theme?: UserStyleConfig
}

export const getSCSSVariables = (userStyleConfig: UserStyleConfigVariables) => {
    if (!userStyleConfig) {
        console.error('[Vuetage] No user style config found.')
        return ''
    }
    const scssVariables = Object.entries(userStyleConfig)
        .map(([key, value]) => `--${key.replaceAll('_', '-').replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
        .join('\n')

    return `:root { ${scssVariables} }`
}

export const changeTheme = (userStyleConfig: UserStyleConfig) => {
    if (userStyleConfig?.variables) {
        const scssVariables = getSCSSVariables(userStyleConfig.variables)

        const style = document?.createElement('style')
        if (!style?.textContent) {
            console.error('[Vuetage] No style found.')
            return
        }
        style.textContent = scssVariables
        document.head.appendChild(style)
    }
}

export const defineVuetageConfig = async (userConfig: UserConfig) => {
    if (userConfig?.theme) {
        changeTheme(userConfig.theme)
    }
}