import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyTemplate } from '.';
import { orderMock } from '../../../mock/order.mock';

export default {
  title: 'Prototypes/MyTemplate',
  component: MyTemplate,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyTemplate>;

const Template: ComponentStory<typeof MyTemplate> = (args) => <MyTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  orders: [orderMock, orderMock, orderMock],
};
EX.parameters = {
  MyTemplate: 'fullscreen',
};
