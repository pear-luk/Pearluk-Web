import styled from 'styled-components';
import { useCreateArchive } from '../../../hooks/mutation/archive';
import { Archive } from '../../../types/model/archive';
import { Category } from '../../../types/model/category';
import { Product } from '../../../types/model/product';
import { AdminArchiveListCard } from '../../modules_admin/ArchiveListCard';
import { ArchiveProductSearchCard } from '../../modules_admin/ArchiveProductSearchCard';
import { ArchiveStatusCard_Admin } from '../../modules_admin/ArchiveStatusCard';
import { AdminLayout } from '../../_layout/AdminLayout';

interface Props {
  archiveList: Archive[];
  categoryList: Category[];
  productList: Product[];
}

export const AdminArchiveTemplate = ({ archiveList, categoryList, productList }: Props) => {
  const { mutateAsync } = useCreateArchive();

  return (
    <AdminLayout mode="white">
      <Container>
        <AdminArchiveListCard mode="white" archiveList={archiveList} createArchive={mutateAsync} />
        <Box>
          <Content>
            <ArchiveStatusCard_Admin
              status={{
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
              }}
            />
          </Content>
          <ArchiveProductSearchCard status={{}} categoryList={categoryList} productList={productList} />
        </Box>
      </Container>
    </AdminLayout>
  );
};

const Container = styled.div`
  padding: 2.4rem;
  display: flex;
  /* justify-content: space-around; */

  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.6rem;
`;

const Content = styled.div`
  margin-bottom: 1.6rem;
`;
