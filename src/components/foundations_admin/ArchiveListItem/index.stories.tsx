import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArchiveListItemAdmin } from '.';
import { archiveMock } from '../../../mock/archive.mock';

export default {
  title: 'Foundations_admin/ArchiveListItemAdmin',
  component: ArchiveListItemAdmin,
  argTypes: {},
} as ComponentMeta<typeof ArchiveListItemAdmin>;

const Template: ComponentStory<typeof ArchiveListItemAdmin> = (args) => <ArchiveListItemAdmin {...args} />;

export const EX = Template.bind({});
EX.args = {
  archive: archiveMock,
};

EX.parameters = {
  layout: 'fullscreen',
};
