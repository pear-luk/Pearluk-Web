import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Nav } from '.';

export default {
  title: 'Components/Nav',
  component: Nav,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const MainNoLogo = Template.bind({});
MainNoLogo.args = {
  mode: 'dark',
  logo: false,
};

export const Main = Template.bind({});
Main.args = {
  mode: 'white',
};

export const MainBack = Template.bind({});
MainBack.args = {
  mode: 'white',
  menu: false,
};
export const Product = Template.bind({});
Product.args = {
  mode: 'dark',
};

export const ProductBack = Template.bind({});
ProductBack.args = {
  mode: 'dark',
  menu: false,
};
