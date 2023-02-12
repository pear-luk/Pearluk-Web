import { useRouter } from 'next/router';
import { useState } from 'react';
import { ArchiveTemplate } from '../../components/prototypes/ArchiveTemplate';
import { useProjectList } from '../../hooks/queries/productQuery';
import { ModeType } from '../../types/common/propsTypes';

const ArchivePage = () => {
  const router = useRouter();
  const [mode] = useState<ModeType>('dark');
  const { archive_id, page } = router.query;
  const { productList, totalCount } = useProjectList({
    archive: archive_id,
    page,
  });

  // if (isProjectListLoading) return <LayOut mode={mode} />;
  return <ArchiveTemplate mode={mode} productList={productList} totalCount={totalCount}></ArchiveTemplate>;
};
export default ArchivePage;
