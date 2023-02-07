import { forwardRef, RefObject } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';

interface Props {
  mode: ModeType;

  size?: keyof Size['width'];

  forwardedRef?: RefObject<HTMLTextAreaElement>;
  onClick?: ((e: React.MouseEvent<HTMLElement>) => void) | (() => void);
  onChange?: ((e: React.ChangeEvent<HTMLTextAreaElement>) => void) | (() => void);
}

export const TextArea = forwardRef(({ mode, forwardedRef, size = 'medium', ...props }: Props) => {
  return <StyledTextArea mode={mode} ref={forwardedRef || undefined} size={size} {...props}></StyledTextArea>;
});
const StyledTextArea = styled.textarea<Props>`
  background-color: transparent;
  width: ${({ theme, size }) => size && theme.size.width[size]};

  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  border: 1px solid ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  resize: none;
  overflow: hidden;
  min-height: 10.6rem;
`;
