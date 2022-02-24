import { ComponentMeta, Story } from '@storybook/react';

import { Header as Component, HeaderProps as Props } from './index';

const ComponentStory: ComponentMeta<typeof Component> = {
  args: {
    children: 'Header',
  },
  component: Component,
  title: 'Header',
};

const Template: Story<Props> = (args) => (
  <div style={{}}>
    <Component {...args} />
  </div>
);

export const Primary = Template.bind({});

export default ComponentStory;
