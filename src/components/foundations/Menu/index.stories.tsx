import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MenuToggle } from '.';

export default {
  title: 'Foundations/Menu',
  component: MenuToggle,

  argTypes: {},
} as ComponentMeta<typeof MenuToggle>;

const Template: ComponentStory<typeof MenuToggle> = (args) => <MenuToggle {...args} />;

export const EX = Template.bind({});

EX.args = {
  menuState: true,
  setMenuState: () => null,
};
EX.parameters = {
  layout: 'fullscreen',
};
