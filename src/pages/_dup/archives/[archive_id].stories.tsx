import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArchivePage from './[archive_id]';

export default {
  title: 'PAGE/Archive',
  component: ArchivePage,

  argTypes: {},
} as ComponentMeta<typeof ArchivePage>;

const Template: ComponentStory<typeof ArchivePage> = (args) => <ArchivePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.parameters = {
  layout: 'fullscreen',
  nextRouter: {
    pathname: '/archives/:product_id',
    query: { archive_id: 'all' },
  },
};
