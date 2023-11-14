// @vitest-environment happy-dom

import { expect, it } from 'vitest'
import { Spinner } from '@/components'
import { mount } from '@vue/test-utils'

it('should match content snapshot using default template', () => {
	const wrapper = mount(Spinner)
	expect(wrapper.html()).toMatchSnapshot('__snapshots__/Spinner.snap')
})