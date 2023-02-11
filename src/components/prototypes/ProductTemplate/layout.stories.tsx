import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductTemplate } from '.';
import { productListMock } from '../../../mock/product.mock';
import { questionListItemMock } from '../../../mock/question.mock';

export default {
  title: 'Prototypes/ProductTemplate',
  component: ProductTemplate,

  argTypes: {},
} as ComponentMeta<typeof ProductTemplate>;

const Template: ComponentStory<typeof ProductTemplate> = (args) => <ProductTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  // orders: [orderMock, orderMock, orderMock],
  product: productListMock[0],
  quetionList: Array(5)
    .fill(0)
    .map(() => questionListItemMock()),
};
EX.parameters = {
  layout: 'fullscreen',
};
