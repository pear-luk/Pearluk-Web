import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useModal } from '../../../hooks/util/useModal';
import { ModeType } from '../../../types/common/propsTypes';
import { Category } from '../../../types/model/category';
import { Button } from '../../elements/Button';
import { ChildCategoryListItemAdmin } from '../ChildCategoryListItem';

interface Props {
  mode: ModeType;
  category: Category;
  onClick?: () => void;
}
export const ParentCategoryListItem = ({ mode, category, onClick }: Props) => {
  const [childs, setChilds] = useState<Category[]>([]);
  const [childCategoryId, setChildCategoryId] = useState('');
  useEffect(() => {
    category.child_categories && setChilds(category.child_categories);
  }, [category]);

  const childDeleteOkButtonHandler =
    ({ category_id }: Pick<Category, 'category_id'>) =>
    () => {
      setChilds(
        childs.filter((child) => {
          return child.category_id !== category_id;
        }),
      );
      childDeleteModalClose();
    };
  const {
    Modal: ChildDeleteModal,
    open: childDeleteModalOpen,
    close: childDeleteModalClose,
  } = useModal({
    message: 'REAL DELETE?',
    mode,
    OK_Button: true,
    NO_Button: true,
    OK_Button_onClick: childDeleteOkButtonHandler({ category_id: childCategoryId }),
  });

  const childDeleteButtonHandler =
    ({ category_id }: Pick<Category, 'category_id'>) =>
    () => {
      setChildCategoryId(category_id);
      childDeleteModalOpen();
    };
  return (
    <Container>
      <ChildDeleteModal />
      <ParentContainer>
        <Name>{category.name}</Name>
        {childs && childs.length === 0 && <Button size="mini" label="-" onClick={onClick} />}
      </ParentContainer>
      {childs &&
        childs.map((category) => {
          const { category_id } = category;
          return (
            <ChildBox key={category.category_id}>
              <ChildCategoryListItemAdmin category={category} onClick={childDeleteButtonHandler({ category_id })} />
            </ChildBox>
          );
        })}
    </Container>
  );
};

const Container = styled.div``;
const ParentContainer = styled.div`
  display: flex;
  width: 22rem;
  height: 2.4rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
`;

const Name = styled.div``;

const ChildBox = styled.div`
  margin: 0.2rem 0;
`;
