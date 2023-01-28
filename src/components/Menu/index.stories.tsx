import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MenuToggle } from '.';


export default {
  title: 'Components/Menu',
  component: MenuToggle,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MenuToggle>;


const Template: ComponentStory<typeof MenuToggle> = (args) => <MenuToggle {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};