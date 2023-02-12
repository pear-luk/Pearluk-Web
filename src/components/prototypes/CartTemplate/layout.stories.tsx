import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CartTemplate } from '.';
import { cartProductListMock } from '../../../mock/cart.mock';

export default {
  title: 'Prototypes/CartTemplate',
  component: CartTemplate,

  argTypes: {},
} as ComponentMeta<typeof CartTemplate>;

const Template: ComponentStory<typeof CartTemplate> = (args) => <CartTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  cartProductList: cartProductListMock,
  // orders: [orderMock, orderMock, orderMock],
};
EX.parameters = {
  layout: 'fullscreen',
};
