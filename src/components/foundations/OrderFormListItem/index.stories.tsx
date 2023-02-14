import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderFormListItem } from '.';
import { cartProductMock } from '../../../mock/cart.mock';

export default {
  title: 'Foundations/OrderFormListItem',
  component: OrderFormListItem,
  argTypes: {},
} as ComponentMeta<typeof OrderFormListItem>;

const Template: ComponentStory<typeof OrderFormListItem> = (args) => <OrderFormListItem {...args} />;

export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
  product: cartProductMock(),
};

EX.parameters = {
  layout: 'fullscreen',
};
