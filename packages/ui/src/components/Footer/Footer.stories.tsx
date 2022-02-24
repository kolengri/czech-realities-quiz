import { ComponentMeta, Story } from '@storybook/react';

import { Footer as Component, FooterProps as Props } from './index';

const ComponentStory: ComponentMeta<typeof Component> = {
  args: {
    children: 'Footer',
  },
  component: Component,
  title: 'Footer',
};

const Template: Story<Props> = (args) => (
  <div style={{}}>
    <Component {...args} />
  </div>
);

export const Primary = Template.bind({});

export default ComponentStory;
