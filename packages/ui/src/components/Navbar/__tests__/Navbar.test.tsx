import { mount } from 'enzyme';

import { Navbar as Component } from '../Navbar';

test('Navbar renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="Navbar"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
