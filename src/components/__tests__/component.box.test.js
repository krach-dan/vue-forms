import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Box from '../Box.vue';

describe('Box', () => {
  it('renders green box for index >= 5', () => {
    const wrapper = mount(Box, {
      props: { index: 5 }
    });

    expect(wrapper.find('.bgGreen').exists()).toBe(true);
  });

  it('renders yellow box for 3 <= index < 5', () => {
    const wrapper = mount(Box, {
      props: { index: 4 }
    });

    expect(wrapper.find('.bgYellow').exists()).toBe(true);
  });

  it('renders red box for index < 3', () => {
    const wrapper = mount(Box, {
      props: { index: 2 }
    });

    expect(wrapper.find('.bgRed').exists()).toBe(true);
  });

  it('logs "Box mounted" on mount', () => {
    const consoleSpy = vi.spyOn(console, 'info');
    mount(Box, { props: { index: 2 } });

    expect(consoleSpy).toHaveBeenCalledWith("Box mounted");
  });

  it('logs "Box unmounted" on unmount', () => {
    const consoleSpy = vi.spyOn(console, 'info');
    const wrapper = mount(Box, { props: { index: 2 } });
    wrapper.unmount();

    expect(consoleSpy).toHaveBeenCalledWith("Box unmounted");
  });
});