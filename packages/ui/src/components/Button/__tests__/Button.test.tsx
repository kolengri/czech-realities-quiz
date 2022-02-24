import { mount } from 'enzyme';

import { Button as Component } from '../Button';

test('Button renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="Button"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
