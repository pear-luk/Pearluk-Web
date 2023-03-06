import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AdminModal } from '.';

export default {
  title: 'Foundations_admin/AdminModal',
  component: AdminModal,
  argTypes: {},
} as ComponentMeta<typeof AdminModal>;

const Template: ComponentStory<typeof AdminModal> = (args) => <AdminModal {...args} />;
// mode, icon, menuState, setMenuState, ...props
export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
};
EX.parameters = {
  layout: 'fullscreen',
};
