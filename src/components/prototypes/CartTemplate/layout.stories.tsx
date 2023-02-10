import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CartTemplate } from '.';

export default {
  title: 'Prototypes/CartTemplate',
  component: CartTemplate,

  argTypes: {},
} as ComponentMeta<typeof CartTemplate>;

const Template: ComponentStory<typeof CartTemplate> = (args) => <CartTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  // orders: [orderMock, orderMock, orderMock],
};
EX.parameters = {
  layout: 'fullscreen',
};
