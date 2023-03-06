import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAdminModal } from '../../../hooks/util/useAdminModal';
import { useModal } from '../../../hooks/util/useModal';
import { ModeType } from '../../../types/common/propsTypes';
import { Category } from '../../../types/model/category';
import { Button } from '../../elements/Button';
import { Label } from '../../elements/Label';
import { ParentCategoryListItem } from '../../foundations_admin/ParentCategoryListItem';
import { CategoryForm } from '../CategoryFormCard';

interface Props {
  categoryList: Category[];
  mode: ModeType;
}
export const AdminCategoryListCard = ({ categoryList, mode }: Props) => {
  const [categoryListState, setCategoryListState] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    setCategoryListState(categoryList);
  }, [categoryList]);
  const deleteCategoryOkButtonHandler = (category_id: string) => () => {
    // if (deleteArchive)
    // deleteArchive({ archive_id })
    // .then(() => {
    //   setCategoryListState(categoryListState?.filter((archive) => archive.archive_id !== archive_id));
    // })
    // .catch((e) => {
    //   alert(e.message);
    // });
    // else {
    setCategoryListState(categoryListState?.filter((category) => category.category_id !== category_id));
    // }

    categoryDeleteModalClose();
  };

  const {
    Modal: CategoryFormModal,
    open: cateogryFormOpen,
    close: cateogryFormClose,
  } = useAdminModal({
    mode: mode,

    Content: <CategoryForm mode={mode} />,
  });
  const {
    Modal: CategoryDeleteModal,
    open: categoryDeleteModalOpen,
    close: categoryDeleteModalClose,
  } = useModal({
    message: 'REAL DELETE?',
    mode,
    OK_Button: true,
    NO_Button: true,
    OK_Button_onClick: deleteCategoryOkButtonHandler(categoryId),
  });

  const categoryDeleteButtonHandler = (category_id: string) => () => {
    setCategoryId(category_id);
    categoryDeleteModalOpen();
  };

  return (
    <Container>
      <CategoryFormModal />
      <CategoryDeleteModal />
      <Label mode={mode} label="CATEGORY" label_size="large" label_weight="bold" />
      <Box>
        <Button size="xlarge" label="ADD CATEGORY" onClick={cateogryFormOpen} />
      </Box>

      {categoryListState &&
        categoryListState.map((category) => {
          const { category_id } = category;
          return (
            <Item key={'list' + category.category_id}>
              <ParentCategoryListItem
                mode={mode}
                category={category}
                onClick={categoryDeleteButtonHandler(category_id)}
              />
            </Item>
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  padding: 1.6rem;
  border: 1px solid black;
  min-height: 50vh;
  overflow: scroll;
`;

const Item = styled.div`
  margin-top: 1.2rem;
  font-size: 1.4rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22rem;
  button {
    flex: 1 0 auto;
  }
`;
