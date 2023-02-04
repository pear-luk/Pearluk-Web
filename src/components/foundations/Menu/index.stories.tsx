import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MenuToggle } from '.';

export default {
  title: 'Foundations/Menu',
  component: MenuToggle,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MenuToggle>;

const Template: ComponentStory<typeof MenuToggle> = (args) => <MenuToggle {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  mode: 'dark',
  menuState: true,
};
