import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderListCard } from '.';

export default {
  title: 'Modules/OrderListCard',
  component: OrderListCard,
  argTypes: {},
} as ComponentMeta<typeof OrderListCard>;

const Template: ComponentStory<typeof OrderListCard> = (args) => <OrderListCard {...args} />;

export const EX = Template.bind({});
EX.args = {
  mode: 'white',
};

EX.parameters = {
  layout: 'fullscreen',
};
