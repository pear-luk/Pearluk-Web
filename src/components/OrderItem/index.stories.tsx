import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderItem } from '.';

export default {
  title: 'Components/OrderItem',
  component: OrderItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OrderItem>;

const Template: ComponentStory<typeof OrderItem> = (args) => <OrderItem {...args} />;

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
