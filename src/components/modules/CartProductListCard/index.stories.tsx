import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CartProductListCard } from '.';
import { cartProductListMock } from '../../../mock/cart.mock';

export default {
  title: 'Modules/CartProductListCard',
  component: CartProductListCard,
  argTypes: {},
} as ComponentMeta<typeof CartProductListCard>;

const Template: ComponentStory<typeof CartProductListCard> = (args) => <CartProductListCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  cartProductList: cartProductListMock,
  mode: 'dark',
};

TOP.parameters = {
  layout: 'fullscreen',
};
