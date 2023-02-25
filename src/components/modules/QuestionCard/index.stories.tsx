import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QuestionCard } from '.';
import { questionDetailMock } from '../../../mock/question.mock';

export default {
  title: 'Modules/QuestionCard',
  component: QuestionCard,
  argTypes: {},
} as ComponentMeta<typeof QuestionCard>;

const Template: ComponentStory<typeof QuestionCard> = (args) => <QuestionCard {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  mode: 'dark',
  question: questionDetailMock(),
};

TOP.parameters = {
  layout: 'fullscreen',
};
