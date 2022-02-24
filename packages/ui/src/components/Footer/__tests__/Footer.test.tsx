import { mount } from 'enzyme';

import { Footer as Component } from '../Footer';

test('Footer renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="Footer"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
