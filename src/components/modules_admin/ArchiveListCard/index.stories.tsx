import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AdminArchiveListCard } from '.';
import { archiveLsitMock } from '../../../mock/archive.mock';

export default {
  title: 'Modules_admin/AdminArchiveListCard',
  component: AdminArchiveListCard,
  argTypes: {},
} as ComponentMeta<typeof AdminArchiveListCard>;

const Template: ComponentStory<typeof AdminArchiveListCard> = (args) => <AdminArchiveListCard {...args} />;

export const EX = Template.bind({});
EX.args = {
  archives: archiveLsitMock,
};

EX.parameters = {
  layout: 'fullscreen',
};
