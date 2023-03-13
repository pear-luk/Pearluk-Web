import { forwardRef, RefObject } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';

interface Props {
  mode: ModeType;
  value?: string;
  size?: keyof Size['width'];
  id?: string;
  placeholder?: string;
  onClick?: ((e: React.MouseEvent<HTMLElement>) => void) | (() => void);
  onChange?: ((e: React.ChangeEvent<HTMLTextAreaElement>) => void) | (() => void);
}

export const TextArea = forwardRef(
  (
    { mode, size = 'medium', ...props }: Props,
    ref?: ((instance: HTMLTextAreaElement | null) => void) | RefObject<HTMLTextAreaElement> | null | undefined,
  ) => {
    return <StyledTextArea mode={mode} ref={ref} size={size} {...props}></StyledTextArea>;
  },
);

const StyledTextArea = styled.textarea<Props>`
  background-color: transparent;
  width: ${({ theme, size }) => size && theme.size.width[size]};

  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  border: 1px solid ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  resize: none;
  overflow: hidden;
  min-height: 10.6rem;
`;
