import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '.';

export default {
  title: 'Foundations/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
// mode, icon, menuState, setMenuState, ...props
export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
  centerLogo: true,
  menu: true,
};
EX.parameters = {
  layout: 'fullscreen',
};
