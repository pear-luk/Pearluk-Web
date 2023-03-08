import styled from 'styled-components';
import { Category } from '../../../types/model/category';
import { Button } from '../../elements/Button';

interface Props {
  category: Category;
  onClick?: () => void;
}
export const ChildCategoryListItemAdmin = ({ category, onClick }: Props) => {
  return (
    <Container>
      <Item>- {category.name}</Item>
      <Button size="mini" label="-" onClick={onClick} />
    </Container>
  );
};

const Container = styled.div`
  padding-left: 1.6rem;
  display: flex;
  width: 22rem;
  height: 2.4rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
`;

const Item = styled.div``;
