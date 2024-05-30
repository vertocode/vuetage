import { UserStyleConfig, UserStyleConfigVariables, UserConfig } from '@/typing/Config'


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
        if (style?.textContent === undefined) {
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