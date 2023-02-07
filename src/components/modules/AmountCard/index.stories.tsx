import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AmountCard } from '.';

export default {
  title: 'Modules/AmountCard',
  component: AmountCard,
  argTypes: {},
} as ComponentMeta<typeof AmountCard>;

const Template: ComponentStory<typeof AmountCard> = (args) => <AmountCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  mode: 'dark',
};

TOP.parameters = {
  layout: 'fullscreen',
};
