import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ImgButton } from '.';

export default {
  title: 'Elements/ImgButton',
  component: ImgButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ImgButton>;

const Template: ComponentStory<typeof ImgButton> = (args) => <ImgButton {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const Prev = Template.bind({});
Prev.args = {
  mode: 'dark',
  img: '/item/white_next_mode.svg',
  // label: '예시',
  // type: 'text',
  // label_type: 'top',
  // label_weight: 'bold',
};

Prev.parameters = {
  layout: 'fullscreen',
};

export const Next = Template.bind({});
Next.args = {
  mode: 'dark',
  img: '/item/dark_next_mode.svg',
  // label: '예시',
  // type: 'text',
  // label_type: 'top',
  // label_weight: 'bold',
};

Next.parameters = {
  layout: 'fullscreen',
};
