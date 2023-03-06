import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArchiveStatusCard_Admin } from '.';

export default {
  title: 'Modules_admin/ArchiveStatusCard_Admin',
  component: ArchiveStatusCard_Admin,
  argTypes: {},
} as ComponentMeta<typeof ArchiveStatusCard_Admin>;

const Template: ComponentStory<typeof ArchiveStatusCard_Admin> = (args) => <ArchiveStatusCard_Admin {...args} />;

export const EX = Template.bind({});
EX.args = {
  status: {
    all: {
      title: '전체',
      number: 1000,
    },
    wait: {
      title: '판매대기',
      number: 1000,
    },
    for_sale: {
      title: '판매중',
      number: 1000,
    },
    on_sale: {
      title: '할인중',
      number: 1000,
    },
    sold_out: {
      title: '품절',
      number: 1000,
    },
    stop: {
      title: '판매중지',
      number: 1000,
    },
    off: {
      title: '판매종료',
      number: 1000,
    },
  },
};

EX.parameters = {
  layout: 'fullscreen',
};
