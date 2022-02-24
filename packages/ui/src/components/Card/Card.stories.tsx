import { ComponentMeta, Story } from '@storybook/react';

import { Card as Component, CardProps as Props } from './index';

const ComponentStory: ComponentMeta<typeof Component> = {
  args: {
    children: 'Card',
  },
  component: Component,
  title: 'Card',
};

const Template: Story<Props> = (args) => (
  <div style={{}}>
    <Component {...args} />
  </div>
);

export const Primary = Template.bind({});

export default ComponentStory;
