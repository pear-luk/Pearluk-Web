import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CartListItem } from '.';
import { orderProductMock } from '../../../mock/order.mock';

export default {
  title: 'Foundations/CartListItem',
  component: CartListItem,
  argTypes: {},
} as ComponentMeta<typeof CartListItem>;

const Template: ComponentStory<typeof CartListItem> = (args) => <CartListItem {...args} />;

export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
  product: orderProductMock(),
};

EX.parameters = {
  layout: 'fullscreen',
};
