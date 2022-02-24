import { ComponentMeta, Story } from '@storybook/react';

import { Navbar as Component, NavbarProps as Props } from './index';

const ComponentStory: ComponentMeta<typeof Component> = {
  args: {
    children: 'Navbar',
  },
  component: Component,
  title: 'Navbar',
};

const Template: Story<Props> = (args) => (
  <div style={{}}>
    <Component {...args} />
  </div>
);

export const Primary = Template.bind({});

export default ComponentStory;
