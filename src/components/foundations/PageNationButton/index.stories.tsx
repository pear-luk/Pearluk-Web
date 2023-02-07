import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageNationBotton } from '.';

export default {
  title: 'Foundations/PageNationBotton',
  component: PageNationBotton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageNationBotton>;

const Template: ComponentStory<typeof PageNationBotton> = (args) => <PageNationBotton {...args} />;

export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
  items: [
    { id: '1', title: '1' },
    { id: '2', title: '2' },
    { id: '3', title: '3' },
    { id: '4', title: '4' },
    { id: '5', title: '5' },
    { id: '6', title: '6' },
    { id: '7', title: '7' },
    { id: '8', title: '8' },
    { id: '9', title: '9' },
    { id: '10', title: '10' },
    { id: '11', title: '11' },
  ],
};

EX.parameters = {
  layout: 'fullscreen',
};
