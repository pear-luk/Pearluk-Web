import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomerInfoCard } from '.';

export default {
  title: 'Modules/CustomerInfoCard',
  component: CustomerInfoCard,
  argTypes: {},
} as ComponentMeta<typeof CustomerInfoCard>;

const Template: ComponentStory<typeof CustomerInfoCard> = (args) => <CustomerInfoCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  mode: 'dark',
};

TOP.parameters = {
  layout: 'fullscreen',
};
