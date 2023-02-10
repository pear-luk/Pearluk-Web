import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyInfoCard } from '.';

export default {
  title: 'Modules/MyInfoCard',
  component: MyInfoCard,
  argTypes: {},
} as ComponentMeta<typeof MyInfoCard>;

const Template: ComponentStory<typeof MyInfoCard> = (args) => <MyInfoCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  mode: 'dark',
};

TOP.parameters = {
  layout: 'fullscreen',
};
