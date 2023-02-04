import { RefObject } from 'react';
import styled from 'styled-components';

import { FontWeight, Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/mode';
import { Button } from '../../elements/Button';

interface Props {
  mode: ModeType;

  input_width?: keyof Size['width'];
  input_height?: keyof Size['space'];

  label_size?: keyof Size['font'];
  label_weight?: keyof FontWeight;

  ref?: RefObject<HTMLInputElement>;
  setPhoneNumber?: Dispatch<SetStateAction<string>>;
}
export const InputAddress = ({
  mode,

  input_width = 'medium',
  input_height = 'base',

  label_size = 'medium',
  label_weight = 'medium',

  ref,
}: Props) => {
  return (
    <Container
      mode={mode}
      label_size={label_size}
      label_weight={label_weight}
      input_width={input_width}
      input_height={input_height}>
      <Label>POSTCODE</Label>
      <PostCodeBox>
        <PostCodeInput disabled></PostCodeInput>
        <ButtonBox>
          <Button color={mode === 'dark' ? 'yellow' : 'black'} label="SEARCH" size="large"></Button>
        </ButtonBox>
      </PostCodeBox>
      <Label>ADDRESS</Label>
      <AddressInput rows={2} cols={20} readOnly disabled></AddressInput>
      <DetailAddressInput></DetailAddressInput>
    </Container>
  );
};
const PostCodeInput = styled.input`
  width: auto;
  width: 100%;
  flex-basis: auto;
`;
const AddressInput = styled.textarea`
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;

  width: 100%;

  resize: none;
`;
const Container = styled.div<Omit<Props, 'label' | 'onChange' | 'type'>>`
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  font-size: ${({ label_size, theme }) => label_size && theme.size.font[label_size]};

  width: ${({ theme, input_width }) => input_width && theme.size.width[input_width]};
  label {
    font-weight: ${({ theme, label_weight }) => label_weight && theme.fontWeight[label_weight]};
    display: block;
  }
  input {
    outline: none;
    display: block;
    margin: ${({ theme }) => theme.size.space.xxsmall} 0;

    background-color: transparent;
    border: 1px solid ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
    color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
    font-size: 1.4rem;
    width: ${({ theme, input_width }) => input_width && theme.size.width[input_width]};
    height: ${({ theme, input_height }) => input_height && theme.size.space[input_height]};
  }
  ${AddressInput} {
    outline: none;
    height: ${({ theme, input_height }) => input_height && `calc(${theme.size.space[input_height]} * 2)`};
    border: 1px solid ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  }
`;

const Label = styled.label``;

const ButtonBox = styled.div`
  margin-left: 0.6rem;
  flex: 1 0 auto;
`;

const DetailAddressInput = styled.input``;

const PostCodeBox = styled.div`
  display: flex;
  align-items: center;
`;
