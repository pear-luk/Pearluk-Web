import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PriceLabel } from '.';

export default {
  title: 'Foundations/PriceLabel',
  component: PriceLabel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PriceLabel>;

const Template: ComponentStory<typeof PriceLabel> = (args) => <PriceLabel {...args} />;

export const EX = Template.bind({});
EX.args = {
  mode: 'dark',
};

EX.parameters = {
  layout: 'fullscreen',
};
