import type { App } from 'vue'
import { Spinner, BaseButton, BaseTextField } from '@/components'
export default {
	install: (app: App) => {
		app.component('BaseButton', BaseButton)
		app.component('BaseTextField', BaseTextField)
		app.component('Spinner', Spinner)
	}
}

export { BaseButton, Spinner }
