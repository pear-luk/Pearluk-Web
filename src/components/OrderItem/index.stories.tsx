import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderItem } from '.';

export default {
  title: 'Components/OrderItem',
  component: OrderItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OrderItem>;

const Template: ComponentStory<typeof OrderItem> = (args) => <OrderItem {...args} />;

export const EX = Template.bind({});
EX.args = {
  orderId: '01GQFFHHEPPHJC6VQZ5H9SF4YH',
};

EX.parameters = {
  layout: 'fullscreen',
};
