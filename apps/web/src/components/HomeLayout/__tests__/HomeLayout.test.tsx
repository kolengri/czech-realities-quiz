import { mount } from 'enzyme';

import { HomeLayout as Component } from '../HomeLayout';

test('HomeLayout renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="HomeLayout"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
