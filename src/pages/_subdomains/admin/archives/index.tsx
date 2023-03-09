import { useEffect } from 'react';
import { AdminArchiveTemplate } from '../../../../components/prototypes_admin/ArchiveTemplate';
import { useArchiveList } from '../../../../hooks/queries/archiveQuery';
import { useCategoryList } from '../../../../hooks/queries/categoryQuery';
import { useProjectList } from '../../../../hooks/queries/productQuery';
interface Props {
  storybook?: boolean;
}
function Archive({ ...props }: Props) {
  // mode, icon
  const { archiveList } = useArchiveList();
  const { productList } = useProjectList({ page: String(1), archive: 'all' });
  const { categoryList } = useCategoryList();

  useEffect(() => {
    console.log(categoryList);
  }, [categoryList]);

  return (
    <AdminArchiveTemplate archiveList={archiveList} productList={productList} categoryList={categoryList} {...props} />
  );
}

export default Archive;
