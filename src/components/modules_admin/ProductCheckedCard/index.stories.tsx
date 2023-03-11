import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductCheckedCard } from '.';
import { productListMock } from '../../../mock/product.mock';

export default {
  title: 'Modules_admin/ProductCheckedCard',
  component: ProductCheckedCard,
  argTypes: {},
} as ComponentMeta<typeof ProductCheckedCard>;

const Template: ComponentStory<typeof ProductCheckedCard> = (args) => <ProductCheckedCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  checkProductList: productListMock.slice(0, 4),
  mode: 'dark',
  storybook: true,
};

TOP.parameters = {
  layout: 'fullscreen',
};
