import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CategoryForm } from '.';
import { categoryListMock } from '../../../mock/category.mock';

export default {
  title: 'Modules_admin/CategoryForm',
  component: CategoryForm,
  argTypes: {},
} as ComponentMeta<typeof CategoryForm>;

const Template: ComponentStory<typeof CategoryForm> = (args) => <CategoryForm {...args} />;

export const EX = Template.bind({});
EX.args = {
  categoryList: categoryListMock,
  storybook: true,
};

EX.parameters = {
  layout: 'fullscreen',
};
