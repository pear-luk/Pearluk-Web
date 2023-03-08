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
import { Label } from '../../elements/Label';
import { ArchiveListItemAdmin } from '../../foundations_admin/ArchiveListItem';
import { ArchiveForm } from '../ArchiveForm';

interface Props {
  archiveList: Archive[];
  mode: ModeType;
  createArchive?: UseMutateAsyncFunction<
    BaseResponseDTO<Archive>,
    AxiosError<unknown, unknown>,
    CreateArchiveDTO,
    unknown
  >;
  deleteArchive?: UseMutateAsyncFunction<
    BaseResponseDTO<Archive>,
    AxiosError<unknown, unknown>,
    Pick<Archive, 'archive_id'>,
    unknown
  >;
}
export const AdminArchiveListCard = ({ archiveList, mode, createArchive, deleteArchive }: Props) => {
  const [archiveListDup, setArchiveListDup] = useState<Archive[]>([]);
  const [archiveId, setArchiveId] = useState('');

  useEffect(() => {
    setArchiveListDup(archiveList);
  }, [archiveList]);
  const deleteOkButtonHandler = (archive_id: string) => () => {
    if (deleteArchive)
      deleteArchive({ archive_id })
        .then(() => {
          setArchiveListDup(archiveListDup?.filter((archive) => archive.archive_id !== archive_id));
        })
        .catch((e) => {
          alert(e.message);
        });
    else {
      setArchiveListDup(archiveListDup?.filter((archive) => archive.archive_id !== archive_id));
    }
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
      <Label mode={mode} label="ARCHIVE" label_weight="bold" label_size="large" />
      <Box>
        <Button size="xlarge" label="ADD ARCHIVE" onClick={archiveModalOpen} />
      </Box>
      <ListBox>
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
      </ListBox>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  padding: 1.6rem;
  height: inherit;
  right: 0;
  top: 0;

  max-height: 100vh;
  min-height: 79rem;
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
const ListBox = styled.div`
  overflow: scroll;
  max-height: 94vh;
  min-height: 70rem;
`;
