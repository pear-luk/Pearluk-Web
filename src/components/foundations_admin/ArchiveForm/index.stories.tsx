import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArchiveForm } from '.';

export default {
  title: 'Foundations_admin/ArchiveForm',
  component: ArchiveForm,
  argTypes: {},
} as ComponentMeta<typeof ArchiveForm>;

const Template: ComponentStory<typeof ArchiveForm> = (args) => <ArchiveForm {...args} />;

export const EX = Template.bind({});
EX.args = {
  archive: {},
};

EX.parameters = {
  layout: 'fullscreen',
};
