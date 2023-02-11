import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QnAListItem } from '.';
import { questionItem, questionListItemMock } from '../../../mock/question.mock';

export default {
  title: 'Foundations/QnAListItem',
  component: QnAListItem,
  argTypes: {},
} as ComponentMeta<typeof QnAListItem>;

const Template: ComponentStory<typeof QnAListItem> = (args) => <QnAListItem {...args} />;

export const EX_noSecret = Template.bind({});
EX_noSecret.args = {
  question: questionItem(),
};

EX_noSecret.parameters = {
  layout: 'fullscreen',
};

export const EX_Secret = Template.bind({});
EX_Secret.args = {
  question: questionListItemMock(),
};

EX_Secret.parameters = {
  layout: 'fullscreen',
};
