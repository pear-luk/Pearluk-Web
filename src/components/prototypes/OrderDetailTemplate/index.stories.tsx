import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderDetailTemplate } from '.';
import { orderMock } from '../../../mock/order.mock';
import { userWithAddressMock } from '../../../mock/user.mock';

export default {
  title: 'Prototypes/OrderDetailTemplate',
  component: OrderDetailTemplate,

  argTypes: {},
} as ComponentMeta<typeof OrderDetailTemplate>;

const Template: ComponentStory<typeof OrderDetailTemplate> = (args) => <OrderDetailTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  order: orderMock,
  user: userWithAddressMock,
};

EX.parameters = {
  layout: 'fullscreen',
};
