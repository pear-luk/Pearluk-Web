import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductForm } from '.';
import { archiveLsitMock } from '../../../mock/archive.mock';
import { categoryListMock } from '../../../mock/category.mock';

export default {
  title: 'Modules_admin/ProductForm',
  component: ProductForm,
  argTypes: {},
} as ComponentMeta<typeof ProductForm>;

const Template: ComponentStory<typeof ProductForm> = (args) => <ProductForm {...args} />;

export const EX = Template.bind({});
EX.args = {
  categoryList: categoryListMock,
  archiveList: archiveLsitMock,
  storybook: true,
};

EX.parameters = {
  layout: 'fullscreen',
};
