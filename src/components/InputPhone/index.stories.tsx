import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputPhone } from '.';

export default {
  title: 'Components/InputPhone',
  component: InputPhone,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputPhone>;

const Template: ComponentStory<typeof InputPhone> = (args) => <InputPhone {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  mode: 'dark',
  label: '예시',
  type: 'text',
  label_type: 'top',

  label_weight: 'bold',
};

TOP.parameters = {
  layout: 'fullscreen',
};
