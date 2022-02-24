import { ComponentMeta, Story } from '@storybook/react';

import { Button as Component, ButtonProps as Props } from './index';

const ComponentStory: ComponentMeta<typeof Component> = {
  args: {
    children: 'Button',
  },
  component: Component,
  title: 'Button',
};

const Template: Story<Props> = (args) => (
  <div style={{}}>
    <Component {...args} />
  </div>
);

export const Primary = Template.bind({});

export default ComponentStory;
