import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  label: 'Button',
};
