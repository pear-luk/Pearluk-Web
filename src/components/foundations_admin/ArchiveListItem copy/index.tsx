import styled from 'styled-components';
import { Archive } from '../../../types/model/archive';
import { Button } from '../../elements/Button';

interface Props {
  archive: Archive;
  onClick?: () => void;
}
export const ArchiveListItemAdmin = ({ archive, onClick }: Props) => {
  return (
    <Container>
      <Item>{archive.title}</Item>
      <Button size="mini" label="-" onClick={onClick} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 22rem;
  height: 2.4rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
`;

const Item = styled.div``;
