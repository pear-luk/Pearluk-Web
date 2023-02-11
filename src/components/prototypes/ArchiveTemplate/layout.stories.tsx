import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArchiveTemplate } from '.';
import { productListMock } from '../../../mock/product.mock';

export default {
  title: 'Prototypes/ArchiveTemplate',
  component: ArchiveTemplate,

  argTypes: {},
} as ComponentMeta<typeof ArchiveTemplate>;

const Template: ComponentStory<typeof ArchiveTemplate> = (args) => <ArchiveTemplate {...args} />;

export const EX = Template.bind({});

EX.args = {
  // orders: [orderMock, orderMock, orderMock],
  archiveList: [
    {
      archive_id: '01GRQRT0QSABB2Q542BD2Z6SD0',
      title: '22F/W',
      year: 2022,
      introduce: null,

      status: 'ACTIVE',
    },
    {
      archive_id: '01GRQRTA0F1V2TEA2PVVJ75ZBS',
      title: '23S/S',
      year: 2022,
      introduce: null,

      status: 'ACTIVE',
    },
    {
      archive_id: '01GRQRTK51GQZH8FYG236ZGCT1',
      title: '23F/W',
      year: 2023,
      introduce: null,

      status: 'ACTIVE',
    },
    {
      archive_id: '01GRQRTVMGJGX3ZZ2FYT8QY20R',
      title: '24S/S',
      year: 2024,
      introduce: null,

      status: 'ACTIVE',
    },
    {
      archive_id: '01GRQRV05Q2G94J3HXCCVKF57E',
      title: '24F/W',
      year: 2024,
      introduce: null,

      status: 'ACTIVE',
    },
    {
      archive_id: '01GRQRV05S2G94J3HXCCVKF57E',
      title: '25F/W',
      year: 2024,
      introduce: null,

      status: 'ACTIVE',
    },
    {
      archive_id: '01GRQRV02S2G94J3HXCCVKF57E',
      title: '26F/W',
      year: 2024,
      introduce: null,

      status: 'ACTIVE',
    },
  ],
  productList: productListMock,
};
EX.parameters = {
  layout: 'fullscreen',
};
