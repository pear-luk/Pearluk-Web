import styled from 'styled-components';
import { AdminArchiveListCard } from '../../modules_admin/ArchiveListCard';
import { ArchiveStatusCard_Admin } from '../../modules_admin/ArchiveStatusCard';
import { AdminLayout } from '../../_layout/AdminLayout';
export const AdminArchiveTemplate = () => {
  return (
    <AdminLayout>
      <Container>
        <AdminArchiveListCard archives={[]} />
        <Box>
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
        </Box>
      </Container>
    </AdminLayout>
  );
};

const Container = styled.div`
  padding: 2.4rem;
  display: flex;
  justify-content: space-around;
`;

const Box = styled.div``;
