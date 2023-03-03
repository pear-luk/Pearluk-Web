import { useState } from 'react';
import styled from 'styled-components';
import { Archive } from '../../../types/model/archive';
import { Button } from '../../elements/Button';
import { InputText } from '../../elements/InputText';
import { ArchiveListItemAdmin } from '../../foundations_admin/ArchiveListItem';

interface Props {
  archiveList: Archive[];
}
export const AdminArchiveListCard = ({ archiveList }: Props) => {
  const [newArchive, setNewArchive] = useState('');
  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) setNewArchive(e.target.value);
  };
  return (
    <Container>
      <Box>
        <InputText
          mode="white" //
          input_width="medium"
          input_height="base"
          value={newArchive}
          onChange={inputOnChange}
          placeholder="New Archive"
        />
        <Button size="mini" label="+" />
      </Box>
      <Item>ALL</Item>
      {archiveList &&
        archiveList.map((archive) => {
          return (
            <Item key={archive.archive_id}>
              <ArchiveListItemAdmin archive={archive} />
            </Item>
          );
        })}
      <Item>SALE</Item>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  padding: 1.6rem;
  border: 1px solid black;
  min-height: 100vh;
`;

const Item = styled.div`
  margin-top: 1.6rem;
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
