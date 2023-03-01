import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductDetail from './[product_id]';

export default {
  title: 'PAGE/ProductDetail',
  component: ProductDetail,

  argTypes: {},
} as ComponentMeta<typeof ProductDetail>;

const Template: ComponentStory<typeof ProductDetail> = () => <ProductDetail />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.parameters = {
  layout: 'fullscreen',
  nextRouter: {
    pathname: '/products/:product_id',
    query: { product_id: '01GRY705H0FP9AE3N8TKFPBHPH' },
  },
};
