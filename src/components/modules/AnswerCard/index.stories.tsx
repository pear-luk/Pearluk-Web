import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AnswerCard } from '.';
import { answerMock } from '../../../mock/question.mock';

export default {
  title: 'Modules/AnswerCard',
  component: AnswerCard,
  argTypes: {},
} as ComponentMeta<typeof AnswerCard>;

const Template: ComponentStory<typeof AnswerCard> = (args) => <AnswerCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  answer: answerMock(),
  mode: 'dark',
};

TOP.parameters = {
  layout: 'fullscreen',
};
