import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyTemplate } from '.';

export default {
  title: 'Prototypes/MyTemplate',
  component: MyTemplate,

  argTypes: {},
} as ComponentMeta<typeof MyTemplate>;

const Template: ComponentStory<typeof MyTemplate> = (args) => <MyTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  // orders: [orderMock, orderMock, orderMock],
};
EX.parameters = {
  MyTemplate: 'fullscreen',
};
