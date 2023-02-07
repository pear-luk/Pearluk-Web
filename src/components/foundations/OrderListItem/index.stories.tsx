import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderListItem } from '.';
import { orderProductMock, orderShippingMock } from '../../../mock/order.mock';

export default {
  title: 'Foundations/OrderListItem',
  component: OrderListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OrderListItem>;

const Template: ComponentStory<typeof OrderListItem> = (args) => <OrderListItem {...args} />;

export const NoShipping = Template.bind({});
NoShipping.args = {
  mode: 'dark',
  product: orderProductMock(),

  order_status: '준비중',
};

NoShipping.parameters = {
  layout: 'fullscreen',
};
export const Shipping = Template.bind({});
Shipping.args = {
  mode: 'dark',
  product: orderProductMock(),
  shipping: orderShippingMock,
  order_status: '배송중',
};

Shipping.parameters = {
  layout: 'fullscreen',
};
