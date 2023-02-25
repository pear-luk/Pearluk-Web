import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QnADeatailTemplate } from '.';
import { questionDetailMock } from '../../../mock/question.mock';
export default {
  title: 'Prototypes/QnADeatailTemplate',
  component: QnADeatailTemplate,

  argTypes: {},
} as ComponentMeta<typeof QnADeatailTemplate>;

const Template: ComponentStory<typeof QnADeatailTemplate> = (args) => <QnADeatailTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  question: questionDetailMock(),
};
EX.parameters = {
  layout: 'fullscreen',
};
