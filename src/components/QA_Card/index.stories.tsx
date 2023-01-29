import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QA_Card } from '.';

export default {
  title: 'Components/QA_Card',
  component: QA_Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof QA_Card>;

const Template: ComponentStory<typeof QA_Card> = (args) => <QA_Card {...args} />;

export const EX = Template.bind({});
EX.args = {};

EX.parameters = {
  layout: 'fullscreen',
};
