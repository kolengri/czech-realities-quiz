import { ComponentMeta, Story } from '@storybook/react';

import { Favicon as Component, FaviconProps as Props } from './index';

const ComponentStory: ComponentMeta<typeof Component> = {
  args: {
    children: 'Favicon',
  },
  component: Component,
  title: 'Favicon',
};

const Template: Story<Props> = (args) => (
  <div style={{}}>
    <Component {...args} />
  </div>
);

export const Primary = Template.bind({});

export default ComponentStory;
