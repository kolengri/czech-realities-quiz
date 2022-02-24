import { mount } from 'enzyme';

import { Main as Component } from '../Main';

test('Main renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="Main"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
