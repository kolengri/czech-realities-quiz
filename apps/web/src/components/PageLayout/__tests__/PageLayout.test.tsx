import { mount } from 'enzyme';

import { PageLayout as Component } from '../PageLayout';

test('PageLayout renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="PageLayout"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
