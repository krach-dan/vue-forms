import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TestComponent from '../TestComponent.vue'

describe('My First Test', () => {
  it('renders properly', () => {
    const wrapper = mount(TestComponent, { props: { test: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
