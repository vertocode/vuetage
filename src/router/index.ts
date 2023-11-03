import BaseButton from '../components/Button/BaseButton.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: BaseButton
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router