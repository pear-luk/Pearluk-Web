import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AdminArchiveTemplate } from '../../../../components/prototypes_admin/ArchiveTemplate';
import { useArchiveList } from '../../../../hooks/queries/archiveQuery';
import { useCategoryList } from '../../../../hooks/queries/categoryQuery';
import { useProductStatus, useProjectList } from '../../../../hooks/queries/productQuery';
interface Props {
  storybook?: boolean;
}
function Archive({ ...props }: Props) {
  // mode, icon
  const router = useRouter();
  const { archive, page, search, parentCategory, childCategory } = router.query;
  const { archiveList } = useArchiveList();
  const { productList, totalCount } = useProjectList({ page, archive, search, parentCategory, childCategory });
  const { categoryList } = useCategoryList();
  const { productStatus, refetchroductStatus } = useProductStatus();

  useEffect(() => {
    console.log(categoryList);
  }, [categoryList]);

  return (
    <AdminArchiveTemplate
      archiveList={archiveList}
      productList={productList}
      categoryList={categoryList}
      productTotalCount={totalCount}
      productStatus={productStatus}
      page={page}
      {...props}
    />
  );
}

export default Archive;
