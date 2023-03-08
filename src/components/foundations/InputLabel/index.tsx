import React, { forwardRef, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

import { FontWeight, Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { InputText } from '../../elements/InputText';
import { Label } from '../../elements/Label';
type Label_type = 'top' | 'left' | 'right';

interface Props {
  mode: ModeType;
  type?: HTMLInputTypeAttribute;

  input_width?: keyof Size['width'];
  input_height?: keyof Size['space'];
  input_font_size?: keyof Size['font'];
  value?: string;

  label: string;
  label_type?: Label_type;
  label_size?: keyof Size['font'];
  label_weight?: keyof FontWeight;

  disabled?: boolean;
  placeholder?: string;
  onChange?: (() => void) | ((e: React.ChangeEvent<HTMLInputElement>) => void);
}
// (typeof E_status)[keyof typeof E_status]

export const InputLabel = forwardRef(
  (
    {
      mode,
      type = 'text',

      input_width = 'medium',
      input_height = 'base',
      input_font_size = 'primary',

      label,
      label_type = 'top',
      label_size = 'medium',
      label_weight = 'bold',

      value,
      disabled,
      placeholder,
      onChange,
    }: Props,
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <Container
        mode={mode}
        label_size={label_size}
        label_weight={label_weight}
        label_type={label_type}
        input_width={input_width}
        input_height={input_height}>
        {(label_type === 'top' || label_type === 'left') && (
          <Label
            mode={mode}
            label={label}
            label_type={label_type}
            label_size={label_size}
            label_weight={label_weight}
          />
        )}
        <InputText
          mode={mode}
          type={type}
          input_height={input_height}
          input_width={input_width}
          input_font_size={input_font_size}
          onChange={onChange}
          ref={ref}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
        />
        {label_type === 'right' && (
          <Label
            mode={mode}
            label={label}
            label_type={label_type}
            label_size={label_size}
            label_weight={label_weight}
          />
        )}
      </Container>
    );
  },
);

// label, label_type, label_size, label_weight
// "onChange" | "type" | "mode" | "input_width" | "input_height"
const Container = styled.div<Omit<Props, 'label' | 'onChange' | 'type'>>`
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  font-size: ${({ label_size, theme }) => label_size && theme.size.font[label_size]};
  display: ${({ label_type }) => label_type !== 'top' && 'flex'};
  align-items: center;
`;
