import { Component } from 'vue'
import { createLocalVue, mount } from '@vue/test-utils'

export async function baseMount(component: Component, options = {}, shallow = false) {
    const localVue = createLocalVue()
    const params = {
        localVue
    }

    const wrapper = mount(component)
}