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

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
};
