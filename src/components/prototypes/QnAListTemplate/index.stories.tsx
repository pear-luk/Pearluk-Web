import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QATemplate } from '.';
import { questionListItemMock } from '../../../mock/question.mock';
export default {
  title: 'Prototypes/QATemplate',
  component: QATemplate,

  argTypes: {},
} as ComponentMeta<typeof QATemplate>;

const Template: ComponentStory<typeof QATemplate> = (args) => <QATemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  questions: Array(100)
    .fill(0)
    .map(() => questionListItemMock()),
  totalCount: 100,
};
EX.parameters = {
  layout: 'fullscreen',
};
