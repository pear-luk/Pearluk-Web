import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputText } from '.';

export default {
  title: 'Elements/InputText',
  component: InputText,
  argTypes: {},
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  mode: 'dark',

  type: 'text',
};

TOP.parameters = {
  layout: 'fullscreen',
};
