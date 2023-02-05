import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddressForm } from '.';

export default {
  title: 'Modules/AddressForm',
  component: AddressForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddressForm>;

const Template: ComponentStory<typeof AddressForm> = (args) => <AddressForm {...args} />;
// mode, type, label, label_type, label_size, label_weight, onChange,
export const TOP = Template.bind({});
TOP.args = {
  label_weight: 'bold',
};

TOP.parameters = {
  layout: 'fullscreen',
};
