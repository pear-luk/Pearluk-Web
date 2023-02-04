import { forwardRef, HTMLInputTypeAttribute, RefObject } from 'react';
import styled from 'styled-components';

import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/mode';


interface Props {
  mode: ModeType;
  type?: HTMLInputTypeAttribute;

  input_width?: keyof Size['width'];
  input_height?: keyof Size['space'];

  ref?: RefObject<HTMLInputElement>;
  onChange?: () => void;
}
// (typeof E_status)[keyof typeof E_status]
// mode, type = 'text', ref, onChange
export const InputText = forwardRef(({ type, ...props }: Props) => {
  return (
    <Input
      // mode={mode}
      type={type}
      // onChange={onChange}
      // ref={ref}
      // input_width={input_width}
      // input_height={input_height}
      {...props}
    />
  );
});

const Input = styled.input.attrs(({ type }) => ({ type: type }))<Props>`
  background-color: transparent;
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  border: 1px solid ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  font-size: 1rem;
  width: ${({ theme, input_width }) => input_width && theme.size.width[input_width]};
  height: ${({ theme, input_height }) => input_height && theme.size.space[input_height]};
`;
