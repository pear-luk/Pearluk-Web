import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QA_InputCard } from '.';

export default {
  title: 'Components/QA_InputCard',
  component: QA_InputCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof QA_InputCard>;

const Template: ComponentStory<typeof QA_InputCard> = (args) => <QA_InputCard {...args} />;

export const EX = Template.bind({});
EX.args = {};

EX.parameters = {
  layout: 'fullscreen',
};
