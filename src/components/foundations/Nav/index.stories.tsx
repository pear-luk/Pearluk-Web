import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Nav } from '.';

export default {
  title: 'Foundations/Nav',
  component: Nav,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;
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
