import React, { forwardRef, HTMLInputTypeAttribute, RefObject } from 'react';
import styled from 'styled-components';

import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';

interface Props {
  mode: ModeType;
  type?: HTMLInputTypeAttribute;
  id?: string;
  input_width?: keyof Size['width'];
  input_height?: keyof Size['space'];
  input_font_size?: keyof Size['font'];

  forwardedRef?: RefObject<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  onClick?: ((e: React.MouseEvent<HTMLElement>) => void) | (() => void);
  onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | (() => void);
}
// (typeof E_status)[keyof typeof E_status]
// mode, type = 'text', ref, onChange
export const InputText = ({
  type,
  input_font_size = 'primary',
  forwardedRef,
  value,
  disabled,
  placeholder,
  ...props
}: Props) => {
  return (
    <Input
      type={type}
      value={value}
      input_font_size={input_font_size}
      ref={forwardedRef || undefined}
      disabled={disabled}
      {...props}
      placeholder={placeholder}
    />
  );
};

export const InputTextForwardRef = forwardRef(InputText);

const Input = styled.input.attrs(({ type }) => ({ type: type }))<Props>`
  background-color: transparent;
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  border: 1px solid ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  font-size: ${({ theme, input_font_size }) => input_font_size && theme.size.font[input_font_size]};
  width: ${({ theme, input_width }) => input_width && theme.size.width[input_width]};
  height: ${({ theme, input_height }) => input_height && theme.size.space[input_height]};
`;
