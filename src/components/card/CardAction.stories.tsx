import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardAction } from './CardAction';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card/CardAction',
  component: CardAction,
  parameters: {
    actions: {
      handles: ['click .div'],
    },
  }
} as ComponentMeta<typeof CardAction>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardAction> = (args) => <CardAction {...args} />;

export const Like = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Like.args = {
  action: 'Like',
  counter: 0
};

export const View = Template.bind({});
View.args = {
  action: 'View',
  counter: 12
};

