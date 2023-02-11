import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { archiveListState } from '../../../recoil/archive/state';
import { ModeType, PageNationButtonItemType } from '../../../types/common/propsTypes';
import { Product } from '../../../types/model/product';
import { PageNationBotton } from '../../foundations/PageNationButton';
import { ProductItem } from '../../foundations/ProductItem';
import { LayOut } from '../../layout';
interface Props {
  mode: ModeType;
  // archiveList: Archive[];
  productList: Product[];
  totalCount: number;
}

export const ArchiveTemplate = ({ mode, productList, totalCount }: Props) => {
  // const { productList, isProjectListError, isProjectListLoading, refetchProjectList } = useProjectList({
  //   page: 1,
  //   archive: 'all',
  // });
  const archiveLists = useRecoilValue(archiveListState);
  const [archiveList, archiveListsss] = useState(
    archiveLists.map((archive) => ({ ...archive, id: archive.archive_id })),
  );
  const [pageList, setPageList] = useState<PageNationButtonItemType[]>([]);
  // Array(totalCount/10)

  useEffect(() => {
    archiveListsss(archiveLists.map((archive) => ({ ...archive, id: archive.archive_id })));
  }, [archiveLists]);
  useEffect(() => {
    if (totalCount)
      setPageList(
        Array(Math.ceil(totalCount / 10))
          .fill(0)
          .map((_, i) => ({ id: String(i + 1), title: String(i + 1) })),
      );
  }, [totalCount]);
  const router = useRouter();
  const { archive_id, page } = router.query as { archive_id?: string; page?: string };

  return (
    <LayOut mode={mode} contentSize="large">
      <TitleBox mode={mode}>LUK SHOP</TitleBox>
      <PageNationLayout>
        <PageNationBotton
          mode={mode}
          width="35.8rem"
          items={[{ id: 'all', title: 'all' }, ...archiveList, { id: 'off', title: 'off' }]}
          now_id={archive_id}
          url="/archives/"></PageNationBotton>
      </PageNationLayout>
      <ProductBox>
        {productList &&
          productList.map((proudct) => {
            return <ProductItem mode={mode} product={proudct} key={proudct.product_id}></ProductItem>;
          })}
      </ProductBox>
      <PageNationBox>
        <PageNationBotton
          mode={mode}
          size="small"
          items={pageList}
          now_id={page}
          url={`/archives/${archive_id}?page=`}></PageNationBotton>
      </PageNationBox>
    </LayOut>
  );
};

const PageNationLayout = styled.div`
  transform: translate(-0.8rem, 0);
`;

const TitleBox = styled.div<{ mode: ModeType }>`
  /* height: 5.4rem; */
  color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  font-size: ${({ theme }) => theme.size.font.primary};
  font-weight: 700;
  text-align: center;
  padding-top: 2.4rem;
  padding-bottom: 1.6rem;
`;

const ProductBox = styled.div``;

const PageNationBox = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
