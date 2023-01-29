import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QA_top } from '.';

export default {
  title: 'Components/QA_top',
  component: QA_top,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof QA_top>;

const Template: ComponentStory<typeof QA_top> = (args) => <QA_top {...args} />;

export const EX = Template.bind({});
EX.args = {};

EX.parameters = {
  layout: 'fullscreen',
};
