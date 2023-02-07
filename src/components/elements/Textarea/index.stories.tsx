import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextArea } from '.';

export default {
  title: 'Elements/TextArea',
  component: TextArea,
  argTypes: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;
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
