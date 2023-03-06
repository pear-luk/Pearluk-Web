import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductListCard_Admin } from '.';
import { cartProductListMock } from '../../../mock/cart.mock';

export default {
  title: 'Modules_admin/ProductListCard_Admin',
  component: ProductListCard_Admin,
  argTypes: {},
} as ComponentMeta<typeof ProductListCard_Admin>;

const Template: ComponentStory<typeof ProductListCard_Admin> = (args) => <ProductListCard_Admin {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  cartProductList: cartProductListMock,
  mode: 'dark',
};

TOP.parameters = {
  layout: 'fullscreen',
};
