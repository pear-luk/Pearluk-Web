import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderFormListCard } from '.';
import { orderProductListMock } from '../../../mock/order.mock';

export default {
  title: 'Modules/OrderFormListCard',
  component: OrderFormListCard,
  argTypes: {},
} as ComponentMeta<typeof OrderFormListCard>;

const Template: ComponentStory<typeof OrderFormListCard> = (args) => <OrderFormListCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  productList: orderProductListMock,
  mode: 'dark',
};

TOP.parameters = {
  layout: 'fullscreen',
};
