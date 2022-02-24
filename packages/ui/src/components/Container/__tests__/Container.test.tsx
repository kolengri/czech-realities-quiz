import { mount } from 'enzyme';

import { Container as Component } from '../Container';

test('Container renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="Container"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
