import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderListItem } from '.';

export default {
  title: 'Foundations/OrderListItem',
  component: OrderListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OrderListItem>;

const Template: ComponentStory<typeof OrderListItem> = (args) => <OrderListItem {...args} />;

const product = {
  product_id: 'test',
  name: 'test',
  price: 99999,
  imgs: ['/imgs/test.svg'],
  count: 999,
};

export const EX = Template.bind({});
EX.args = {
  order_id: '01GQFFHHEPPHJC6VQZ5H9SF4YH',
  mode: 'dark',
  product: product,

  orderStatus: '배송중',
};

EX.parameters = {
  layout: 'fullscreen',
};
