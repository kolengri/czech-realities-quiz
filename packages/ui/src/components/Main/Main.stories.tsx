import { ComponentMeta, Story } from '@storybook/react';

import { Main as Component, MainProps as Props } from './index';

const ComponentStory: ComponentMeta<typeof Component> = {
  args: {
    children: 'Main',
  },
  component: Component,
  title: 'Main',
};

const Template: Story<Props> = (args) => (
  <div style={{}}>
    <Component {...args} />
  </div>
);

export const Primary = Template.bind({});

export default ComponentStory;
