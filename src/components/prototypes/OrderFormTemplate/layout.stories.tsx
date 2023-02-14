import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderFormTemplate } from '.';

export default {
  title: 'Prototypes/OrderFormTemplate',
  component: OrderFormTemplate,

  argTypes: {},
} as ComponentMeta<typeof OrderFormTemplate>;

const Template: ComponentStory<typeof OrderFormTemplate> = (args) => <OrderFormTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {};
EX.parameters = {
  layout: 'fullscreen',
};
