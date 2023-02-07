import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QnAForm } from '.';

export default {
  title: 'Modules/QnAForm',
  component: QnAForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof QnAForm>;

const Template: ComponentStory<typeof QnAForm> = (args) => <QnAForm {...args} />;

export const EX = Template.bind({});
EX.args = {};

EX.parameters = {
  layout: 'fullscreen',
};
