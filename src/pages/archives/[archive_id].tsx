import { useRouter } from 'next/router';
import { ArchiveTemplate } from '../../components/prototypes/ArchiveTemplate';
import { useProjectList } from '../../hooks/queries/productQuery';

const ArchivePage = () => {
  const router = useRouter();
  const { archive_id, page } = router.query;
  const { productList, totalCount } = useProjectList({
    archive: archive_id,
    page,
  });
  return <ArchiveTemplate mode="dark" productList={productList} totalCount={totalCount}></ArchiveTemplate>;
};
export default ArchivePage;
