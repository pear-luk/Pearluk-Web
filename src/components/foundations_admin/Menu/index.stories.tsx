import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AdminMenu } from '.';

export default {
  title: 'Foundations_admin/Menu',
  component: AdminMenu,

  argTypes: {},
} as ComponentMeta<typeof AdminMenu>;

const Template: ComponentStory<typeof AdminMenu> = (args) => <AdminMenu {...args} />;

export const EX = Template.bind({});

EX.args = {};
EX.parameters = {
  layout: 'fullscreen',
};
