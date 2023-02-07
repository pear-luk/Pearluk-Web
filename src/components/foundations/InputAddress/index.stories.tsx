import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputAddress } from '.';

export default {
  title: 'Foundations/InputAddress',
  component: InputAddress,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputAddress>;

const Template: ComponentStory<typeof InputAddress> = (args) => <InputAddress {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  label_weight: 'bold',
};

TOP.parameters = {
  layout: 'fullscreen',
};
