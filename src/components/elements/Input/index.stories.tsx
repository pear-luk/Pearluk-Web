import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputText } from './';

export default {
  title: 'Elements/Input',
  component: InputText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;
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
