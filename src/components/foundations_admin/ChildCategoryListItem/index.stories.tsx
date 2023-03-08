import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChildCategoryListItemAdmin } from '.';
import { childCategoryMock } from '../../../mock/category.mock';

export default {
  title: 'Foundations_admin/ChildCategoryListItemAdmin',
  component: ChildCategoryListItemAdmin,
  argTypes: {},
} as ComponentMeta<typeof ChildCategoryListItemAdmin>;

const Template: ComponentStory<typeof ChildCategoryListItemAdmin> = (args) => <ChildCategoryListItemAdmin {...args} />;

export const EX = Template.bind({});
EX.args = {
  category: childCategoryMock(),
};

EX.parameters = {
  layout: 'fullscreen',
};
