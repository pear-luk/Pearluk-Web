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

export const EX = Template.bind({});
EX.args = {
  orderId: '01GQFFHHEPPHJC6VQZ5H9SF4YH',
  mode: 'dark',

  productName: 'pearluk ring',
  productsCount: 1,
  price: 99999999,
  oderStatus: '배송중',
  mainProductImg: '/imgs/test.jpg',
};

EX.parameters = {
  layout: 'fullscreen',
};
