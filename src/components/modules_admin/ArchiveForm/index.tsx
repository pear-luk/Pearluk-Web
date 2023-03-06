import { AxiosError } from 'axios';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { UseMutateAsyncFunction } from 'react-query';
import styled from 'styled-components';

import { FontWeight, Size } from '../../../styles/theme';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { ButtonColorType, ModeType } from '../../../types/common/propsTypes';
import { Archive } from '../../../types/model/archive';
import { CreateArchiveDTO } from '../../../types/request/archive';
import { Button } from '../../elements/Button';
import { Label } from '../../elements/Label';
import { TextArea } from '../../elements/Textarea';
import { InputLabel } from '../../foundations/InputLabel';

interface Props {
  mode: ModeType;

  input_width?: keyof Size['width'];
  input_height?: keyof Size['space'];

  label_size?: keyof Size['font'];
  label_weight?: keyof FontWeight;

  OK_Button?: boolean;
  OK_Button_color?: ButtonColorType;
  OK_Button_onClick?: (() => void) | ((e: React.MouseEvent) => void);

  NO_Button?: boolean;
  NO_Button_color?: ButtonColorType;
  NO_Button_onClick?: (() => void) | ((e: React.MouseEvent) => void);

  createArchive?: UseMutateAsyncFunction<BaseResponseDTO<Archive>, AxiosError<unknown, any>, CreateArchiveDTO, unknown>;

  archiveList?: Archive[];
  setArchiveList?: Dispatch<SetStateAction<Archive[]>>;
}
export const ArchiveForm = ({
  mode,

  input_width = 'medium',
  input_height = 'base',
  label_size = 'medium',
  label_weight = 'bold',

  OK_Button = true,
  OK_Button_onClick,
  NO_Button = true,
  NO_Button_onClick,
  archiveList,
  setArchiveList,
  createArchive,
}: Props) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [introduce, setIntroduce] = useState('');

  const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setTitle(e.target.value);
    }
  }, []);
  const onChangeYear = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // if(e.target.value)
    if (e.target) {
      if (isNaN(Number(e.target.value))) {
        alert('숫자입력하세요');
        setYear('');
      } else setYear(e.target.value);
      // setArchiveInfo && setArchiveInfo(() => ({ ...archiveInfo, year: Number(e.target.value) }));
    }
  }, []);
  const onChangeIntroduce = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target) {
      setIntroduce(e.target.value);
      // setArchiveInfo && setArchiveInfo(() => ({ ...archiveInfo, introduce: e.target.value }));
    }
  }, []);
  const okButtonHandler = (e: React.MouseEvent) => {
    createArchive &&
      setArchiveList &&
      archiveList &&
      createArchive({ title, year: Number(year), introduce }).then(({ result }) => {
        const archive = result;
        archive && setArchiveList([archive, ...archiveList]);
      });

    OK_Button_onClick && OK_Button_onClick(e);
    NO_Button_onClick && NO_Button_onClick(e);
  };
  return (
    <Container
      mode={mode}
      label_size={label_size}
      label_weight={label_weight}
      input_width={input_width}
      input_height={input_height}>
      <Box>
        <InputLabel
          mode={mode === 'dark' ? 'white' : 'dark'} //
          value={title}
          // value={archiveInfo?.title}
          label="ARCHIVE TITLE"
          onChange={onChangeTitle}
          placeholder="TITLE"
        />
      </Box>
      <Box>
        <InputLabel
          mode={mode === 'dark' ? 'white' : 'dark'} //
          value={year}
          // value={String(archiveInfo?.year)}
          label="YEAR"
          placeholder="ONLY YEAR(NUM) 2000 ~ NOW YEAR + 1 "
          onChange={onChangeYear}
        />
      </Box>

      <Label mode={mode === 'dark' ? 'white' : 'dark'} label="INTRODUCE" label_weight={label_weight} />
      <TextArea
        mode={mode === 'dark' ? 'white' : 'dark'}
        onChange={onChangeIntroduce}
        placeholder="ARCHIVE INTORO, CAN NULL"
      />
      <ButtonBox>
        {OK_Button && (
          <Button
            size="medium"
            color={mode === 'dark' ? 'black' : 'yellow'}
            onClick={okButtonHandler}
            label="OK"></Button>
        )}
        {NO_Button && (
          <Button
            size="medium"
            color={mode === 'dark' ? 'grey' : 'dark_yellow'}
            onClick={NO_Button_onClick}
            label="NO"></Button>
        )}
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div<Omit<Props, 'archive' | 'onChange' | 'type'>>`
  font-size: ${({ label_size, theme }) => label_size && theme.size.font[label_size]};
  /* background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)}; */
  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};

  width: ${({ theme, input_width }) => input_width && theme.size.width[input_width]};
`;

const Box = styled.div`
  margin: 0.8rem 0;
`;

const ButtonBox = styled.div`
  margin-top: ${({ theme }) => theme.size.space.base};
  /* padding: 0 5.6rem; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 0.4rem;
  }
`;
