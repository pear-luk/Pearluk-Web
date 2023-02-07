import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderListCard } from '.';
import { orderMock } from '../../../mock/order.mock';

export default {
  title: 'Modules/OrderListCard',
  component: OrderListCard,
  argTypes: {},
} as ComponentMeta<typeof OrderListCard>;

const Template: ComponentStory<typeof OrderListCard> = (args) => <OrderListCard {...args} />;

export const EX = Template.bind({});
EX.args = {
  mode: 'white',
  order: orderMock,
};

EX.parameters = {
  layout: 'fullscreen',
};
