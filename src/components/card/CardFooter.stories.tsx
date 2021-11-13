import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardFooter } from './CardFooter'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card/CardFooter',
    component: CardFooter,
} as ComponentMeta<typeof CardFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardFooter> = args => (
    <CardFooter {...args} />
);

export const SingleTag = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SingleTag.args = {
    tags: [{ value: '#tag' }],
};

export const MultiTag = Template.bind({})
MultiTag.args = {
    tags: [{ value: '#tag' }, { value: '#tag1' }, { value: '#tag2' }],
};

export const NoTag = Template.bind({})
NoTag.args = {
    tags: [],
};
