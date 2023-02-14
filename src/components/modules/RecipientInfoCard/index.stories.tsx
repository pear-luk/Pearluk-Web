import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecipientInfoCard } from '.';

export default {
  title: 'Modules/RecipientInfoCard',
  component: RecipientInfoCard,
  argTypes: {},
} as ComponentMeta<typeof RecipientInfoCard>;

const Template: ComponentStory<typeof RecipientInfoCard> = (args) => <RecipientInfoCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  mode: 'dark',
};

TOP.parameters = {
  layout: 'fullscreen',
};
