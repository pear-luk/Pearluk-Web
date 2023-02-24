import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QnAFormTemplate } from '.';
export default {
  title: 'Prototypes/QnAFormTemplate',
  component: QnAFormTemplate,

  argTypes: {},
} as ComponentMeta<typeof QnAFormTemplate>;

const Template: ComponentStory<typeof QnAFormTemplate> = (args) => <QnAFormTemplate {...args} />;

export const EX = Template.bind({});
EX.args = {
  // questions: Array(100).fill(questionListItemMock()),
};
EX.parameters = {
  layout: 'fullscreen',
};
