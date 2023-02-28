import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import { LayOut } from './layout';

export default {
  title: 'LAYOUT/layout',
  component: LayOut,

  argTypes: {},
} as ComponentMeta<typeof LayOut>;

const Template: ComponentStory<typeof LayOut> = (args) => <LayOut {...args} />;

const Contents = styled.div`
  width: 100%;
  background-color: red;
  height: 100vh;
`;
export const Medium = Template.bind({});

Medium.args = {
  children: <Contents />,
};
Medium.parameters = {
  layout: 'fullscreen',
};

export const Large = Template.bind({});

Large.args = {
  contentSize: 'large',
  children: <Contents />,
};
Large.parameters = {
  layout: 'fullscreen',
};
