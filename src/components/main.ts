import type { App } from 'vue'
import 'font-awesome/css/font-awesome.css'
import './style.scss'
import { Spinner, BaseButton, BaseTextField } from '@/components'
export default {
	install: (app: App) => {
		app.component('BaseButton', BaseButton)
		app.component('BaseTextField', BaseTextField)
		app.component('Spinner', Spinner)
	}
}

export { BaseButton, Spinner, BaseTextField }
