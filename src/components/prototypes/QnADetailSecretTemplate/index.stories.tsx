import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QnADetailSecretTemplate } from '.';
export default {
  title: 'Prototypes/QnADetailSecretTemplate',
  component: QnADetailSecretTemplate,

  argTypes: {},
} as ComponentMeta<typeof QnADetailSecretTemplate>;

const Template: ComponentStory<typeof QnADetailSecretTemplate> = (args) => <QnADetailSecretTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  question_id: '01GT253W208YAEYRH1M9HMZF9P',
};
EX.parameters = {
  layout: 'fullscreen',
};
