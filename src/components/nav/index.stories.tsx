import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavMain } from './Main';

export default {
  title: 'Components/Nav',
  component: NavMain,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavMain>;

const Template: ComponentStory<typeof NavMain> = (args) => <NavMain {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
};

export const e = Template.bind({});
Primary.args = {
  // primary: true,
};
