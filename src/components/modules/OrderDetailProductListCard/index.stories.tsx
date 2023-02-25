import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderDetailProductListCard } from '.';
import { orderMock } from '../../../mock/order.mock';

export default {
  title: 'Modules/OrderDetailProductListCard',
  component: OrderDetailProductListCard,
  argTypes: {},
} as ComponentMeta<typeof OrderDetailProductListCard>;

const Template: ComponentStory<typeof OrderDetailProductListCard> = (args) => <OrderDetailProductListCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  mode: 'dark',
  order: orderMock,
};

TOP.parameters = {
  layout: 'fullscreen',
};
