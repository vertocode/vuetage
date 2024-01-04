// @vitest-environment happy-dom

import { expect, it } from 'vitest'
import { BaseButton } from '@/components'
import { mount } from '@vue/test-utils'

it('should match content snapshot using default template', () => {
	const wrapper = mount(BaseButton)
	expect(wrapper.html()).toMatchSnapshot('__snapshots__/BaseButton.snap')
})

it('should use my label when passed it as slot', () => {
	const label = 'My custom label'
	const wrapper = mount(BaseButton, {
		slots: {
			default: label
		}
	})

	const button = wrapper.find('.base-button')
	expect(button.text()).contains(label)
	expect(wrapper.html()).toMatchSnapshot('__snapshots__/BaseButton.snap')
})

it('should show the button with spinner when the props loading is true', () => {
	const wrapper = mount(BaseButton, {
		props: {
			loading: true
		}
	})

	const spinner = wrapper.find('[data-test-id="spinner"]')
	expect(spinner.exists()).toBe(true)
	expect(wrapper.html()).toMatchSnapshot('__snapshots__/BaseButton.snap')
})

it('should show leftIcon and rightIcon when it is passed as parameter', () => {
	const wrapper = mount(BaseButton, {
		props: {
			leftIcon: 'fa fa-check',
			rightIcon: 'fa fa-whatsapp'
		}
	})

	const leftIcon = wrapper.find('[data-test-id="left-icon"]')
	const rightIcon = wrapper.find('[data-test-id="right-icon"]')
	expect(leftIcon.exists()).toBe(true)
	expect(rightIcon.exists()).toBe(true)
	expect(wrapper.html()).toMatchSnapshot('__snapshots__/BaseButton.snap')
})

it('should have attribute disabled when the disabled props is true', () => {
	const wrapper = mount(BaseButton, {
		props: {
			disabled: true
		}
	})

	const button = wrapper.find('.base-button')
	expect(button.attributes('disabled')).toBe('')
	expect(wrapper.html()).toMatchSnapshot('__snapshots__/BaseButton.snap')
})

it('should be a small button when passed the size as small', () => {
	const wrapper = mount(BaseButton, {
		props: {
			size: 'small'
		}
	})

	const button = wrapper.find('.base-button')
	expect(button.element.classList.contains('btn-small')).toBe(true)
	expect(wrapper.html()).toMatchSnapshot('__snapshots__/BaseButton.snap')
})

it('should be a medium button when passed the size as medium', () => {
	const wrapper = mount(BaseButton, {
		props: {
			size: 'medium'
		}
	})

	const button = wrapper.find('.base-button')
	expect(button.element.classList.contains('btn-medium')).toBe(true)
	expect(wrapper.html()).toMatchSnapshot('__snapshots__/BaseButton.snap')
})

it('should be a large button when passed the size as large', () => {
	const wrapper = mount(BaseButton, {
		props: {
			size: 'large'
		}
	})

	const button = wrapper.find('.base-button')
	expect(button.element.classList.contains('btn-large')).toBe(true)
	expect(wrapper.html()).toMatchSnapshot('__snapshots__/BaseButton.snap')
})