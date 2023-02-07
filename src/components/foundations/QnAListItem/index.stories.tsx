import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QnAListItem } from '.';
import {
  questionListItemMock_NoSecret_NoProduct,
  questionListItemMock_Secret_NoProduct,
} from '../../../mock/question.mock';

export default {
  title: 'Foundations/QnAListItem',
  component: QnAListItem,
  argTypes: {},
} as ComponentMeta<typeof QnAListItem>;

const Template: ComponentStory<typeof QnAListItem> = (args) => <QnAListItem {...args} />;

export const EX_noSecret = Template.bind({});
EX_noSecret.args = {
  qustion: questionListItemMock_NoSecret_NoProduct,
};

EX_noSecret.parameters = {
  layout: 'fullscreen',
};

export const EX_Secret = Template.bind({});
EX_Secret.args = {
  qustion: questionListItemMock_Secret_NoProduct,
};

EX_Secret.parameters = {
  layout: 'fullscreen',
};
