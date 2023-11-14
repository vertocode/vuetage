// @vitest-environment happy-dom

import { expect, it } from 'vitest'
import { BaseButton } from '@/components'
import { mount } from '@vue/test-utils'

it('should match content snapshot using default template', async () => {
    const wrapper = mount(BaseButton)
    await expect(wrapper.html()).toMatchFileSnapshot('snapshot/Button/BaseButton')
})