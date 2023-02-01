import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Nav } from '.';

export default {
  title: 'Components/Nav',
  component: Nav,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;
// mode, icon, menuState, setMenuState, ...props
export const MainNoLogo = Template.bind({});
MainNoLogo.args = {
  mode: 'dark',
  icon: {
    logo: true,
    menu: true,
  },
};
