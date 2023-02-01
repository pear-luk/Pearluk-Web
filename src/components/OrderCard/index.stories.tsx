import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderCard } from '.';

export default {
  title: 'Components/OrderCard',
  component: OrderCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OrderCard>;

const Template: ComponentStory<typeof OrderCard> = (args) => <OrderCard {...args} />;

const products = [
  {
    product_id: 'test',
    name: 'test1',
    price: 99999,
    imgs: ['/imgs/test.svg'],
    count: 999,
  },
  {
    product_id: 'test',
    name: 'test2',
    price: 99999,
    imgs: ['/imgs/test.svg'],
    count: 999,
  },
  {
    product_id: 'test',
    name: 'test3',
    price: 99999,
    imgs: ['/imgs/test.svg'],
    count: 999,
  },
  {
    product_id: 'test',
    name: 'test4',
    price: 99999,
    imgs: ['/imgs/test.svg'],
    count: 999,
  },
];

export const EX = Template.bind({});
EX.args = {
  mode: 'white',
  order_date: new Date(),
  order_id: 'test',
  products,
  orderStatus: '배송중',
};

EX.parameters = {
  layout: 'fullscreen',
};
