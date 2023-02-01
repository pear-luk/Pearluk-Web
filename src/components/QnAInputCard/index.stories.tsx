import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QnAInputCard } from '.';

export default {
  title: 'Components/QnAInputCard',
  component: QnAInputCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof QnAInputCard>;

const Template: ComponentStory<typeof QnAInputCard> = (args) => <QnAInputCard {...args} />;

export const EX = Template.bind({});
EX.args = {};

EX.parameters = {
  layout: 'fullscreen',
};
