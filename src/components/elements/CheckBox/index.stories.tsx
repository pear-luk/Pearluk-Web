import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckBox } from '.';

export default {
  title: 'Elements/CheckBox',
  component: CheckBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  // mode: 'dark',
  // label: '예시',
  // type: 'text',
  // label_type: 'top',
  // label_weight: 'bold',
};

TOP.parameters = {
  layout: 'fullscreen',
};
