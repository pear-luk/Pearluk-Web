import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductItem } from '.';

export default {
  title: 'Foundations/ProductItem',
  component: ProductItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />;

export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
  product_id: '01GQM00TB1ENRKDW06E994CZ4R',
  product_name: '흑기사의 전리품이다',
  price: 9999999,
  images: [
    '/imgs/test1.png',
    '/imgs/test2.png',
    '/imgs/test3.png',
    '/imgs/test4.png',
    '/imgs/test5.png',
    '/imgs/test6.png',
    '/imgs/test7.png',
    '/imgs/test8.png',
    '/imgs/test9.png',
    '/imgs/test10.png',
  ],

  slide: false,
};

EX.parameters = {
  layout: 'fullscreen',
};
