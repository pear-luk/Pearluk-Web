import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyInfoCard } from '.';
import { userWithAddressMock } from '../../../mock/user.mock';

export default {
  title: 'Modules/MyInfoCard',
  component: MyInfoCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyInfoCard>;

const Template: ComponentStory<typeof MyInfoCard> = (args) => <MyInfoCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  mode: 'dark',
  user: userWithAddressMock,
};

TOP.parameters = {
  layout: 'fullscreen',
};
