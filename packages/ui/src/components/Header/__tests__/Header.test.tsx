import { mount } from 'enzyme';

import { Header as Component } from '../Header';

test('Header renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="Header"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
