import type { App } from 'vue';
import { Spinner, BaseButton } from '@/components'
export default {
  install: (app: App) => {
    app.component('BaseButton', BaseButton)
    app.component('Spinner', Spinner)
  }
}

export { BaseButton, Spinner }
