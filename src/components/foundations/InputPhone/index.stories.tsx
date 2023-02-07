import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputPhone } from '.';

export default {
  title: 'Foundations/InputPhone',
  component: InputPhone,
  argTypes: {},
} as ComponentMeta<typeof InputPhone>;

const Template: ComponentStory<typeof InputPhone> = (args) => <InputPhone {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
  label: '예시',

  label_type: 'top',

  label_weight: 'bold',
};

EX.parameters = {
  layout: 'fullscreen',
};
