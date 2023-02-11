import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArchiveTemplate } from '.';
import { productListMock } from '../../../mock/product.mock';

export default {
  title: 'Prototypes/ArchiveTemplate',
  component: ArchiveTemplate,

  argTypes: {},
} as ComponentMeta<typeof ArchiveTemplate>;

const Template: ComponentStory<typeof ArchiveTemplate> = (args) => <ArchiveTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  mode: 'dark',
  totalCount: 1000,
  productList: productListMock,
};
EX.parameters = {
  layout: 'fullscreen',
};
