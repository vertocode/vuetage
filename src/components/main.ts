import type { App } from 'vue'
import 'font-awesome/css/font-awesome.css'
import './style.scss'
import {
	Spinner,
	BaseButton,
	BaseTextField,
	BaseAutocomplete,
	BaseSelect,
	BaseItem,
	BaseGroup,
	BaseMenu,
	changeTheme
} from '@/components'

export default {
	install: (app: App) => {
		app.component('BaseButton', BaseButton)
		app.component('BaseTextField', BaseTextField)
		app.component('BaseSelect', BaseSelect)
		app.component('BaseAutocomplete', BaseAutocomplete)
		app.component('BaseItem', BaseItem)
		app.component('BaseGroup', BaseGroup)
		app.component('BaseMenu', BaseMenu)
		app.component('Spinner', Spinner)
	}
}

export {
	Spinner,
	BaseButton,
	BaseTextField,
	BaseAutocomplete,
	BaseSelect,
	BaseItem,
	BaseGroup,
	BaseMenu,
	changeTheme
}
