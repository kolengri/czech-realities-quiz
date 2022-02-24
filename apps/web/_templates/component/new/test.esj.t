---
to: src/components/<%= h.capitalize(name) %>/__tests__/<%= h.capitalize(name) %>.test.tsx
---

import { mount } from 'enzyme';

import { <%= h.capitalize(name) %> as Component } from '../<%= h.capitalize(name) %>';

test('<%= h.capitalize(name) %> renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="<%= h.capitalize(name) %>"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
