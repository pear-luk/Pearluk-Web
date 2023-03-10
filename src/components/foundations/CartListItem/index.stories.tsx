import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CartListItem } from '.';
import { cartProductMock } from '../../../mock/cart.mock';

export default {
  title: 'Foundations/CartListItem',
  component: CartListItem,
  argTypes: {},
} as ComponentMeta<typeof CartListItem>;

const Template: ComponentStory<typeof CartListItem> = (args) => <CartListItem {...args} />;

export const EX = Template.bind({});
EX.args = {
  product: cartProductMock(),

  mode: 'dark',
};

EX.parameters = {
  layout: 'fullscreen',
};
