import React, { forwardRef, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

import { FontWeight, Size } from '../../../styles/theme';
import { ButtonColorType, ModeType } from '../../../types/common/propsTypes';
import { Button } from '../../elements/Button';
import { InputText } from '../../elements/InputText';
type Label_type = 'top' | 'left' | 'right';

interface Props {
  mode: ModeType;
  type?: HTMLInputTypeAttribute;

  witdh?: keyof Size['width'];
  input_height?: keyof Size['space'];
  input_font_size?: keyof Size['font'];
  value?: string;

  button_label: string;
  label_type?: Label_type;
  label_size?: keyof Size['font'];
  label_weight?: keyof FontWeight;

  disabled?: boolean;

  onChange?: (() => void) | ((e: React.ChangeEvent<HTMLInputElement>) => void);
  button_color?: ButtonColorType;
  button_onClick?: () => void;
}
// (typeof E_status)[keyof typeof E_status]

export const InpunButton = forwardRef(
  (
    {
      mode,
      type = 'text',

      witdh = 'medium',
      input_height = 'base',
      input_font_size = 'primary',
      button_label,
      value,
      disabled,

      onChange,
      button_onClick,
      button_color = 'black',
    }: Props,
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <Container mode={mode} witdh={witdh}>
        <InputText
          mode={mode}
          type={type}
          input_height={input_height}
          input_width={witdh}
          input_font_size={input_font_size}
          onChange={onChange}
          ref={ref}
          disabled={disabled}
          value={value}
        />

        <ButtonBox>
          <Button color={button_color} label={button_label} onClick={button_onClick} />
        </ButtonBox>
      </Container>
    );
  },
);

// label, label_type, label_size, label_weight
// "onChange" | "type" | "mode" | "input_width" | "input_height"
const Container = styled.div<Pick<Props, 'mode' | 'witdh'>>`
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  width: ${({ witdh, theme }) => witdh && theme.size.width[witdh]};
  display: flex;
  align-items: center;
`;

const ButtonBox = styled.div`
  flex: 1 0 auto;
`;
