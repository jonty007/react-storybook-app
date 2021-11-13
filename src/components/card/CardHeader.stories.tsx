import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardHeader } from './CardHeader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card/CardHeader',
    component: CardHeader,
} as ComponentMeta<typeof CardHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardHeader> = args => (
    <CardHeader {...args} />
);

export const StackoverflowHeader = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StackoverflowHeader.args = {
    icon: 'StackOverflow',
    likeCount: 66,
    viewCount: 22,
};

export const DiscourseHeader = Template.bind({})
DiscourseHeader.args = {
    icon: 'Discourse',
    likeCount: 66,
    viewCount: 22,
};
