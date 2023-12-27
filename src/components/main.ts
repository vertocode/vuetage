import type { App } from 'vue'
import 'font-awesome/css/font-awesome.css'
import './style.scss'
import {
	Spinner,
	BaseButton,
	BaseTextField,
	BaseSelect,
	BaseItem,
	BaseGroup,
	BaseMenu
} from '@/components'

export default {
	install: (app: App) => {
		app.component('BaseButton', BaseButton)
		app.component('BaseTextField', BaseTextField)
		app.component('BaseTextField', BaseSelect)
		app.component('BaseItem', BaseItem)
		app.component('BaseItem', BaseGroup)
		app.component('BaseMenu', BaseMenu)
		app.component('Spinner', Spinner)
	}
}

export { BaseButton, Spinner, BaseTextField }
