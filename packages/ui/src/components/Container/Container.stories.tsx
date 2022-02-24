import { ComponentMeta, Story } from '@storybook/react';

import { Container as Component, ContainerProps as Props } from './index';

const ComponentStory: ComponentMeta<typeof Component> = {
  args: {
    children: 'Container',
  },
  component: Component,
  title: 'Container',
};

const Template: Story<Props> = (args) => (
  <div style={{}}>
    <Component {...args} />
  </div>
);

export const Primary = Template.bind({});

export default ComponentStory;
