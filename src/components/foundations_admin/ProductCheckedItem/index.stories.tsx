import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductCheckedItem } from '.';
import { productMock } from '../../../mock/product.mock';

export default {
  title: 'Foundations_admin/ProductCheckedItem',
  component: ProductCheckedItem,
  argTypes: {},
} as ComponentMeta<typeof ProductCheckedItem>;

const Template: ComponentStory<typeof ProductCheckedItem> = (args) => <ProductCheckedItem {...args} />;

export const EX = Template.bind({});
EX.args = {
  product: productMock(),
  mode: 'white',
};

EX.parameters = {
  layout: 'fullscreen',
};
