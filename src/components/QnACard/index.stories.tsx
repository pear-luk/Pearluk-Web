import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QnACard } from '.';

export default {
  title: 'Components/QnACard',
  component: QnACard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof QnACard>;

const Template: ComponentStory<typeof QnACard> = (args) => <QnACard {...args} />;

export const EX = Template.bind({});
EX.args = {};

EX.parameters = {
  layout: 'fullscreen',
};
