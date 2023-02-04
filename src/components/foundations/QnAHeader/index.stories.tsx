import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QnAHeader } from '.';

export default {
  title: 'Foundations/QnAHeader',
  component: QnAHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof QnAHeader>;

const Template: ComponentStory<typeof QnAHeader> = (args) => <QnAHeader {...args} />;

export const WHITE_MEDIUM = Template.bind({});
WHITE_MEDIUM.args = {
  mode: 'white',
  size: 'medium',
};

WHITE_MEDIUM.parameters = {
  layout: 'fullscreen',
};

export const DARK = Template.bind({});
DARK.args = {
  mode: 'dark',
  QA_mode: 'list_read',
};

DARK.parameters = {
  layout: 'fullscreen',
};

// export const EX = Template.bind({});
// EX.args = {};

// EX.parameters = {
//   layout: 'fullscreen',
// };
