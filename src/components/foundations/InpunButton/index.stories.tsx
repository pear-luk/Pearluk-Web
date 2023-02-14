import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InpunButton } from '.';

export default {
  title: 'Foundations/InpunButton',
  component: InpunButton,
  argTypes: {},
} as ComponentMeta<typeof InpunButton>;

const Template: ComponentStory<typeof InpunButton> = (args) => <InpunButton {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
  type: 'text',
  label_type: 'top',

  button_label: 'BUTTON',
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
