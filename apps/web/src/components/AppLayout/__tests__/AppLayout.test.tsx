import { mount } from 'enzyme';

import { AppLayout as Component } from '../AppLayout';

test('AppLayout renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="AppLayout"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
