import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import { AdminLayout } from './AdminLayout';

export default {
  title: 'layout/AdminLayout',
  component: AdminLayout,

  argTypes: {},
} as ComponentMeta<typeof AdminLayout>;

const Template: ComponentStory<typeof AdminLayout> = (args) => <AdminLayout {...args} />;

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
