import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { UseMutateAsyncFunction } from 'react-query';
import styled from 'styled-components';
import { useAdminModal } from '../../../hooks/util/useAdminModal';
import { useModal } from '../../../hooks/util/useModal';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { ModeType } from '../../../types/common/propsTypes';
import { Archive } from '../../../types/model/archive';
import { CreateArchiveDTO } from '../../../types/request/archive';
import { Button } from '../../elements/Button';
import { InputText } from '../../elements/InputText';
import { ArchiveForm } from '../../foundations_admin/ArchiveForm';
import { ArchiveListItemAdmin } from '../../foundations_admin/ArchiveListItem';

interface Props {
  archiveList: Archive[];
  mode: ModeType;
  createArchive?: UseMutateAsyncFunction<BaseResponseDTO<Archive>, AxiosError<unknown, any>, CreateArchiveDTO, unknown>;
}
export const AdminArchiveListCard = ({ archiveList, mode, createArchive }: Props) => {
  const [archiveListDup, setArchiveListDup] = useState<Archive[]>([]);
  const [newArchive, setNewArchive] = useState('');
  const [archiveId, setArchiveId] = useState('');

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) setNewArchive(e.target.value);
  };
  useEffect(() => {
    setArchiveListDup(archiveList);
  }, [archiveList]);
  const deleteOkButtonHandler = (archive_id: string) => () => {
    setArchiveListDup(archiveListDup?.filter((archive) => archive.archive_id !== archive_id));
    // 아카이브 제거 mutate
    // ...
    close();
  };

  const {
    Modal: ArchiveModal,
    open: archiveModalOpen,
    close: archiveModalClose,
  } = useAdminModal({
    mode: mode,

    Content: (
      <ArchiveForm
        //
        mode={mode}
        NO_Button={true}
        NO_Button_onClick={() => {
          archiveModalClose();
        }}
        archiveList={archiveListDup}
        setArchiveList={setArchiveListDup}
        createArchive={createArchive}
      />
    ),
  });
  const { Modal, open, close } = useModal({
    message: 'REAL DELETE?',
    mode: mode,
    OK_Button: true,
    NO_Button: true,
    OK_Button_onClick: deleteOkButtonHandler(archiveId),
  });
  const buttonHandler = (archive_id: string) => () => {
    setArchiveId(archive_id);
    open();
  };

  return (
    <Container>
      <ArchiveModal></ArchiveModal>
      <Modal />
      <Box>
        <InputText
          mode={mode} //
          input_width="medium"
          input_height="base"
          value={newArchive}
          onChange={inputOnChange}
          placeholder="New Archive"
        />
        <Button size="mini" label="+" onClick={archiveModalOpen} />
      </Box>
      <Item>ALL</Item>
      {archiveListDup &&
        archiveListDup.map((archive) => {
          return (
            <Item key={archive.archive_id}>
              <ArchiveListItemAdmin archive={archive} onClick={buttonHandler(archive.archive_id)} />
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
