import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Foundations/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const EX = Template.bind({});
EX.args = {
  label: 'MY ORDER',
};

EX.parameters = {
  layout: 'fullscreen',
};
