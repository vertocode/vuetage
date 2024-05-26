import path from "path";
import fs from "fs";

export const getSCSSVariables = (configPath: string) => {
    const userConfigPath = path.resolve(__dirname, configPath)
    let userConfig = {}
    if (fs.existsSync(userConfigPath)) {
        console.log('[vuetage] using your config file')
        userConfig = require(userConfigPath)
        console.log(userConfig)
    } else {
        console.log('[vuetage] not found your config file, using default config of vuetage')
    }

    const scssVariables = Object.entries(userConfig)
        .map(([key, value]) => `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
        .join('\n')

    return `:root { ${scssVariables} }`
}

export const vuetagePlugin = async (configPath: string = 'vuetage.js') => {
    if (document) {
        const scssVariables = getSCSSVariables(configPath)

        const style = document.createElement('style')
        style.textContent = scssVariables
        document.head.appendChild(style)
    } else {
        console.error('[vuetage] document is not defined')
    }
}