import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AdminCategoryListCard } from '.';
import { categoryListMock } from '../../../mock/category.mock';

export default {
  title: 'Modules_admin/AdminCategoryListCard',
  component: AdminCategoryListCard,
  argTypes: {},
} as ComponentMeta<typeof AdminCategoryListCard>;

const Template: ComponentStory<typeof AdminCategoryListCard> = (args) => <AdminCategoryListCard {...args} />;

export const EX = Template.bind({});
EX.args = {
  categoryList: categoryListMock,
};

EX.parameters = {
  layout: 'fullscreen',
};
