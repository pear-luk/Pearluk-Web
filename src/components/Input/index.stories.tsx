import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputCustom } from '.';

export default {
  title: 'Components/Input',
  component: InputCustom,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputCustom>;

const Template: ComponentStory<typeof InputCustom> = (args) => <InputCustom {...args} />;
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

// export const LEFT = Template.bind({});
// LEFT.args = {
//   mode: 'dark',

//   label: '예시',
//   type: 'text',
//   label_type: 'top',
//   label_weight: 'bold',
// };

// LEFT.parameters = {
//   layout: 'fullscreen',
// };

// export const RIGHT = Template.bind({});
// RIGHT.args = {
//   mode: 'dark',

//   label: '예시',
//   type: 'text',
//   label_type: 'top',
//   label_weight: 'bold',
// };

// RIGHT.parameters = {
//   layout: 'fullscreen',
// };
