import { useState } from 'react';
import styled from 'styled-components';
import { useCreateArchive, useDeleteArchive } from '../../../hooks/mutation/archive';
import { useCreateCategory } from '../../../hooks/mutation/category';
import { useCreateProduct, useUploadProductImg } from '../../../hooks/mutation/product';
import { Archive } from '../../../types/model/archive';
import { Category } from '../../../types/model/category';
import { Product } from '../../../types/model/product';
import { AdminArchiveListCard } from '../../modules_admin/ArchiveListCard';
import { ArchiveProductSearchCard } from '../../modules_admin/ArchiveProductSearchCard';
import { ArchiveStatusCard_Admin } from '../../modules_admin/ArchiveStatusCard';
import { AdminCategoryListCard } from '../../modules_admin/CategoryListCard';
import { AdminLayout } from '../../_layout/AdminLayout';

interface Props {
  archiveList: Archive[];
  categoryList: Category[];
  productList: Product[];
}
const statusMock = {
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
};

export const AdminArchiveTemplate = ({ archiveList, categoryList, productList }: Props) => {
  const [productId, setProductId] = useState('');

  const { mutateAsync: createArchive } = useCreateArchive();
  const { mutateAsync: deleteArchive } = useDeleteArchive();
  const { mutateAsync: createCategory } = useCreateCategory();
  const { mutateAsync: createProduct } = useCreateProduct();
  const { mutateAsync: uploadProductImgs } = useUploadProductImg(productId);
  return (
    <AdminLayout mode="white">
      <Container>
        <LineBox>
          <AdminArchiveListCard
            mode="white"
            archiveList={archiveList}
            createArchive={createArchive}
            deleteArchive={deleteArchive}
          />
        </LineBox>
        <LineBox>
          <AdminCategoryListCard mode="white" categoryList={categoryList} createCategory={createCategory} />
        </LineBox>
        <ContentBox>
          <Content>
            <Box>
              <ArchiveStatusCard_Admin status={statusMock} />
            </Box>
            <Box>
              <ArchiveProductSearchCard
                mode="white"
                status={statusMock}
                archiveList={archiveList}
                categoryList={categoryList}
                productList={productList}
                setProductId={setProductId}
                createProduct={createProduct}
                uploadProductImgs={uploadProductImgs}
              />
            </Box>
          </Content>
        </ContentBox>
      </Container>
    </AdminLayout>
  );
};

const Container = styled.div`
  padding: 2.4rem;
  display: flex;
  /* justify-content: space-around; */

  height: min-content;
  margin: 0 auto;
  flex: 0 1 100%;
  column-gap: 1.6rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  /* justify-content: space-between; */
  row-gap: 1.6rem;
`;

const Box = styled.div``;

const ContentBox = styled.div`
  flex: 0 1 100%;
`;

const LineBox = styled.div`
  border: 1px solid black;
  flex: 0 100%;
  position: relative;
`;
