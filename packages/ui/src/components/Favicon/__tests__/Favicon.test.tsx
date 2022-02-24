import { mount } from 'enzyme';

import { Favicon as Component } from '../Favicon';

test('Favicon renders properly', () => {
  const component = mount(<Component />);
  const element = component.exists('[data-testid="Favicon"]');
  expect(element).toBeTruthy();
  expect(component.debug()).toMatchSnapshot();
});
