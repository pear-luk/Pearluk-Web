import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductListItem_Admin } from '.';
import { productMock } from '../../../mock/product.mock';

export default {
  title: 'Foundations_admin/ProductListItem_Admin',
  component: ProductListItem_Admin,
  argTypes: {},
} as ComponentMeta<typeof ProductListItem_Admin>;

const Template: ComponentStory<typeof ProductListItem_Admin> = (args) => <ProductListItem_Admin {...args} />;

export const EX = Template.bind({});
EX.args = {
  product: productMock(),
  mode: 'white',
};

EX.parameters = {
  layout: 'fullscreen',
};
