import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AdminArchiveTemplate } from '.';
import { archiveLsitMock } from '../../../mock/archive.mock';
import { categoryListMock } from '../../../mock/category.mock';
import { productListMock } from '../../../mock/product.mock';
export default {
  title: 'Prototypes_admin/AdminArchiveTemplate',
  component: AdminArchiveTemplate,

  argTypes: {},
} as ComponentMeta<typeof AdminArchiveTemplate>;

const Template: ComponentStory<typeof AdminArchiveTemplate> = (args) => <AdminArchiveTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  archiveList: archiveLsitMock,
  categoryList: categoryListMock,
  productList: productListMock,
};
EX.parameters = {
  layout: 'fullscreen',
};
