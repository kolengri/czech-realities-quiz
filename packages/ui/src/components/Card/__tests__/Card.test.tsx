import { mount } from 'enzyme';

import { Card as Component } from '../Card';

test('Card renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="Card"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
