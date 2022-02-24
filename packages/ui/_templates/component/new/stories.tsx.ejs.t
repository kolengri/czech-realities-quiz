---
to: src/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.stories.tsx
---
import { ComponentMeta, Story } from '@storybook/react';

import { <%= h.capitalize(name) %> as Component, <%= h.capitalize(name) %>Props as Props } from './index';

const ComponentStory: ComponentMeta<typeof Component> = {
  args: {
    children: '<%= h.capitalize(name) %>',
  },
  component: Component,
  title: '<%= h.capitalize(name) %>',
};

const Template: Story<Props> = (args) => (
  <div style={{}}>
    <Component {...args} />
  </div>
);

export const Primary = Template.bind({});

export default ComponentStory;
