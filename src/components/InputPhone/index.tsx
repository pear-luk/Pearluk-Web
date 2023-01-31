import { ChangeEvent, Dispatch, MouseEvent, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
import { FontWeight, Size } from '../../styles/theme';
type Label_type = 'top' | 'left' | 'right';

interface Props {
  mode: ModeType;

  input_width?: keyof Size['width'];
  input_height?: keyof Size['space'];

  label: string;
  label_type?: Label_type;
  label_size?: keyof Size['font'];
  label_weight?: keyof FontWeight;

  ref?: RefObject<HTMLInputElement>;
  setPhoneNumber?: Dispatch<SetStateAction<string>>;
}
export const InputPhone = ({
  mode,

  input_width = 'medium',
  input_height = 'base',

  label,
  label_type = 'top',
  label_size = 'medium',
  label_weight = 'medium',

  setPhoneNumber,
}: Props) => {
  const [phoneNum, setPhoneNum] = useState({
    first: '',
    second: '',
    third: '',
  });
  const phoneRef_first = useRef<HTMLInputElement>(null);
  const phoneRef_second = useRef<HTMLInputElement>(null);
  const phoneRef_third = useRef<HTMLInputElement>(null);
  const inputClickHandler = (e: MouseEvent) => {
    (e.target as HTMLTextAreaElement).value = '';
  };
  const inputChangeHandler = (e: ChangeEvent) => {
    if (e.target.id === 'first') {
      if ((e.target as HTMLInputElement).value.length === 3) {
        if (phoneRef_second.current) {
          phoneRef_second.current.value = '';
          phoneRef_second.current.focus();
        }
      }
    }
    if (e.currentTarget.id === 'second') {
      if ((e.target as HTMLInputElement).value.length === 4) {
        if (phoneRef_third.current) {
          phoneRef_third.current.value = '';
          phoneRef_third.current.focus();
        }
      }
    }

    setPhoneNum({ ...phoneNum, [e.target.id]: (e.target as HTMLInputElement).value });
  };
  useEffect(() => {
    if (setPhoneNumber) {
      const { first, second, third } = phoneNum;
      setPhoneNumber(`${first}-${second}-${third}`);
    }
  }, [phoneNum, setPhoneNumber]);

  return (
    <Container
      mode={mode}
      label_size={label_size}
      label_weight={label_weight}
      label_type={label_type}
      input_width={input_width}
      input_height={input_height}>
      <Label>{label}</Label>

      <Input
        id={'first'}
        maxLength={3}
        ref={phoneRef_first}
        onClick={inputClickHandler}
        onChange={inputChangeHandler}
      />
      <Hyphen />
      <Input
        id={'second'}
        maxLength={4}
        ref={phoneRef_second}
        onClick={inputClickHandler}
        onChange={inputChangeHandler}
      />
      <Hyphen />
      <Input
        id={'third'}
        maxLength={4}
        ref={phoneRef_third}
        onClick={inputClickHandler}
        onChange={inputChangeHandler}
      />
    </Container>
  );
};

const Container = styled.div<Omit<Props, 'label' | 'onChange' | 'type'>>`
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  font-size: ${({ label_size, theme }) => theme.size.font[label_size]};
  display: flex;
  align-items: center;
`;
const Label = styled.label``;

const Input = styled.input`
  width: 8.8rem;
  border: 1px solid black;
  text-align: left;
`;

const Hyphen = styled.div`
  width: 0.8rem;
  height: 0;
  border-top: 1px solid black;
  margin: 0 0.4rem;
`;
