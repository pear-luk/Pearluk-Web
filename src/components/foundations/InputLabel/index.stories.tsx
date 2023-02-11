import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputLabel } from '.';

export default {
  title: 'Foundations/InputLabel',
  component: InputLabel,
  argTypes: {},
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args) => <InputLabel {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
  label: '예시',
  type: 'text',
  label_type: 'top',

  label_weight: 'bold',
};

EX.parameters = {
  layout: 'fullscreen',
};

// export const LEFT = Template.bind({});
// LEFT.args = {
//   mode: 'dark',

//   label: '예시',
//   type: 'text',
//   label_type: 'top',
//   label_weight: 'bold',
// };

// LEFT.parameters = {

// };

// export const RIGHT = Template.bind({});
// RIGHT.args = {
//   mode: 'dark',

//   label: '예시',
//   type: 'text',
//   label_type: 'top',
//   label_weight: 'bold',
// };
