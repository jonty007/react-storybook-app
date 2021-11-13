import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Status } from './Status';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Status',
  component: Status,
} as ComponentMeta<typeof Status>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Solved = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Solved.args = {
  content: 'Solved',
};

export const Pending = Template.bind({});
Pending.args = {
  content: 'Pending',
};

