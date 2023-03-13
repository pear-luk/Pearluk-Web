import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductEditCard } from '.';
import { archiveLsitMock } from '../../../mock/archive.mock';
import { categoryListMock } from '../../../mock/category.mock';
import { productMock } from '../../../mock/product.mock';

export default {
  title: 'Modules_admin/ProductEditCard',
  component: ProductEditCard,
  argTypes: {},
} as ComponentMeta<typeof ProductEditCard>;

const Template: ComponentStory<typeof ProductEditCard> = (args) => <ProductEditCard {...args} />;

export const EX = Template.bind({});
EX.args = {
  product: productMock(),
  categoryList: categoryListMock,
  archiveList: archiveLsitMock,
  storybook: true,
};

EX.parameters = {
  layout: 'fullscreen',
};
