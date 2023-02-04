import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyCard } from '.';

export default {
  title: 'Modules/MyCard',
  component: MyCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyCard>;

const Template: ComponentStory<typeof MyCard> = (args) => <MyCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  mode: 'dark',
};

TOP.parameters = {
  layout: 'fullscreen',
};
