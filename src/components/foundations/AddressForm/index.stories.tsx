import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddressForm } from '.';

export default {
  title: 'Foundations/AddressForm',
  component: AddressForm,
  argTypes: {},
} as ComponentMeta<typeof AddressForm>;

const Template: ComponentStory<typeof AddressForm> = (args) => <AddressForm {...args} />;

export const EX = Template.bind({});
EX.args = {};

EX.parameters = {
  layout: 'fullscreen',
};
