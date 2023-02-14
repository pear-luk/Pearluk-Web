import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderFormTemplate } from '.';
import { cartProductListMock } from '../../../mock/cart.mock';
import { userWithAddressMock } from '../../../mock/user.mock';

export default {
  title: 'Prototypes/OrderFormTemplate',
  component: OrderFormTemplate,

  argTypes: {},
} as ComponentMeta<typeof OrderFormTemplate>;

const Template: ComponentStory<typeof OrderFormTemplate> = (args) => <OrderFormTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  cartProductList: cartProductListMock,
  user: userWithAddressMock,
};

EX.parameters = {
  layout: 'fullscreen',
};
