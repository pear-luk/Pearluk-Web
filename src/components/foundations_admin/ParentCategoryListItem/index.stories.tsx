import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ParentCategoryListItem } from '.';
import { categoryMock } from '../../../mock/category.mock';

export default {
  title: 'Foundations_admin/ParentCategoryListItem',
  component: ParentCategoryListItem,
  argTypes: {},
} as ComponentMeta<typeof ParentCategoryListItem>;

const Template: ComponentStory<typeof ParentCategoryListItem> = (args) => <ParentCategoryListItem {...args} />;

export const EX = Template.bind({});
EX.args = {
  category: categoryMock(),
};

EX.parameters = {
  layout: 'fullscreen',
};
