import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontWeight, Size } from '../../../styles/theme';
import { ButtonColorType, ModeType } from '../../../types/common/propsTypes';
import { Category } from '../../../types/model/category';
import { Button } from '../../elements/Button';
import { Label } from '../../elements/Label';
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

  categoryList?: Category[];
  // setArchiveList?: Dispatch<SetStateAction<Archive[]>>;
}
export const CategoryForm = ({
  mode,

  input_width = 'medium',
  input_height = 'base',
  label_size = 'medium',
  label_weight = 'bold',

  OK_Button = true,
  OK_Button_onClick,
  NO_Button = true,
  NO_Button_onClick,
  categoryList,
}: Props) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [parentCategoryId, setParentCategoryId] = useState<string>();
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setName(e.target.value);
    }
  }, []);
  const selectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParentCategoryId(e.target.value);
  };
  useEffect(() => {
    console.log(parentCategoryId);
  }, [parentCategoryId]);
  const okButtonHandler = (e: React.MouseEvent) => {
    // createArchive &&
    //   setArchiveList &&
    //   archiveList &&
    //   createArchive({ name, year: Number(year), introduce }).then(({ result }) => {
    //     const archive = result;
    //     archive && setArchiveList([archive, ...archiveList]);
    //   });
    // OK_Button_onClick && OK_Button_onClick(e);
    // NO_Button_onClick && NO_Button_onClick(e);
  };
  return (
    <Container
      mode={mode}
      label_size={label_size}
      label_weight={label_weight}
      input_width={input_width}
      input_height={input_height}>
      <Box>
        <Label mode={mode === 'dark' ? 'white' : 'dark'} label="PARENT CATEGORY" />
        <Select name="parent_category" id="parent_category" onChange={selectOnChange}>
          <option value={undefined}>null</option>
          {categoryList &&
            categoryList.map((category) => (
              <option key={category.category_id} value={category.category_id}>
                {category.name}
              </option>
            ))}
        </Select>
      </Box>
      <Box>
        <InputLabel
          mode={mode === 'dark' ? 'white' : 'dark'} //
          value={name}
          // value={archiveInfo?.name}
          label="CATEGORY NAME"
          onChange={onChangeName}
          placeholder="name"
        />
      </Box>

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
const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.color.yellow.yellow};
  color: ${({ theme }) => theme.color.yellow.yellow};
  width: ${({ theme }) => theme.size.width.medium};
  height: ${({ theme }) => theme.size.space.base};

  background-color: transparent;
`;
