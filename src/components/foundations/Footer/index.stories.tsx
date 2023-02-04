import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from '.';
import { businessInfoMock } from '../../../mock/businessInfo.mock';

export default {
  title: 'Foundations/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const EX = Template.bind({});
EX.args = {
  business_info: businessInfoMock,
};

EX.parameters = {
  layout: 'fullscreen',
};
