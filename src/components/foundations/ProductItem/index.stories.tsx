import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductItem } from '.';
import { productListMock } from '../../../mock/product.mock';

export default {
  title: 'Foundations/ProductItem',
  component: ProductItem,
  argTypes: {},
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />;

export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
  product: productListMock[0],
  slide: false,
};

EX.parameters = {
  layout: 'fullscreen',
};
