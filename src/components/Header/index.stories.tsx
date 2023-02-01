import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const EX = Template.bind({});
EX.args = {
  label: 'MY ORDER',
};

EX.parameters = {
  layout: 'fullscreen',
};
