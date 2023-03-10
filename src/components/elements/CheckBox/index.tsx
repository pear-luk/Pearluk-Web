import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';

interface Props {
  mode: ModeType;

  label?: string;
  label_type?: 'left' | 'right';
  label_size?: keyof Size['font'];
  checked?: boolean;

  id?: string;
  onClick?: (() => void) | ((e: React.MouseEvent) => void);
  onChange?: (() => void) | ((e: React.ChangeEvent) => void);
}

export const CheckBox = forwardRef(
  (
    {
      mode,
      label,
      checked,
      id,

      onClick,
      onChange,
      label_type = 'right',
      label_size = 'xsmall',
    }: Props,
    ref?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined,
  ) => {
    return (
      <CheckBoxLabel label_size={label_size}>
        {label_type === 'left' && label}
        <CheckboxInput mode={mode} id={id} onClick={onClick} ref={ref} checked={checked} onChange={onChange} />
        <CustomCheckBox mode={mode} label_type={label_type}></CustomCheckBox>
        {label_type === 'right' && label}
      </CheckBoxLabel>
    );
  },
);

const CheckBoxLabel = styled.label<{ label_size?: keyof Size['font'] }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  /* flex: 1 0 auto; */
  height: 1.6rem;
  font-size: ${({ theme, label_size }) => label_size && theme.size.font[label_size]};
`;
const CustomCheckBox = styled.span<Pick<Props, 'mode' | 'label_type'>>`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  border: 1px solid ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  background-color: transparent;

  margin-right: ${({ label_type }) => label_type === 'right' && '0.4rem'};
  margin-left: ${({ label_type }) => label_type === 'left' && '0.4rem'};
  /* background-color: transparent; */
`;

const CheckboxInput = styled.input.attrs(() => ({
  type: 'checkBox',
}))<Pick<Props, 'mode'>>`
  width: 1.6rem;
  height: 1.6rem;

  outline: none;
  display: none;

  :checked ~ ${CustomCheckBox} {
    background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  }
`;
